import "./globals.css";

import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Inter } from "next/font/google";

import BottomNav from "./components/BottomNavbar.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BeSustainable",
  description: "BeReal but for food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <BottomNav />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
