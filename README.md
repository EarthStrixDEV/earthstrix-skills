# @earthstrix/claude-skills

One-command setup for Claude Code — installs all official marketplace plugins + Earthstrix team agent skills.

## Install

```bash
npx @earthstrix/claude-skills install
```

This will:
1. Install all 212 plugins from `claude-plugins-official` marketplace
2. Install the custom `earthstrix-skills` plugin with the `team-agents` skill

Restart Claude Code after installation to activate all skills.

## Commands

```bash
# Install everything
npx @earthstrix/claude-skills install

# Check what's installed
npx @earthstrix/claude-skills status

# List all plugins
npx @earthstrix/claude-skills list

# Update all plugins
npx @earthstrix/claude-skills update
```

## What's included

### Official plugins (212 from claude-plugins-official)

All plugins from the official Claude marketplace — see `config/plugins.json` for the full list.

### Custom: `team-agents` skill

Guides Claude on which specialized subagent to dispatch for each type of work:

| Agent | Role | Use for |
|-------|------|---------|
| `ploysai` | Lead Frontend | FE architecture, tech stack decisions |
| `ploymoon` | Senior Frontend | React/CSS implementation, FE bug fixes |
| `ninni` | Lead Backend | API architecture, system design |
| `ninne` | Senior Backend | API endpoints, business logic, BE bugs |
| `lin` | Database Architect | Schema design, query optimization |
| `film` | Security Engineer | Security review, vulnerability assessment |
| `mim` | UX/UI Designer | Design review, accessibility, user flows |
| `mint` | DevOps Engineer | CI/CD, Docker, deployment, infrastructure |

## Publish to npm

```bash
# Login to npm (requires @earthstrix scope access)
npm login

# Publish
npm publish --access public
```

## Requirements

- [Claude Code](https://claude.ai/code) installed and accessible as `claude` in PATH
- Node.js >= 18

## License

MIT
