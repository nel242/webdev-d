# 🧱 Module 1 — Foundations of the Web (Read-Only Lessons)

**Goal of Module 1**  
By the end of this module, you should be able to:
- Look at any simple webpage and **explain how it’s built**
- Read HTML and CSS and **know what each part does**
- Understand *why* layouts break and *how* they’re fixed

This module mirrors **The Odin Project – Foundations**, rewritten as clear, phone-friendly reading lessons.

---

## 📘 Lesson 1 — What the Web Actually Is

### The Big Picture
A website is **three things working together**:

- **HTML** — Structure (what exists)
- **CSS** — Style (how it looks)
- **JavaScript** — Behavior (how it acts)

Module 1 focuses on **HTML + CSS only**.

### How a Web Page Loads (Mental Model)
1. Browser requests a page
2. Server sends back **HTML**
3. Browser reads HTML top-to-bottom
4. Browser fetches **CSS**
5. Browser builds a visual tree
6. Page is painted on screen

➡️ **Key idea:** HTML comes first. CSS never creates content.

---

## 📘 Lesson 2 — HTML Is a Document, Not Code Logic

### What HTML Really Is
HTML is a **structured document**, like:
- A legal contract
- A book manuscript
- A newspaper article

It describes **meaning**, not appearance.

### Core HTML Anatomy (Conceptual)
Every page has:
- A declaration (this is HTML)
- A **head** (metadata, title, links)
- A **body** (everything visible)

Think of HTML as a **tree**: parents contain children, and nesting defines relationships.

### Tags vs Elements
- **Tag** → `<p>`
- **Element** → `<p>Hello</p>`

Elements may have attributes (extra info) and content.

---

## 📘 Lesson 3 — Text, Meaning, and Semantics

### Headings Are NOT About Size
Headings (`h1`–`h6`) define **importance**, not appearance.

Correct mental model:
- `h1` → page topic
- `h2` → section
- `h3` → subsection

Search engines and screen readers rely on this structure.

### Paragraphs and Emphasis
- Paragraphs group ideas
- Emphasis tags convey **meaning**, not style

CSS decides how those meanings look.

---

## 📘 Lesson 4 — Lists, Links, and Navigation

### Lists Are Everywhere
Menus, sidebars, instructions — all lists.

Two types:
- **Ordered** — sequence matters
- **Unordered** — grouping matters

Lists can contain text, links, or even other lists.

### Links Are the Web
Links connect documents.

Key idea:
- A link points to a **URL**
- URLs can be absolute or relative

Relative paths are how multi-page sites work.

---

## 📘 Lesson 5 — CSS: How Style Is Applied

### CSS Is a Rulebook
CSS says:
> “When you see *this*, apply *these rules*”

A rule has:
- A selector (what to target)
- Declarations (what to apply)

### CSS Does NOT
- Create content
- Change HTML structure
- Fix bad HTML

Good HTML → easy CSS  
Bad HTML → fragile CSS

---

## 📘 Lesson 6 — The Cascade (Why CSS “Doesn’t Work”)

### Why This Matters
CSS usually isn’t broken — it’s following rules you don’t know yet.

### The Cascade Decides
1. Importance
2. Specificity
3. Source order

Mental shortcut:
> More specific beats earlier  
> Later beats earlier when equal

---

## 📘 Lesson 7 — The Box Model (The Secret of Layout)

### Everything Is a Box
Every element has:
- Content
- Padding
- Border
- Margin

Spacing problems = box model problems.

### Margin vs Padding
- Margin → space **outside**
- Padding → space **inside**

Never guess. Always inspect.

---

## 📘 Lesson 8 — Block vs Inline (Why Things Stack)

### Block Elements
- Take full width
- Stack vertically

### Inline Elements
- Flow with text
- Ignore width and height

### Inline-block
- Flow inline
- Behave like blocks

This explains most alignment issues.

---

## 📘 Lesson 9 — Flexbox: Modern Layout Thinking

### Why Flexbox Exists
Flexbox solves:
- Centering
- Spacing evenly
- Flexible resizing

### Core Flex Concepts
- Parent controls layout
- Direction matters
- Main axis vs cross axis
- Items can grow, shrink, align

Think **relationships**, not numbers.

---

## 📘 Lesson 10 — How Developers Actually Debug

