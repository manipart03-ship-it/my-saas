import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** "default" sits flush on the page (border only). "elevated" is for
   * floating surfaces like dropdowns/popovers — uses shadow, not border. */
  elevation?: "default" | "elevated";
}

/**
 * Card — resting surfaces use a hairline border, not a shadow.
 * Shadow is reserved for elevation === "elevated" (floating elements only).
 */
export function Card({ elevation = "default", style, children, ...rest }: CardProps) {
  const elevationStyle: React.CSSProperties =
    elevation === "elevated"
      ? { boxShadow: "var(--shadow-md)", border: "1px solid var(--border-subtle)" }
      : { border: "1px solid var(--border-subtle)" };

  return (
    <div
      style={{
        background: "var(--ink-900)",
        borderRadius: "var(--radius-md)",
        padding: "var(--space-lg)",
        color: "var(--text-primary)",
        ...elevationStyle,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
