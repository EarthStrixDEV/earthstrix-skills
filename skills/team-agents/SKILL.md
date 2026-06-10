---
name: team-agents
description: Use when dispatching subagents for any development task. Guides which specialized agent type to use based on the nature of the work — frontend, backend, database, security, UX, or DevOps. Trigger when the Agent tool is about to be used and the correct subagent_type is unclear.
---

# Team Agents — Earthstrix Role Guide

When using the Agent tool, always specify `subagent_type` matching the task domain. Each role has a distinct scope — pick the narrowest fit.

## Frontend

### ploysai — Lead Frontend Engineer
**Use for:** Architecture decisions, tech stack recommendations, component design review, performance optimization strategy, frontend planning.

Trigger phrases: "ควรใช้ state management อะไร", "วางแผน frontend architecture", "review component structure", "optimize front-end performance"

### ploymoon — Senior Frontend Engineer
**Use for:** Writing React components, implementing UI features, fixing frontend bugs, CSS/Tailwind styling, frontend testing.

Trigger phrases: "เขียน component", "implement UI", "fix button bug", "ทำ responsive layout", "frontend ไม่ทำงาน"

## Backend

### ninni — Lead Backend Engineer
**Use for:** API architecture decisions, system design, microservices planning, REST vs GraphQL choices, high-level backend planning.

Trigger phrases: "ออกแบบ API structure", "system design", "วางแผน microservices", "ควรใช้ REST หรือ GraphQL"

### ninne — Senior Backend Engineer
**Use for:** Writing API endpoints, implementing business logic, fixing backend bugs, writing database queries, setting up authentication.

Trigger phrases: "เขียน API endpoint", "implement JWT", "API return 500", "debug backend", "เขียน query"

## Data

### lin — Database Architect
**Use for:** Database schema design, query optimization, migration planning, data modeling, ORM configuration.

Trigger phrases: "ออกแบบ database schema", "query ช้า", "migrate จาก MySQL", "model relationship", "optimize index"

## Security

### film — Security Engineer
**Use for:** Security review, vulnerability assessment, secure coding guidance, authentication/authorization design, security audit.

Trigger phrases: "review security", "มีช่องโหว่ไหม", "ออกแบบ authentication", "manage API keys", "security audit"

## Design

### mim — Senior UX/UI Designer
**Use for:** UX/UI design guidance, user experience feedback, accessibility review, design system recommendations, user flow design.

Trigger phrases: "review UX", "ออกแบบ user flow", "accessibility", "design system", "color palette", "onboarding flow"

## Infrastructure

### mint — DevOps Engineer
**Use for:** CI/CD pipeline setup, Docker configuration, deployment scripts, infrastructure setup, environment configuration, monitoring, cloud platform management.

Trigger phrases: "setup GitHub Actions", "เขียน Dockerfile", "deploy ขึ้น production", "setup environment variables", "CI/CD"

---

## Quick Reference

| Task type | Agent |
|-----------|-------|
| FE architecture / planning | ploysai |
| FE coding / bug fix | ploymoon |
| BE architecture / planning | ninni |
| BE coding / bug fix | ninne |
| Database / data modeling | lin |
| Security review | film |
| UX/UI design | mim |
| DevOps / infrastructure | mint |
