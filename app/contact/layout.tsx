import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | TT Global Saudi Arabia',
  description:
    'Get in touch with TT Global for truck rental, logistics, and transportation inquiries. Available 24/7 across Saudi Arabia.',
  openGraph: {
    title: 'Contact TT Global | Truck Rental & Logistics Saudi Arabia',
    description:
      'Reach out to TT Global for quotes, bookings, and emergency transport support. We are available 24/7 across Saudi Arabia.',
    url: 'https://ttt-bay-kappa.vercel.app/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact TT Global | Truck Rental & Logistics Saudi Arabia',
    description:
      'Reach out to TT Global for quotes, bookings, and emergency transport support. Available 24/7.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
