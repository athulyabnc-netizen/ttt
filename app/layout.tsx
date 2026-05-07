import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechTruck Transport - Truck Rental & Logistics Services in Saudi Arabia",
  description: "Professional truck rental and logistics services across Saudi Arabia. Modern fleet, 24/7 service, and experienced drivers for all your transportation needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
