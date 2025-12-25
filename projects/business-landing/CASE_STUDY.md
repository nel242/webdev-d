# Case Study — Evolving Business Landing Page (Full-Stack)

## Overview

This project demonstrates how a simple business landing page can evolve into a complete, deployable full-stack system through deliberate iteration.  
Instead of creating many disconnected projects, I intentionally grew one project across multiple stages to mirror real freelance work: starting small, responding to new requirements, refactoring safely, and adding backend functionality only when justified.

---

## The Problem

Small businesses often need:
- A clean, professional landing page
- A responsive layout that works on mobile
- A contact form that actually sends messages
- A simple way to view inquiries later

Many sites stop at a static page and rely on third-party tools.  
This project explores building and owning the full solution.

---

## Constraints

- Single developer
- Fluency-first learning (understand before optimizing)
- Minimal tech stack
- Realistic freelance scope
- Each stage must remain understandable and debuggable

---

## Project Evolution

### v1 — Static Landing Page

**Goal:**  
Establish clean structure and predictable rendering.

**What I built:**
- Semantic HTML structure
- Basic CSS styling
- Clear visual hierarchy

**Key learning:**
- Browser default styles affect layout even without custom CSS
- HTML defines what exists; CSS controls presentation

---

### v2 — Responsive Layout

**Goal:**  
Make the page work across screen sizes.

**What changed:**
- Mobile-first CSS
- Box model corrections
- Flexbox layout patterns
- Responsive spacing

**Challenges & fixes:**
- Elements overflowing due to width + padding
- Resolved by understanding the CSS box model instead of trial-and-error

**Key learning:**
- Most layout bugs come from box model misunderstandings
- DevTools are essential for inspecting computed sizes

---

### v3 — Full-Stack Contact Form

**Goal:**  
Make the contact form functional.

**What I added:**
- Node.js + Express server
- Contact form POST endpoint
- Server-side validation
- Logging for debugging

**Challenges & fixes:**
- Requests failing silently
- Solved by inspecting network requests and server logs

**Key learning:**
- JavaScript in the browser does not send data by itself — servers must receive and respond
- Understanding the HTTP request/response cycle is critical

---

### v4 — Persistence & Admin View

**Goal:**  
Store and review submissions.

**What I added:**
- Database persistence
- CRUD operations for messages
- Simple admin view

**Challenges & fixes:**
- Data validation
- Preventing accidental data loss
- Keeping the UI simple and predictable

**Key learning:**
- Persistence changes how you think about errors and responsibility
- Data handling must be deliberate and cautious

---

## Key Decisions

- **One evolving project instead of many small ones**  
  Mirrors real freelance maintenance work.

- **Minimal stack**  
  Reduces cognitive load and improves debugging confidence.

- **Versioned folders (v1 → v4)**  
  Preserves history and shows progression.

---

## What I Would Improve Next

- Add basic authentication to the admin view
- Improve accessibility (ARIA, keyboard navigation)
- Add spam protection to the contact form
- Improve deployment automation

---

## Tech Used

- HTML
- CSS
- JavaScript
- Node.js
- Express
- Database (SQLite or PostgreSQL)
- Git

---

## Outcome

This project demonstrates the ability to:
- Start with a simple requirement
- Respond to evolving needs
- Build and debug full-stack functionality
- Explain decisions clearly
- Deliver a maintainable system

It reflects how real client work evolves — not just how demos are built.
