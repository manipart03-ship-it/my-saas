# my-saas

A Next.js 16 SaaS starter with authentication pages and a custom design system.

## Features

- **Login page** — `/login` with email/password validation
- **Signup page** — `/signup` with name, email, password, and confirmation fields
- **Design system** — dark-themed token-based system with `Input`, `Button`, and `Card` components (`src/design-system/`)
- **IBM Plex Sans / Mono** fonts via `next/font`
- **Tailwind CSS v4**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/login` | Sign in |
| `/signup` | Create account |

## Project Structure

```
app/
  layout.tsx        # Root layout with fonts and design system tokens
  login/page.tsx    # Login page
  signup/page.tsx   # Signup page
src/
  design-system/
    tokens.css      # CSS custom properties (colors, spacing, typography)
    tokens.json     # Token source of truth
    Button.tsx      # Primary / secondary / ghost button
    Input.tsx       # Labeled input with error and hint states
    Card.tsx        # Surface card component
```

## Tech Stack

- [Next.js 16](https://nextjs.org)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
