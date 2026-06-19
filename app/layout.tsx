import type { Metadata } from "next";
import "./globals.css";
import FontAwesomeConfig from "../components/FontAwesomeConfig";

export const metadata: Metadata = {
  title: "TT Global | Truck Rental & Logistics Services in Saudi Arabia",
  description:
    "TT Global provides professional truck rental, crane rental, and logistics services across Saudi Arabia. Modern fleet, experienced drivers, and 24/7 availability.",

  icons: {
    icon: "images/ttg-favicon.png",
    shortcut: "images/ttg-favicon.png",
  },

  openGraph: {
    title: "TT Global | Truck Rental & Logistics Services in Saudi Arabia",
    description:
      "Professional truck rental, crane rental, and logistics services across Saudi Arabia. Modern fleet, experienced drivers, and 24/7 availability.",
    url: "https://ttt-bay-kappa.vercel.app/",
    siteName: "TT Global",
    images: [
      {
        url: "/images/ttglobal-og.jpg",
        width: 1200,
        height: 630,
        alt: "TT Global Saudi Arabia"
      }
    ],
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "TT Global | Truck Rental & Logistics Services in Saudi Arabia",
    description:
      "Professional truck rental, crane rental, and logistics services across Saudi Arabia.",
    images: ["/images/ttglobal-og.jpg"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <FontAwesomeConfig />
        {children}
      </body>
    </html>
  );
}