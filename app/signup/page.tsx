"use client";

import { useState } from "react";
import { Input } from "@/src/design-system/Input";
import { Button } from "@/src/design-system/Button";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirm?: string;
  }>({});
  const [loading, setLoading] = useState(false);

  function validate() {
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Name is required";
    if (!email) next.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) next.email = "Enter a valid email address";
    if (!password) next.password = "Password is required";
    else if (password.length < 8) next.password = "Password must be at least 8 characters";
    if (!confirm) next.confirm = "Please confirm your password";
    else if (confirm !== password) next.confirm = "Passwords do not match";
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
    alert("Account created — wire up your auth endpoint here.");
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
            Create an account
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "var(--text-sm)",
              color: "var(--text-muted)",
              fontFamily: "var(--font-ui)",
            }}
          >
            Get started for free. No credit card required.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}
        >
          <Input
            label="Full name"
            type="text"
            placeholder="Jane Smith"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
          />

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
            placeholder="Min. 8 characters"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />

          <Input
            label="Confirm password"
            type="password"
            placeholder="••••••••"
            autoComplete="new-password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            error={errors.confirm}
          />

          <Button
            type="submit"
            variant="primary"
            disabled={loading}
            style={{ width: "100%", marginTop: "var(--space-xs)" }}
          >
            {loading ? "Creating account…" : "Create account"}
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
          Already have an account?{" "}
          <a
            href="/login"
            style={{ color: "var(--brand-500)", textDecoration: "none" }}
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
