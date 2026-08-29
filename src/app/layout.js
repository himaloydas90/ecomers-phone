import { Playfair_Display, Public_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import CategoryNavBar from "./components/layout/CategoryNavBar";
import BottomNav from "./components/layout/BottomNav";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-primary",
});

export const metadata = {
  title: "MyShop",
  description: "Your trusted online shop",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${publicSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        <CategoryNavBar/>
        {children}
        <Footer/>
        <BottomNav/>
        </body>
    </html>
  );
}