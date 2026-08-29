"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Info } from "lucide-react";
import Breadcrumb from "../components/ui/Breadcrumb";


export default function TrackOrderPage() {
  const router = useRouter();
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = {};
    if (!orderId.trim()) nextErrors.orderId = "Enter the order ID from your receipt.";
    if (!email.trim()) {
      nextErrors.email = "Enter the email you used at checkout.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      router.push(`/track-order/${encodeURIComponent(orderId.trim())}`);
    }
  }

  return (
    <>
      <Breadcrumb items={[{ label: "Pages", href: "/" }, { label: "Track Order" }]} />

      <div className="mx-auto max-w-[1280px] px-6 py-10">
        <div className="mx-auto max-w-[640px] rounded-[var(--radius-lg)] border-2 border-dashed border-[var(--color-brand)] bg-[var(--color-surface)] p-8 sm:p-10">
          <h1 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[var(--color-primary)]">
            Track Order
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-secondary)]">
            To track your order please enter your Order ID in the input field below and press
            the &ldquo;Track Order&rdquo; button. This was given to you on your receipt and in
            the confirmation email you should have received.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="orderId" className="mb-1.5 block text-sm font-medium text-[var(--color-primary)]">
                  Order ID
                </label>
                <input
                  id="orderId"
                  name="orderId"
                  type="text"
                  placeholder="ID..."
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  aria-invalid={Boolean(errors.orderId)}
                  aria-describedby={errors.orderId ? "orderId-error" : undefined}
                  className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] px-4 py-2.5 text-sm text-[var(--color-primary)] outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-brand)]"
                />
                {errors.orderId && (
                  <p id="orderId-error" className="mt-1.5 text-xs text-[var(--color-negative)]">
                    {errors.orderId}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[var(--color-primary)]">
                  Billing Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] px-4 py-2.5 text-sm text-[var(--color-primary)] outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-brand)]"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-[var(--color-negative)]">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <p className="flex items-start gap-2 text-xs text-[var(--color-muted)]">
              <Info size={14} className="mt-0.5 shrink-0" />
              Order ID that we sent to your in your email address.
            </p>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-success)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-text-light)] transition hover:opacity-90"
            >
              Track Order
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
