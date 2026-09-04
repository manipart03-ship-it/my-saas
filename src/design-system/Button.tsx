import React from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const base: React.CSSProperties = {
  fontFamily: "var(--font-ui)",
  fontWeight: "var(--weight-medium)" as unknown as number,
  borderRadius: "var(--radius-md)",
  border: "1px solid transparent",
  cursor: "pointer",
  transition: "background var(--duration-base) var(--easing-standard), border-color var(--duration-base) var(--easing-standard)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--space-xs)",
};

const sizes: Record<Size, React.CSSProperties> = {
  sm: { padding: "6px 12px", fontSize: "var(--text-sm)" },
  md: { padding: "10px 16px", fontSize: "var(--text-base)" },
};

const variants: Record<Variant, React.CSSProperties> = {
  primary: {
    background: "var(--brand-500)",
    color: "var(--text-on-brand)",
    borderColor: "var(--brand-500)",
  },
  secondary: {
    background: "var(--ink-900)",
    color: "var(--text-primary)",
    borderColor: "var(--border-default)",
  },
  ghost: {
    background: "transparent",
    color: "var(--text-secondary)",
    borderColor: "transparent",
  },
};

/**
 * Button — three variants only (primary / secondary / ghost).
 * One primary button per view. See guide.md before adding a fourth variant.
 */
export function Button({
  variant = "primary",
  size = "md",
  disabled,
  style,
  className,
  children,
  ...rest
}: ButtonProps) {
  const disabledStyle: React.CSSProperties = disabled
    ? { background: "var(--ink-800)", color: "var(--text-muted)", borderColor: "var(--border-subtle)", cursor: "not-allowed" }
    : {};

  return (
    <button
      className={`ds-button ds-button--${variant} ${className ?? ""}`}
      disabled={disabled}
      style={{ ...base, ...sizes[size], ...variants[variant], ...disabledStyle, ...style }}
      {...rest}
    >
      {children}
    </button>
  );
}

/*
  Companion CSS (place in a global stylesheet) handles states that inline
  styles can't express — hover/active/focus-visible:

  .ds-button--primary:hover:not(:disabled)   { background: var(--brand-600); }
  .ds-button--primary:active:not(:disabled)  { background: var(--brand-700); }
  .ds-button--secondary:hover:not(:disabled) { border-color: var(--brand-500); }
  .ds-button--ghost:hover:not(:disabled)     { color: var(--text-primary); }
  .ds-button:focus-visible                   { outline: none; box-shadow: var(--shadow-focus-ring); }
*/
