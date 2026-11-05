import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bways.daizlab.store"),
  title: {
    default: "B-Ways Hotel | Serene Hospitality in Ibadan",
    template: "%s | B-Ways Hotel"
  },
  description:
    "Discover relaxed, affordable hospitality at B-Ways Hotel in Ibadan. Room rates range from ₦8,000 to ₦15,000. Call directly to ask about rooms and bookings.",
  applicationName: "B-Ways Hotel",
  keywords: [
    "B-Ways Hotel",
    "hotel in Ibadan",
    "affordable hotel in Ibadan",
    "Ibadan hotel rooms",
    "hotel bar in Ibadan",
    "quiet place to relax in Ibadan"
  ],
  alternates: { canonical: "https://bways.daizlab.store" },
  openGraph: {
    type: "website",
    url: "https://bways.daizlab.store",
    title: "B-Ways Hotel | A calmer stay in Ibadan",
    description:
      "Comfortable, accessible hospitality in Ibadan, with room rates from ₦8,000 to ₦15,000.",
    siteName: "B-Ways Hotel",
    locale: "en_NG"
  },
  twitter: {
    card: "summary_large_image",
    title: "B-Ways Hotel | A calmer stay in Ibadan",
    description:
      "A welcoming place to stay, unwind and reset in Ibadan."
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f3eb"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NG">
      <body>{children}</body>
    </html>
  );
}
