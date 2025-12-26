# Project 1 — Interactive Toggle (Vanilla JavaScript)

## What this demonstrates
- State-driven UI updates
- Event handling
- Defensive DOM guarding
- Single render() pattern
- Clean separation of concerns

## How it works
- A boolean state (`visible`) represents application state
- All UI updates happen in a single `render()` function
- User interaction updates state, then calls `render()`
- Guards prevent runtime crashes if required elements are missing

## Why this matters
This project demonstrates the core mental model used by modern UI frameworks
without relying on any libraries or frameworks.

