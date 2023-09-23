import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/components/layouts/Header";

export const metadata: Metadata = {
  title: "Todo App",
  description: "A basic Todo App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto bg-slate-800 text-slate-100 px-10 py-5">
        <Header />

        {children}
      </body>
    </html>
  );
}
