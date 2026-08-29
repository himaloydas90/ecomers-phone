import {
  Truck,
  KeyRound,
  CreditCard,
  User,
  Layers,
  FileText,
  Wallet,
  Store,
} from "lucide-react";

export const supportCategories = [
  { id: "track-order", label: "Track Order", icon: Truck, href: "/track-order" },
  { id: "reset-password", label: "Reset Password", icon: KeyRound, href: "/need-help#account" },
  { id: "payment-option", label: "Payment Option", icon: CreditCard, href: "/need-help#payments" },
  { id: "user-account", label: "User & Account", icon: User, href: "/need-help#account" },
  { id: "wishlist-compare", label: "Wishlist & Compare", icon: Layers, href: "/compare" },
  { id: "shipping-billing", label: "Shipping & Billing", icon: FileText, href: "/need-help#shipping" },
  { id: "cart-wallet", label: "Shopping Cart & Wallet", icon: Wallet, href: "/need-help#payments" },
  { id: "sell-on-clicon", label: "Sell on Clicon", icon: Store, href: "/need-help#products" },
];

export const popularTopics = [
  {
    heading: "Orders & Returns",
    links: [
      { label: "How do I return my item?", href: "/need-help#returns" },
      { label: "What is Clicon's Returns Policy?", href: "/need-help#returns", featured: true },
      { label: "How long is the refund process?", href: "/need-help#returns" },
    ],
  },
  {
    heading: "Shipping & Offers",
    links: [
      { label: "What are the delivery timelines?", href: "/need-help#shipping" },
      { label: "How do seasonal sale campaigns work?", href: "/need-help#shipping" },
      { label: "What's the voucher & gift offer this month?", href: "/need-help#payments" },
    ],
  },
  {
    heading: "Account & Selling",
    links: [
      { label: "How to cancel a Clicon order.", href: "/need-help#shipping" },
      { label: "Ask the Clicon device community.", href: "/need-help#products" },
      { label: "How to change my shop name?", href: "/need-help#account" },
    ],
  },
];

export const contactOptions = [
  {
    id: "call",
    icon: "phone",
    title: "Call us now",
    description: "We are available online from 9:00 AM to 5:00 PM (GMT+5:45). Talk with us now.",
    detail: "+1-202-555-0126",
    cta: "Call now",
    href: "tel:+12025550126",
    tone: "brand",
  },
  {
    id: "chat",
    icon: "chat",
    title: "Chat with us",
    description: "We are available online from 9:00 AM to 5:00 PM (GMT+5:45). Talk with us now.",
    detail: "support@clicon.com",
    cta: "Contact us",
    href: "mailto:support@clicon.com",
    tone: "positive",
  },
];
