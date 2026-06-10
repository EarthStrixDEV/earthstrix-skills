---
name: infographic-markdown
description: Use when the user asks to create an infographic, visual summary, or structured visual document as a Markdown file. Triggers on phrases like "สร้าง infographic markdown", "ทำ infographic เป็น md", "visual summary เป็น markdown", "infographic .md", or when an infographic or visual summary is requested explicitly in Markdown format.
---

# Infographic Markdown Generator

Create a visually rich, structured Markdown infographic from the current context and user's prompt.

## Process

### Step 1: Extract & Structure Content

Analyze the conversation context and user prompt:
- Identify the **main topic / title**
- Extract **3–7 key sections or data points**
- Note any **numbers, comparisons, or rankings** to feature
- Determine **document purpose** (summary report, reference card, explainer, comparison)

### Step 2: Apply Frontend Design Principles

Announce: "I'm using the frontend-design skill for visual design principles."

**REQUIRED BACKGROUND:** Use `frontend-design` skill for visual hierarchy decisions

Apply design thinking within Markdown's constraints:
- **Visual hierarchy** via heading levels (`#` → `##` → `###` → bold)
- **Emphasis** via bold for key terms, italics for context
- **Visual grouping** via horizontal rules (`---`) between sections
- **Color coding** via emoji as visual anchors (🔴 risk, 🟢 good, 🔵 info, ⚠️ caution, ✅ done)
- **Scanability** — reader should grasp the core message in under 15 seconds

### Step 3: Build the Markdown File

Use these Markdown infographic patterns based on content type:

**Stats / Numbers:**
```markdown
## 📊 Key Metrics

| Metric | Value | Change |
|--------|-------|--------|
| Revenue | **$2.4M** | 🟢 +18% |
| Users | **14,200** | 🟢 +31% |
| Churn | **2.1%** | 🔴 +0.3% |
```

**Process / Steps:**
```markdown
## 🔄 How It Works

**1️⃣ Input** → User provides context  
**2️⃣ Process** → System analyzes data  
**3️⃣ Output** → Results delivered  
```

**Comparison:**
```markdown
## ⚖️ Option A vs Option B

| | Option A | Option B |
|-|----------|----------|
| Speed | 🟢 Fast | 🔴 Slow |
| Cost | 🔴 High | 🟢 Low |
```

**Callout / Highlight:**
```markdown
> 💡 **Key Insight:** One sentence that captures the most important takeaway.
```

**Section dividers:**
```markdown
---
```

### Step 4: Document Structure

```markdown
# 📌 [Title]
> [One-line summary of the entire infographic]

---

## [Section 1 with emoji]
[content]

---

## [Section 2 with emoji]  
[content]

---

*Source: [context] · Generated: [date]*
```

### Step 5: Save the File

Write to the current working directory:
- Filename: `infographic-<topic-slug>.md` (lowercase, hyphens)
- Example: `infographic-team-structure.md`, `infographic-sprint-summary.md`

### Step 6: Report to User

```
✅ Saved: infographic-sprint-summary.md

Structure: 4 sections — metrics table, highlights, blockers, next steps.
View: open in any Markdown renderer (Obsidian, GitHub, VS Code preview).
```

## Quality Check Before Saving

- [ ] Title is clear and prominent at the top
- [ ] At least one table or structured list is present
- [ ] Key numbers or facts are **bolded**
- [ ] Emoji used as visual anchors (not decoration) — maximum 1 per section header
- [ ] Sections are separated by `---`
- [ ] Entire document is scannable in under 15 seconds
- [ ] One `> blockquote` callout captures the single most important insight
