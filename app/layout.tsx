import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const geistMono = localFont({
  src: [
    {
      path: "../public/fonts/Geist_Mono/GeistMono-VariableFont_wght.ttf",
      weight: "400",
      style: "normal",
    },

    {
      path: "../public/fonts/Geist_Mono/GeistMono-Italic-VariableFont_wght.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-geist-mono",
  display: "swap",
});

const bebasNeue = localFont({
  src: [
    {
      path: "../public/fonts/Bebas_Neue/BebasNeue-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bebas-neue",
  display: "swap",
});

const jersey10 = localFont({
  src: [
    {
      path: "../public/fonts/Jersey_10/Jersey10-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-jersey10",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bykiranpa.tel/"),
  title: {
    default: "Knicks 2026 Playoffs",
    template: "Knicks 2026 Playoffs | %s",
  },
  description: "Relive the New York Knicks historic 2026 playoffs journey",
  applicationName: "Knicks 2026 Playoffs",
  keywords: [
    "NYK",
    "Knicks",
    "NBA",
    "New York",
    "playoffs",
    "finals",
    "2026",
    "Championship",
  ],
  authors: [{ name: "Kiran Patel" }],
  creator: "Kiran Patel",
  publisher: "Kiran Patel",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Knicks 2026 Playoffs",
    title: "Knicks 2026 Playoffs",
    description: "Relive the New York Knicks historic 2026 playoffs journey",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Knicks 2026 Playoffs site preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knicks 2026 Playoffs",
    description: "Relive the New York Knicks historic 2026 playoffs journey",
    images: ["/og-image.png"],
    creator: "@pate1kiran",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${jersey10.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
