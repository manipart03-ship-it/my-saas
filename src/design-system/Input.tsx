import React, { useId } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

/**
 * Input — always paired with a visible label above (never placeholder-as-label).
 * Error state: red border + message below, per guide.md.
 */
export function Input({ label, error, hint, id, style, ...rest }: InputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
      <label
        htmlFor={inputId}
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "var(--text-sm)",
          fontWeight: "var(--weight-medium)" as unknown as number,
          color: "var(--text-secondary)",
        }}
      >
        {label}
      </label>

      <input
        id={inputId}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        className="ds-input"
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "var(--text-base)",
          color: "var(--text-primary)",
          background: "var(--ink-900)",
          border: `1px solid ${error ? "var(--danger-500)" : "var(--border-default)"}`,
          borderRadius: "var(--radius-sm)",
          padding: "8px 12px",
          outline: "none",
          transition: "border-color var(--duration-base) var(--easing-standard), box-shadow var(--duration-base) var(--easing-standard)",
          ...style,
        }}
        {...rest}
      />

      {error ? (
        <span id={`${inputId}-error`} style={{ fontSize: "var(--text-sm)", color: "var(--danger-500)" }}>
          {error}
        </span>
      ) : hint ? (
        <span id={`${inputId}-hint`} style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
          {hint}
        </span>
      ) : null}
    </div>
  );
}

/*
  Companion CSS for focus state (can't be expressed inline):

  .ds-input:focus-visible { box-shadow: var(--shadow-focus-ring); border-color: var(--border-focus); }
  .ds-input:disabled      { background: var(--ink-800); color: var(--text-muted); cursor: not-allowed; }
*/
