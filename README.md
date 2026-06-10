# @earthstrix/claude-skills

One-command setup for Claude Code — installs all official marketplace plugins + Earthstrix team agent skills.

## Install

```bash
npx @earthstrix/claude-skills install
```

This will:
1. Install all 212 plugins from `claude-plugins-official` marketplace (includes MCP servers for GitHub, Notion, Slack, Stripe, Supabase, Vercel, Figma, Linear, Cloudflare...)
2. Install external plugins: `9arm-skills`, `awesome-agent-skills`
3. Install the custom `earthstrix-skills` plugin with team skills + persona

Restart Claude Code after installation to activate all skills.

## Commands

```bash
npx @earthstrix/claude-skills install   # Install everything
npx @earthstrix/claude-skills status    # Check what's installed
npx @earthstrix/claude-skills list      # List all plugins
npx @earthstrix/claude-skills update    # Update all plugins
```

## What's included

### Persona & Rules (CLAUDE.md)

Active automatically after install — no config needed:

- **Min-Ju persona** — Lead Engineer, พูดภาษาไทย-อังกฤษผสม, ลงท้ายด้วย ค่ะ/คะ
- **No AI Slop** — ห้ามผลิตงานคลุมเครือ ทุกบรรทัดต้องมีเหตุผล
- **No Over-thinking** — เริ่มเขียนโค้ดเลย ไม่ต้อง investigate ก่อน
- **Stay In Scope** — ทำเฉพาะที่ถูกขอ ถ้าจะทำเพิ่มต้องถามก่อน
- **User Restriction** — ห้าม bash สำรวจ, ห้ามเดา scope, อ่านไฟล์โดยตรงเท่านั้น

### Custom Skills (3)

#### `team-agents`
Guides Claude on which specialized subagent to dispatch:

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

#### `infographic-html`
สร้าง self-contained HTML infographic จาก context + user prompt โดยเรียก `frontend-design` skill

#### `infographic-markdown`
สร้าง Markdown infographic จาก context + user prompt

### Official Marketplace (212 plugins)

All plugins from `claude-plugins-official` — see `config/plugins.json` for the full list.

### External GitHub Plugins

| Plugin | Source | หมายเหตุ |
|--------|--------|---------|
| `9arm-skills` | `thananon/9arm-skills` | debug-mantra, post-mortem, scrutinize (⭐ 2.4k) |
| `awesome-agent-skills` | `VoltAgent/awesome-agent-skills` | 1000+ community skills จาก official dev teams |

## Publish to npm

```bash
npm login   # requires @earthstrix scope
npm publish --access public
```

## Requirements

- [Claude Code](https://claude.ai/code) installed and accessible as `claude` in PATH
- Node.js >= 18

## Changelog

### v1.2.0
- เพิ่ม external plugins: `9arm-skills`, `awesome-agent-skills`
- เพิ่ม `CLAUDE.md` — Min-Ju persona + rules active อัตโนมัติหลัง install

### v1.1.0
- เพิ่ม skill `infographic-html`
- เพิ่ม skill `infographic-markdown`

### v1.0.0
- Initial release
- skill `team-agents`, CLI installer, 212 official plugins

## License

MIT
