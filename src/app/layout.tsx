import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/app/components/Header";
import Footer from "./components/Footer";
import SmoothScroller from "./components/Lenis";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Entrepreneurs",
  description: "Entrepreneurs.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroller />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
