"use client";

import { useState } from "react";
import { Input } from "@/src/design-system/Input";
import { Button } from "@/src/design-system/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);

  function validate() {
    const next: typeof errors = {};
    if (!email) next.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) next.email = "Enter a valid email address";
    if (!password) next.password = "Password is required";
    else if (password.length < 8) next.password = "Password must be at least 8 characters";
    return next;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    alert("Login submitted — wire up your auth endpoint here.");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--ink-950)",
        padding: "var(--space-lg)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "var(--ink-900)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-lg)",
          padding: "var(--space-2xl)",
          boxShadow: "var(--shadow-md)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-xl)",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
          <h1
            style={{
              margin: 0,
              fontSize: "var(--text-xl)",
              fontWeight: "var(--weight-semibold)",
              color: "var(--text-primary)",
              fontFamily: "var(--font-ui)",
            }}
          >
            Sign in
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "var(--text-sm)",
              color: "var(--text-muted)",
              fontFamily: "var(--font-ui)",
            }}
          >
            Welcome back. Enter your credentials to continue.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}
        >
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <a
              href="#"
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--brand-500)",
                textDecoration: "none",
                fontFamily: "var(--font-ui)",
              }}
            >
              Forgot password?
            </a>
          </div>

          <Button
            type="submit"
            variant="primary"
            disabled={loading}
            style={{ width: "100%", marginTop: "var(--space-xs)" }}
          >
            {loading ? "Signing in…" : "Sign in"}
          </Button>
        </form>

        {/* Footer */}
        <p
          style={{
            margin: 0,
            textAlign: "center",
            fontSize: "var(--text-sm)",
            color: "var(--text-muted)",
            fontFamily: "var(--font-ui)",
          }}
        >
          Don&apos;t have an account?{" "}
          <a
            href="/signup"
            style={{ color: "var(--brand-500)", textDecoration: "none" }}
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
