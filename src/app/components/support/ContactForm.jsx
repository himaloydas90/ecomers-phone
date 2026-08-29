"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const topics = [
  "Order status & shipping",
  "Returns & refunds",
  "Product warranty",
  "Payments & billing",
  "Something else",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const nextErrors = {};
    if (!data.get("name")?.trim()) nextErrors.name = "Tell us your name.";
    if (!/^\S+@\S+\.\S+$/.test(data.get("email") || "")) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!data.get("message")?.trim()) nextErrors.message = "Add a short message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      // Wire this up to your support inbox / ticketing API.
      setSubmitted(true);
      e.target.reset();
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-positive-tint)] p-10 text-center">
        <CheckCircle2 size={32} color="var(--color-positive)" />
        <h3 className="text-lg font-semibold text-[var(--color-primary)]">Message sent</h3>
        <p className="max-w-sm text-sm text-[var(--color-secondary)]">
          Thanks for reaching out — a support specialist will reply to your email within one
          business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-semibold text-[var(--color-brand)] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[var(--color-primary)]">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] px-4 py-2.5 text-sm outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-brand)]"
          />
          {errors.name && <p className="mt-1.5 text-xs text-[var(--color-negative)]">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[var(--color-primary)]">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] px-4 py-2.5 text-sm outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-brand)]"
          />
          {errors.email && <p className="mt-1.5 text-xs text-[var(--color-negative)]">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="orderId" className="mb-1.5 block text-sm font-medium text-[var(--color-primary)]">
            Order ID <span className="font-normal text-[var(--color-muted)]">(optional)</span>
          </label>
          <input
            id="orderId"
            name="orderId"
            type="text"
            placeholder="e.g. 96459761"
            className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] px-4 py-2.5 text-sm outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-brand)]"
          />
        </div>
        <div>
          <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-[var(--color-primary)]">
            Topic
          </label>
          <select
            id="topic"
            name="topic"
            defaultValue={topics[0]}
            className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] px-4 py-2.5 text-sm text-[var(--color-primary)] outline-none focus:border-[var(--color-brand)]"
          >
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[var(--color-primary)]">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Describe the issue, including any order or product details."
          className="w-full resize-none rounded-[var(--radius-md)] border border-[var(--color-border)] px-4 py-2.5 text-sm outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-brand)]"
        />
        {errors.message && <p className="mt-1.5 text-xs text-[var(--color-negative)]">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-success)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-text-light)] transition hover:opacity-90"
      >
        Send message
        <Send size={15} />
      </button>
    </form>
  );
}
