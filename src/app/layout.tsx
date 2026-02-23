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
  title: "Chitti Vechhadanam | The Most Powerful Seat in the Universe",
  description:
    "One bed. Infinite luck. Zero science. Reserve your spot on Chitti's legendary lucky bed and change your destiny forever. (Results not guaranteed but also not not guaranteed.)",
  openGraph: {
    title: "Chitti Vechhadanam | The Most Powerful Seat in the Universe",
    description: "One bed. Infinite luck. Zero science. Reserve your luck today.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chitti Vechhadanam",
    description: "One bed. Infinite luck. Zero science.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
