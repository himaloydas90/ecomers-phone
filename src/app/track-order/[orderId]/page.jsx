import Link from "next/link";
import { notFound } from "next/navigation";
import { getOrderById } from "@/lib/orders";
import Breadcrumb from "@/app/components/ui/Breadcrumb";
import OrderTimeline from "@/app/components/order/OrderTimeline";
import ActivityIcon from "@/app/components/order/ActivityIcon";

export async function generateMetadata({ params }) {
  const { orderId } = await params;
  return { title: `Order #${orderId} — Clicon` };
}

export default async function TrackOrderDetailsPage({ params }) {
  const { orderId } = await params;
  const order = await getOrderById(orderId);
  if (!order) notFound();

  const formattedTotal = order.total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Pages", href: "/" },
          { label: "Track Order", href: "/track-order" },
          { label: "Details" },
        ]}
      />

      <div className="mx-auto max-w-[1280px] px-6 py-10">
        <div className="mx-auto max-w-[720px] rounded-[var(--radius-lg)] border-2 border-dashed border-[var(--color-brand)] bg-[var(--color-surface)] p-6 sm:p-8">
          {/* Summary */}
          <div className="flex flex-col gap-4 rounded-[var(--radius-md)] bg-[var(--color-warning)]/40 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-primary)]">
                #{order.id}
              </p>
              <p className="mt-1 text-sm text-[var(--color-secondary)]">
                {order.productCount} Products &middot; Order placed on {order.placedAt}
              </p>
            </div>
            <p className="text-xl font-semibold text-[var(--color-brand)] sm:text-2xl">
              {formattedTotal}
            </p>
          </div>

          <p className="mt-5 text-sm text-[var(--color-secondary)]">
            Order expected arrival: <span className="font-semibold text-[var(--color-primary)]">{order.expectedArrival}</span>
          </p>

          <div className="mt-4">
            <OrderTimeline currentStepIndex={order.currentStepIndex} />
          </div>

          {/* Activity */}
          <div className="mt-10">
            <h2 className="text-base font-semibold text-[var(--color-primary)]">Order Activity</h2>
            <ul className="mt-4 space-y-5">
              {order.activity.map((event) => (
                <li key={event.id} className="flex items-start gap-3">
                  <ActivityIcon icon={event.icon} tone={event.tone} />
                  <div>
                    <p className="text-sm text-[var(--color-primary)]">{event.message}</p>
                    <p className="mt-0.5 text-xs text-[var(--color-muted)]">{event.timestamp}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-[var(--color-border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[var(--color-secondary)]">
              Something not right with this order?
            </p>
            <Link
              href="/customer-support"
              className="inline-flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-brand)] px-5 py-2.5 text-sm font-semibold text-[var(--color-brand)] transition hover:bg-[var(--color-brand-tint)]"
            >
              Contact Customer Support
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}