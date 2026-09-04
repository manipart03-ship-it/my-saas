# Design System Starter Kit

A minimal, AI-readable design system: three layers that any AI coding tool
(Claude, Cursor, Copilot, etc.) can load and follow consistently.

```
design-system/
  tokens.json       ← source of truth (values)
  tokens.css        ← generated CSS variables (what components consume)
  guide.md          ← reasoning layer (when/why to use each token)
  components/
    Button.tsx
    Input.tsx
    Card.tsx
```

## How to wire it up

1. Copy this whole folder into your app, e.g. `src/design-system/`.
2. Import `tokens.css` once, globally (e.g. in your root layout or `main.tsx`):
   ```ts
   import "./design-system/tokens.css";
   ```
3. Load `IBM Plex Sans` and `IBM Plex Mono` (Google Fonts or self-hosted).
4. Import components as needed:
   ```tsx
   import { Button } from "./design-system/components/Button";
   import { Input } from "./design-system/components/Input";
   import { Card } from "./design-system/components/Card";
   ```

## How to use this with an AI coding assistant

Point the assistant at this folder before asking it to build a new screen:

> "Before building this page, read `design-system/guide.md` and
> `design-system/tokens.json`, and reuse `design-system/components/*`
> instead of writing new markup from scratch."

If you're using Claude Code or Cowork, you can drop this folder in as a
project-level reference (or turn `guide.md` into a proper skill) so it's
read automatically at the start of every session.

## Extending it

- Need a new token? Add it to `tokens.json` **and** `tokens.css` — never add
  a token to only one of them.
- Need a new component? Read the "Extending this system" section in
  `guide.md` first — most new UI needs are compositions of Button/Input/Card,
  not new primitives.
- Keep `guide.md` in sync as the system grows. An outdated guide is worse
  than no guide, because the AI will follow it confidently and be wrong.

## What's intentionally not included yet
This is a starter kit, not a full system. As the product grows, you'll
likely want to add: a Select/Dropdown, a Table, a Toast/Notification
pattern, an Icon set, and dark/light theme switching (currently dark-only).
Add each one the same way: token check → guide.md rule → component.