### The Superpower: DevTools
Developers don’t guess. They:
- Inspect elements
- Toggle rules on/off
- Watch box boundaries
- Read computed styles

If you can *read* DevTools, you can fix layouts.

---

## 🧭 End of Module 1 — What You Should Now Understand

You should now be able to:
- Read basic HTML and explain structure
- Read CSS and explain why styles apply
- Understand why layout breaks
- Know *which concept* fixes a problem

**Next:** Hands-on exercises, portfolio checklist, and Day 1 coding workflow.



---

# 📄 Module 1 — One‑Page Cheat Sheet

## HTML Mental Models
- HTML describes **meaning and structure**, not appearance
- Elements form a **tree** (parent → child)
- Browsers read HTML **top to bottom**
- CSS never creates content — HTML always comes first

### Common Elements
- `h1–h6` → document hierarchy, not font size
- `p` → grouped ideas
- `ul / ol / li` → grouping and sequence
- `a` → connects documents (the web)

---

## CSS Mental Models
- CSS is a **rulebook**, not instructions
- Rules apply when a selector matches

### The Cascade (Why Styles Win or Lose)
1. Importance
2. Specificity
3. Source order (last wins)

Shortcut: **More specific > later > earlier**

---

## Box Model (Layout Core)
Every element =
- Content
- Padding (inside)
- Border
- Margin (outside)

Most spacing bugs = box model misunderstandings

---

## Display Types
- **Block** → full width, stacks vertically
- **Inline** → flows with text
- **Inline‑block** → inline + size control

---

## Flexbox Essentials
- Parent controls layout
- Direction matters
- Main axis ≠ cross axis
- Items can grow, shrink, align

Think **relationships**, not pixel math

---

## Debugging Rules
- Never guess — inspect
- Toggle CSS on/off
- Watch margins and padding
- Read computed styles

If you can read DevTools, you can fix layouts

---

# 🧱 Module 2 — HTML & CSS in Practice (Reading Lessons)

**Goal of Module 2**  
Move from understanding concepts → **building real pages confidently**.

By the end of Module 2, you should be able to:
- Build multi‑page sites
- Control layout intentionally
- Debug without panic
- Produce portfolio‑ready static pages

---

## 📘 Lesson 1 — Thinking in Pages, Not Files

Websites are collections of **documents**, not single files.

Key ideas:
- Pages share structure
- Navigation connects pages
- Relative paths create site structure

Mental model: a website is a **folder system with meaning**.

---

## 📘 Lesson 2 — Semantic HTML (Writing for Humans & Machines)

Semantic elements describe **what something is**, not how it looks.

Examples:
- Header, main content, sections, footer
- Navigation vs content

Why it matters:
- Accessibility
- Search engines
- Easier CSS

---

## 📘 Lesson 3 — Forms & User Input (Conceptual)

Forms are how users **talk back** to the site.

Key concepts:
- Inputs collect data
- Labels explain inputs
- Buttons submit intent

Even without JavaScript, forms teach structure and UX thinking.

---

## 📘 Lesson 4 — Layout Strategy (Before Writing CSS)

Good layout starts **before CSS**.

Ask:
- What are the major sections?
- Which elements belong together?
- What should stretch or stay fixed?

CSS should *express decisions*, not discover them.

---

## 📘 Lesson 5 — Positioning (When Flexbox Is Not Enough)

Positioning changes **how elements relate to the page**.

Concepts:
- Normal flow
- Relative reference points
- Absolute positioning

Rule of thumb: use positioning **sparingly and deliberately**.

---

## 📘 Lesson 6 — Responsive Thinking (Without Media Queries Yet)

Responsive design starts with:
- Flexible widths
- Natural wrapping
- Content‑driven sizing

If your layout breaks early, responsiveness will be painful later.

---

## 📘 Lesson 7 — CSS Organization & Readability

Good CSS is:
- Predictable
- Readable
- Grouped logically

Future‑you is your most important teammate.

---

## 📘 Lesson 8 — Debugging as a Skill

Debugging is not fixing mistakes — it is **finding truth**.

Process:
1. Observe
2. Inspect
3. Isolate
4. Adjust

Calm debugging beats clever code.

---

## 🧭 End of Module 2 — Readiness Check

You are ready to move on when you can:
- Build a static site from scratch
- Explain every layout choice
- Debug without copying random CSS
- Recognize bad structure immediately

**Next:** Module 3 — JavaScript Foundations

