import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "./components/BottomNavbar.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BeSustainable",
  description: "BeReal but for food",
};

export default function RootLayout({ children }) {
  return (
    <>
      <BottomNav />

      <main>{children}</main>
    </>
  );
}
