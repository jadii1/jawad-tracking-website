import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T4GBX98J');
          `}
        </Script>
      </head>

      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T4GBX98J"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}