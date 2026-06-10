---
name: infographic-html
description: Use when the user asks to create, generate, or make an infographic, visual summary, or data visualization as an HTML file. Triggers on phrases like "สร้าง infographic", "ทำ infographic", "สรุปเป็น infographic", "create infographic", "visualize this as HTML", or any request for a visual HTML summary of content or data.
---

# Infographic HTML Generator

Create a beautiful, self-contained HTML infographic from the current context and user's prompt.

## Process

### Step 1: Extract & Structure Content

Analyze the conversation context and user prompt:
- Identify the **main topic / title**
- Extract **3–7 key sections or data points** (more than 7 becomes cluttered)
- Note any **numbers, statistics, or comparisons** worth highlighting
- Determine the **tone** (technical, educational, marketing, report)

### Step 2: Invoke Frontend Design Skill

Announce: "I'm using the frontend-design skill to design this infographic."

**REQUIRED SUB-SKILL:** Use `frontend-design`

Apply `frontend-design` guidance to determine:
- Color palette (derive from topic mood — tech = blue/gray, health = green, finance = navy/gold, etc.)
- Typography scale (large headline → section headers → body → captions)
- Layout structure (single column, cards grid, timeline, comparison)
- Visual accents (icons via unicode/emoji, dividers, highlights)

### Step 3: Build the HTML File

Generate a **fully self-contained HTML file** with these constraints:

**Structure:**
```
<header>  — title, subtitle, source/date
<main>    — 3–7 sections (cards, stats, timeline, or list)
<footer>  — attribution line
```

**Technical rules:**
- All CSS embedded in `<style>` tag — no external stylesheets
- No CDN links, no external fonts (use system font stack)
- Icons via unicode characters or inline `<svg>` only
- CSS custom properties for color palette (easy to retheme)
- Responsive: works at 375px–1200px viewport
- Print-friendly: `@media print` block included

**Visual rules:**
- Strong visual hierarchy: title (2.5rem+) → section headers (1.25rem) → body (1rem)
- Use white space generously — infographics breathe
- Highlight 1–2 key numbers in large display typography
- Consistent corner radius, spacing, and accent color throughout
- Dark text on light background (default) for readability

### Step 4: Save the File

Write the file to the current working directory:
- Filename: `infographic-<topic-slug>.html` (lowercase, hyphens, no spaces)
- Example: `infographic-q3-revenue.html`, `infographic-onboarding-flow.html`

### Step 5: Report to User

Tell the user:
- The filename written
- A 1-line description of the design choices made
- How to open it (drag into browser, or `open filename.html`)

## Output Example

```
✅ Saved: infographic-q3-revenue.html

Design: Navy/gold palette, 4-card grid layout, key stat highlighted at top.
Open: drag the file into your browser, or run `open infographic-q3-revenue.html`
```

## Quality Check Before Saving

- [ ] All CSS is inline — no `<link>` or `src=` pointing outside the file
- [ ] File opens correctly when dragged into a browser
- [ ] Title is visible and dominant at the top
- [ ] At least one number/stat is displayed in large display type
- [ ] Sections are visually separated and scannable in under 10 seconds
