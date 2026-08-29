import {
  Laptop,
  Cable,
  Smartphone,
  Headphones,
  MousePointerClick,
  Gamepad2,
  Camera,
  Tv,
  Watch,
  Navigation,
  Radar,
  Gamepad,
} from "lucide-react";

export const categories = [
  { name: "Computer & Laptop", icon: Laptop, hasFlyout: false },
  { name: "Computer Accessories", icon: Cable, hasFlyout: false },
  { name: "SmartPhone", icon: Smartphone, hasFlyout: true },
  { name: "Headphone", icon: Headphones, hasFlyout: false },
  { name: "Mobile Accessories", icon: MousePointerClick, hasFlyout: false },
  { name: "Gaming Console", icon: Gamepad2, hasFlyout: false },
  { name: "Camera & Photo", icon: Camera, hasFlyout: false },
  { name: "TV & Homes Appliances", icon: Tv, hasFlyout: false },
  { name: "Watchs & Accessories", icon: Watch, hasFlyout: false },
  { name: "GPS & Navigation", icon: Navigation, hasFlyout: false },
  { name: "Warable Technology", icon: Radar, hasFlyout: false },
];

export const smartphoneBrands = [
  "All",
  "iPhone",
  "Samsung",
  "Realme",
  "Xiaomi",
  "Oppo",
  "Vivo",
  "OnePlus",
  "Huawei",
  "Infinix",
  "Tecno",
];

export const featuredPhones = [
  {
    id: "p1",
    name: "Samsung Electronics Samsung Galaxy S21 5G",
    price: "$160",
    icon: Gamepad,
  },
  {
    id: "p2",
    name: "Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone",
    price: "$1,500",
    icon: Smartphone,
  },
  {
    id: "p3",
    name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
    price: "$3,200",
    salePrice: "$2,688",
    icon: Camera,
  },
];

export const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "zh", label: "Mandarin", flag: "🇨🇳" },
  { code: "ru", label: "Russian", flag: "🇷🇺" },
];

export const currencies = [
  { code: "USD", label: "Dollar (USD)" },
  { code: "EUR", label: "Euro (EUR)" },
];
