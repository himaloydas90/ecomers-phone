import Link from "next/link";
import { supportCategories, popularTopics, contactOptions } from "@/lib/supportHomeData";
import ContactOptionCard from "../components/support/ContactOptionCard";
import SupportHeroArt from "../components/support/SupportHeroArt";
import SupportSearchBar from "../components/support/SupportSearchBar";
import Breadcrumb from "../components/ui/Breadcrumb";

export const metadata = {
  title: "Customer Support — Clicon",
  description:
    "Get help from Clicon's support team: browse help topics, popular questions, or contact us by phone or chat.",
};

export default function CustomerSupportPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Customer Support" }]} />

      {/* Hero: search + illustration */}
      <section className="mx-auto max-w-[1280px] px-6 pb-10 pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="inline-block rounded-[var(--radius-sm)] bg-[var(--color-warning)] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
              Help Center
            </span>
            <h1 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-semibold text-[var(--color-primary)] sm:text-4xl">
              How we can help you!
            </h1>
            <div className="mt-6">
              <SupportSearchBar />
            </div>
          </div>

          <SupportHeroArt />
        </div>
      </section>

      <div className="border-t border-[var(--color-border)]" />

      {/* Quick category grid */}
      <section className="mx-auto max-w-[1280px] px-6 py-12">
        <h2 className="text-center text-xl font-semibold text-[var(--color-primary)]">
          What can we assist you with today?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {supportCategories.map(({ id, label, icon: Icon, href }, i) => {
            const isFeatured = i === 0;
            return (
              <Link
                key={id}
                href={href}
                className={`flex items-center gap-3 rounded-[var(--radius-md)] border bg-[var(--color-surface)] px-5 py-4 text-sm font-medium text-[var(--color-primary)] transition hover:shadow-md ${
                  isFeatured
                    ? "border-[var(--color-success)]"
                    : "border-[var(--color-border)] hover:border-[var(--color-success)]"
                }`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent-tint)]">
                  <Icon size={18} color="var(--color-success)" />
                </span>
                {label}
              </Link>
            );
          })}
        </div>
      </section>

      <div className="h-[3px] w-full bg-[var(--color-brand)]" />

      {/* Popular topics */}
      <section className="mx-auto max-w-[1280px] px-6 py-12">
        <div className="rounded-[var(--radius-lg)] border-2 border-dashed border-[var(--color-brand)] p-6 sm:p-8">
          <h2 className="text-center text-lg font-semibold text-[var(--color-primary)]">
            Popular Topics
          </h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-3">
            {popularTopics.map((column) => (
              <ul key={column.heading} className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`text-sm leading-relaxed transition-colors hover:underline ${
                        link.featured
                          ? "font-medium text-[var(--color-success)]"
                          : "text-[var(--color-secondary)] hover:text-[var(--color-primary)]"
                      }`}
                    >
                      &middot; {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      <div className="h-[3px] w-full bg-[var(--color-brand)]" />

      {/* Contact us */}
      <section className="bg-[var(--color-surface-muted)]">
        <div className="mx-auto max-w-[1280px] px-6 py-14 text-center">
          <span className="inline-block rounded-[var(--radius-sm)] bg-[var(--color-brand)] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[var(--color-text-light)]">
            Contact Us
          </span>
          <h2 className="mx-auto mt-4 max-w-md font-[family-name:var(--font-heading)] text-2xl font-semibold text-[var(--color-primary)] sm:text-3xl">
            Don&rsquo;t find your answer. Contact with us
          </h2>

          <div className="mx-auto mt-8 grid max-w-2xl gap-5 sm:grid-cols-2">
            {contactOptions.map((option) => (
              <ContactOptionCard key={option.id} {...option} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
