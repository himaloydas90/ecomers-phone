"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, ChevronDown, MessageCircleQuestion } from "lucide-react";
import Link from "next/link";
import { helpTopics, faqs } from "@/lib/helpData";

export default function HelpCenter({ initialQuery = "" }) {
  const [query, setQuery] = useState(initialQuery);
  const [activeTopic, setActiveTopic] = useState(null);
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null);

  useEffect(() => {
    if (initialQuery) setQuery(initialQuery);
  }, [initialQuery]);

  const filteredFaqs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((faq) => {
      const matchesTopic = !activeTopic || faq.topic === activeTopic;
      const matchesQuery =
        !q || faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
      return matchesTopic && matchesQuery;
    });
  }, [query, activeTopic]);

  return (
    <>
      {/* Hero + search */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface-muted)]">
        <div className="mx-auto max-w-[1280px] px-6 py-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-success)]">
            Need Help
          </p>
          <h1 className="mx-auto mt-3 max-w-2xl font-[family-name:var(--font-heading)] text-3xl font-semibold text-[var(--color-primary)] sm:text-4xl">
            How can we help you?
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--color-secondary)] sm:text-base">
            Search our help center or browse a topic below. Can&rsquo;t find your answer?
            Our support team is one message away.
          </p>

          <div className="mx-auto mt-6 flex max-w-lg items-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm">
            <Search size={18} className="ml-4 shrink-0 text-[var(--color-muted)]" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for answers, e.g. “return policy”"
              aria-label="Search help articles"
              className="w-full bg-transparent px-3 py-3 text-sm text-[var(--color-primary)] outline-none placeholder:text-[var(--color-muted)]"
            />
          </div>
        </div>
      </section>

      {/* Topic grid */}
      <section className="mx-auto max-w-[1280px] px-6 py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {helpTopics.map(({ id, icon: Icon, title, description }) => {
            const isActive = activeTopic === id;
            return (
              <button
                key={id}
                type="button"
                id={id}
                onClick={() => setActiveTopic(isActive ? null : id)}
                className={`flex items-start gap-4 rounded-[var(--radius-lg)] border p-6 text-left transition ${
                  isActive
                    ? "border-[var(--color-success)] bg-[var(--color-accent-tint)]"
                    : "border-[var(--color-border)] bg-[var(--color-surface)] hover:shadow-md"
                }`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-brand-tint)]">
                  <Icon size={20} color="var(--color-brand)" />
                </span>
                <span>
                  <span className="block text-base font-semibold text-[var(--color-primary)]">
                    {title}
                  </span>
                  <span className="mt-1 block text-sm text-[var(--color-secondary)]">
                    {description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface-muted)]">
        <div className="mx-auto max-w-[840px] px-6 py-14">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-[var(--color-primary)]">
              {activeTopic
                ? helpTopics.find((t) => t.id === activeTopic)?.title
                : "Frequently asked questions"}
            </h2>
            {activeTopic && (
              <button
                type="button"
                onClick={() => setActiveTopic(null)}
                className="text-sm font-medium text-[var(--color-brand)] hover:underline"
              >
                Show all topics
              </button>
            )}
          </div>

          {filteredFaqs.length === 0 ? (
            <div className="rounded-[var(--radius-lg)] border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-10 text-center">
              <MessageCircleQuestion size={28} className="mx-auto text-[var(--color-muted)]" />
              <p className="mt-3 text-sm text-[var(--color-secondary)]">
                No answers matched &ldquo;{query}&rdquo;. Try a different search or contact
                support directly.
              </p>
              <Link
                href="/customer-support"
                className="mt-4 inline-block text-sm font-semibold text-[var(--color-brand)] hover:underline"
              >
                Contact Customer Support
              </Link>
            </div>
          ) : (
            <ul className="space-y-3">
              {filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <li
                    key={faq.id}
                    className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-sm font-medium text-[var(--color-primary)] sm:text-base">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-[var(--color-muted)] transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <p className="border-t border-[var(--color-border)] px-5 py-4 text-sm leading-relaxed text-[var(--color-secondary)]">
                        {faq.answer}
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          )}

          <div className="mt-10 flex flex-col items-center gap-3 rounded-[var(--radius-lg)] bg-[var(--color-primary)] p-8 text-center text-[var(--color-text-light)] sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h3 className="text-lg font-semibold">Still need a hand?</h3>
              <p className="mt-1 text-sm text-white/70">
                Our support team can take it from here — chat, call, or email.
              </p>
            </div>
            <Link
              href="/customer-support"
              className="inline-flex shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-success)] px-6 py-3 text-sm font-semibold text-[var(--color-text-light)] transition hover:opacity-90"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
