#!/usr/bin/env node
import { execSync, spawnSync } from 'child_process';
import { readFileSync, existsSync, mkdirSync, cpSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { homedir } from 'os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CONFIG = JSON.parse(readFileSync(join(ROOT, 'config', 'plugins.json'), 'utf8'));

const command = process.argv[2] || 'help';
const flags = process.argv.slice(3);

switch (command) {
  case 'install': await runInstall(); break;
  case 'update': runUpdate(); break;
  case 'list': runList(); break;
  case 'status': runStatus(); break;
  default: printHelp(); break;
}

async function runInstall() {
  console.log('🚀 @earthstrix/claude-skills installer\n');

  if (!checkClaudeCLI()) {
    console.error('❌ Claude CLI not found.');
    console.error('   Install Claude Code first: https://claude.ai/code');
    process.exit(1);
  }

  const pluginCount = CONFIG.plugins.length;
  console.log(`📦 Installing ${pluginCount} plugins from ${CONFIG.marketplace}...`);
  console.log('   This may take a few minutes.\n');

  const failed = [];

  for (const plugin of CONFIG.plugins) {
    const result = spawnSync(
      'claude',
      ['plugin', 'install', `${plugin}@${CONFIG.marketplace}`],
      { stdio: 'pipe', encoding: 'utf8' }
    );

    if (result.status === 0) {
      console.log(`  ✅ ${plugin}`);
    } else {
      console.log(`  ⚠️  ${plugin} (skipped)`);
      failed.push(plugin);
    }
  }

  // Install external GitHub plugins
  if (CONFIG.external?.length) {
    console.log(`\n🌐 Installing ${CONFIG.external.length} external plugins from GitHub...\n`);
    for (const ext of CONFIG.external) {
      const result = spawnSync(
        'claude',
        ['plugin', 'install', `github:${ext.repo}`],
        { stdio: 'pipe', encoding: 'utf8' }
      );
      if (result.status === 0) {
        console.log(`  ✅ ${ext.name} (${ext.repo})`);
      } else {
        console.log(`  ⚠️  ${ext.name} (skipped)`);
        failed.push(ext.name);
      }
    }
  }

  installCustomPlugin();

  console.log('\n─────────────────────────────────────');
  const totalCount = pluginCount + (CONFIG.external?.length ?? 0) + 1;
  console.log(`✅ Done! ${totalCount - failed.length}/${totalCount} plugins installed.`);

  if (failed.length > 0) {
    console.log(`\n⚠️  ${failed.length} plugins were skipped (may not be available in your region or require auth):`);
    failed.forEach(p => console.log(`   - ${p}`));
  }

  console.log('\n💡 Restart Claude Code to activate all skills.');
  console.log('   Run "claude-skills status" to verify installation.\n');
}

function runUpdate() {
  if (!checkClaudeCLI()) {
    console.error('❌ Claude CLI not found.');
    process.exit(1);
  }
  console.log('🔄 Updating all plugins...');
  try {
    execSync('claude plugin update --all', { stdio: 'inherit' });
    installCustomPlugin();
    console.log('\n✅ All plugins updated.');
  } catch {
    console.error('❌ Update failed. Try running with --verbose for details.');
    process.exit(1);
  }
}

function runList() {
  console.log(`📋 Plugins in ${CONFIG.marketplace} (${CONFIG.plugins.length} total):\n`);
  CONFIG.plugins.forEach((p, i) => {
    console.log(`  ${String(i + 1).padStart(3)}. ${p}`);
  });

  if (CONFIG.external?.length) {
    console.log(`\n🌐 External GitHub plugins (${CONFIG.external.length}):\n`);
    CONFIG.external.forEach(ext => {
      console.log(`       ${ext.name}  —  github:${ext.repo}`);
      console.log(`       ${ext.description}\n`);
    });
  }

  console.log(`  + earthstrix-skills (custom — team-agents, infographic-html, infographic-markdown)`);
}

function runStatus() {
  const installedPath = join(homedir(), '.claude', 'plugins', 'installed_plugins.json');

  if (!existsSync(installedPath)) {
    console.log('⚠️  No plugins installed yet. Run "claude-skills install" to get started.');
    return;
  }

  const installed = JSON.parse(readFileSync(installedPath, 'utf8'));
  const installedNames = new Set(
    Object.keys(installed.plugins || {}).map(k => k.split('@')[0])
  );

  console.log(`📊 Installation status (${installedNames.size} installed):\n`);

  const externalNames = (CONFIG.external ?? []).map(e => e.name);
  const allPlugins = [...CONFIG.plugins, ...externalNames, 'earthstrix-skills'];
  let installedCount = 0;
  let missingCount = 0;

  for (const plugin of allPlugins) {
    const isInstalled = installedNames.has(plugin);
    if (isInstalled) {
      console.log(`  ✅ ${plugin}`);
      installedCount++;
    } else {
      console.log(`  ❌ ${plugin}`);
      missingCount++;
    }
  }

  console.log(`\n  Installed: ${installedCount} / ${allPlugins.length}`);
  if (missingCount > 0) {
    console.log(`  Missing: ${missingCount} — run "claude-skills install" to install them.`);
  }
}

function installCustomPlugin() {
  const targetDir = join(homedir(), '.claude', 'plugins', 'custom', 'earthstrix-skills', '1.0.0');

  try {
    mkdirSync(targetDir, { recursive: true });

    cpSync(join(ROOT, '.claude-plugin'), join(targetDir, '.claude-plugin'), { recursive: true });
    cpSync(join(ROOT, 'skills'), join(targetDir, 'skills'), { recursive: true });

    const installedPath = join(homedir(), '.claude', 'plugins', 'installed_plugins.json');
    let registry = { version: 2, plugins: {} };

    if (existsSync(installedPath)) {
      registry = JSON.parse(readFileSync(installedPath, 'utf8'));
    }

    registry.plugins['earthstrix-skills@custom'] = [{
      scope: 'user',
      installPath: targetDir,
      version: '1.0.0',
      installedAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString()
    }];

    import('fs').then(({ writeFileSync }) => {
      writeFileSync(installedPath, JSON.stringify(registry, null, 2));
    });

    console.log('  ✅ earthstrix-skills (team-agents)');
  } catch (err) {
    console.warn(`  ⚠️  earthstrix-skills (failed: ${err.message})`);
  }
}

function checkClaudeCLI() {
  try {
    execSync('claude --version', { stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

function printHelp() {
  console.log(`
@earthstrix/claude-skills — Claude Code skill set installer

Usage:
  npx @earthstrix/claude-skills <command>

Commands:
  install   Install all marketplace plugins + earthstrix team skills
  update    Update all installed plugins
  list      List all plugins that will be installed
  status    Show which plugins are currently installed

Examples:
  npx @earthstrix/claude-skills install
  npx @earthstrix/claude-skills status
`);
}
