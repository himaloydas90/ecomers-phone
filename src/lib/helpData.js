import { Truck, RotateCcw, ShieldCheck, CreditCard, UserCog, Smartphone } from "lucide-react";

export const helpTopics = [
  {
    id: "shipping",
    icon: Truck,
    title: "Orders & Shipping",
    description: "Order status, delivery times, and shipping costs.",
  },
  {
    id: "returns",
    icon: RotateCcw,
    title: "Returns & Refunds",
    description: "Start a return, exchange an item, or check refund status.",
  },
  {
    id: "warranty",
    icon: ShieldCheck,
    title: "Warranty & Repairs",
    description: "Coverage details and how to request a repair.",
  },
  {
    id: "payments",
    icon: CreditCard,
    title: "Payments & Billing",
    description: "Payment methods, invoices, and billing issues.",
  },
  {
    id: "account",
    icon: UserCog,
    title: "Account & Login",
    description: "Manage your profile, password, and saved addresses.",
  },
  {
    id: "products",
    icon: Smartphone,
    title: "Product Questions",
    description: "Specs, compatibility, and setup guidance.",
  },
];

export const faqs = [
  {
    id: "faq-1",
    topic: "shipping",
    question: "How can I track my order?",
    answer:
      "Go to Track Order in the main menu and enter your Order ID along with the billing email you used at checkout. You'll see live status, expected arrival date, and a full activity timeline.",
  },
  {
    id: "faq-2",
    topic: "shipping",
    question: "How long does shipping take?",
    answer:
      "Standard delivery takes 3–6 business days. Express shipping (2 business days) is available at checkout for most items and locations.",
  },
  {
    id: "faq-3",
    topic: "returns",
    question: "What is Clicon's return policy?",
    answer:
      "Most items can be returned within 30 days of delivery in their original condition and packaging. Opened software, gift cards, and final-sale items aren't eligible for return.",
  },
  {
    id: "faq-4",
    topic: "returns",
    question: "When will I get my refund?",
    answer:
      "Refunds are issued to your original payment method within 5–7 business days after we receive and inspect the returned item.",
  },
  {
    id: "faq-5",
    topic: "warranty",
    question: "What does the manufacturer warranty cover?",
    answer:
      "Coverage varies by brand and product, but typically includes defects in materials and workmanship for 12 months from the purchase date. Accidental damage isn't covered unless you purchased Clicon Care.",
  },
  {
    id: "faq-6",
    topic: "payments",
    question: "Which payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, PayPal, and Clicon gift cards. Some regions also support installment plans at checkout.",
  },
  {
    id: "faq-7",
    topic: "account",
    question: "How do I reset my password?",
    answer:
      "Select 'Forgot password' on the sign-in page and we'll email you a secure reset link. If you don't see it within a few minutes, check your spam folder.",
  },
  {
    id: "faq-8",
    topic: "products",
    question: "How do I know if an accessory is compatible with my device?",
    answer:
      "Each product page lists compatible models under 'Compatibility.' If you're still unsure, send us the exact model number through Customer Support and we'll confirm before you order.",
  },
];
