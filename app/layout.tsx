import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jawad Tracking | Conversion Tracking Specialist",
  description:
    "Server-side tracking, Meta CAPI, GA4, Google Ads conversion tracking, and offline conversion tracking services.",

  openGraph: {
    title: "Jawad Tracking | Conversion Tracking Specialist",
    description:
      "Fix unreliable ad tracking across Meta CAPI, GA4, Google Ads, server-side tracking, and offline conversions.",
    url: "https://www.jawadtracking.com",
    siteName: "Jawad Tracking",
    images: [
      {
        url: "https://www.jawadtracking.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jawad Tracking - Conversion Tracking Specialist",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jawad Tracking | Conversion Tracking Specialist",
    description:
      "Fix unreliable ad tracking across Meta CAPI, GA4, Google Ads, server-side tracking, and offline conversions.",
    images: ["https://www.jawadtracking.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}