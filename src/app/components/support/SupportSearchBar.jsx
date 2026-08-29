"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function SupportSearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/need-help?q=${encodeURIComponent(q)}` : "/need-help");
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className="flex max-w-md items-stretch overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)]"
    >
      <span className="flex items-center pl-4 text-[var(--color-muted)]">
        <Search size={16} />
      </span>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your question or keyword"
        aria-label="Enter your question or keyword"
        className="w-full bg-transparent px-3 py-3 text-sm text-[var(--color-primary)] outline-none placeholder:text-[var(--color-muted)]"
      />
      <button
        type="submit"
        className="shrink-0 bg-[var(--color-success)] px-6 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-light)] transition hover:opacity-90"
      >
        Search
      </button>
    </form>
  );
}
