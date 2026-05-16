import type { Metadata } from "next";
import "./globals.css";
import FontAwesomeConfig from "../components/FontAwesomeConfig";

export const metadata: Metadata = {
  title:
    "TechTruck Transport - Truck Rental & Logistics Services in Saudi Arabia",
  description:
    "Professional truck rental and logistics services across Saudi Arabia. Modern fleet, 24/7 service, and experienced drivers.",

     icons: {
  icon: "images/favicon.png",
  shortcut: "/favicon.png",
  // apple: "/apple-touch-icon.png", 
},

  openGraph: {
    title: "TechTruck Transport - Logistics Saudi Arabia",
    description:
      "Reliable heavy transport and logistics services across Saudi Arabia.",
    url: "https://ttt-bay-kappa.vercel.app/",
    siteName: "TechTruck Transport",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TechTruck Transport Saudi Arabia"
      }
    ],
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "TechTruck Transport",
    description:
      "Reliable heavy transport and logistics services across Saudi Arabia.",
    images: ["/og-image.jpg"]
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