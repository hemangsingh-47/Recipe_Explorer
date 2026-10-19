import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/components/ui";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: { default: "Savoria · Handcrafted Recipe Journal", template: "%s · Savoria" },
  description: "Browse curated recipes, regional cuisines, and mindful cooking guides."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="wrap">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

