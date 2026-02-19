import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ subsets: ["arabic", "latin"] }); // Configure Cairo

export const metadata: Metadata = {
  title: "رفيق رمضان",
  description: "رفيقك الرمضاني للعبادة والذكر",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
