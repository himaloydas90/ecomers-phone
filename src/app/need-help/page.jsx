import HelpCenter from "../components/support/HelpCenter";
import Breadcrumb from "../components/ui/Breadcrumb";


export const metadata = {
  title: "Need Help — Clicon",
  description: "Browse Clicon's help center for answers on orders, returns, warranty, and more.",
};

export default function NeedHelpPage({ searchParams }) {
  return (
    <>
      <Breadcrumb items={[{ label: "Need Help" }]} />
      <HelpCenter initialQuery={searchParams?.q ?? ""} />
    </>
  );
}
