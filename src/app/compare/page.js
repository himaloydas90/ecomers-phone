import Breadcrumb from "../components/ui/Breadcrumb";


export const metadata = { title: "Compare — Clicon" };

export default function ComparePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Pages", href: "/" }, { label: "Compare" }]} />
      <div className="mx-auto max-w-[1280px] px-6 py-16 text-center">
        <h1 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[var(--color-primary)]">
          You haven&rsquo;t added anything to compare yet
        </h1>
        <p className="mx-auto mt-2 max-w-md text-sm text-[var(--color-secondary)]">
          Add products from the catalog to compare specs and prices side by side.
        </p>
      </div>
    </>
  );
}
