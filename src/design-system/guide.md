# Design System Guide (read this before generating any UI code)

This file tells an AI assistant *how to decide*, not just *what values exist*.
`tokens.json` / `tokens.css` are the values. This guide is the judgment layer.
Load both before writing or editing any component.

## Identity in one sentence
An ink-dark, quietly technical workspace with a single warm brass accent —
not another indigo-and-white or neon-on-black SaaS template.

## Hard rules

1. **Never write a raw hex, rgb, or px value in component code.** Always
   reference a CSS variable from `tokens.css` (e.g. `var(--brand-500)`,
   `var(--space-md)`). If a value you need doesn't exist as a token, add it
   to `tokens.json` and `tokens.css` first — don't invent an inline one-off.
2. **One accent color, used sparingly.** `--brand-500` is reserved for the
   single primary action on a screen (one primary button, one active nav
   item, one focused input ring). If a screen has three "primary" buttons,
   that's a bug — pick one, downgrade the rest to secondary/ghost.
3. **Never pair `--danger-500` with `--success-500` decoratively.** They are
   status colors only — use for error/success states and their icons, never
   for arbitrary emphasis or charts unless the chart literally shows
   good/bad outcomes.
4. **Text hierarchy is three steps, not five.** `--text-primary` for
   content that matters, `--text-secondary` for supporting copy,
   `--text-muted` for timestamps/metadata. Don't introduce a fourth gray.
5. **Radius signals size, not decoration.** `--radius-sm` for inputs/small
   controls, `--radius-md` for cards/buttons, `--radius-lg` for modals and
   large surfaces. Don't mix radii within the same component family.
6. **Monospace is functional, not stylistic.** Use `--font-mono` only for
   things that are literally data: IDs, code, numeric tables, API keys.
   Never use it for labels or headings just for a "technical" look.

## Component composition rules

- **Button**: three variants only — `primary` (brand fill), `secondary`
  (bordered, ink surface), `ghost` (text-only, for tertiary actions). Do not
  create a fourth variant without updating this guide.
- **Input**: always pairs with a visible label above it, never a
  placeholder-as-label. Error state uses `--danger-500` border + a message
  below in `--text-sm`, never a red glow or icon alone.
- **Card**: default surface is `--ink-900` on `--ink-950` background, border
  `--border-subtle`. Cards do not get drop shadows by default — shadow is
  reserved for elevated/floating elements (modals, dropdowns, popovers) so
  elevation stays meaningful instead of decorative.

## States every interactive component must define
`default → hover → active/pressed → focus-visible → disabled`. Focus state
always uses `--shadow-focus-ring`, never just a color change (keyboard users
need the ring). Disabled state is `--text-muted` + `--ink-800` background,
never just lowered opacity (opacity alone fails contrast checks).

## What "on brief" looks like vs. the generic default
- ❌ Generic: white cards, soft gray shadow, indigo/blue primary button,
  Inter everywhere, all-caps section labels.
- ✅ This system: ink surfaces, hairline borders instead of shadows for
  resting elements, brass accent used once per view, Plex Sans/Mono pairing,
  sentence-case labels.

## Extending this system
When asked to add a new component:
1. Check if an existing component (Button/Input/Card) can be composed
   instead of building new.
2. If genuinely new, reuse existing tokens first — only add new tokens if
   nothing in `tokens.json` fits.
3. Update this guide with the new component's variant rules in the same PR/
   change — an undocumented component is technical debt for the next AI
   session, not just this one.
