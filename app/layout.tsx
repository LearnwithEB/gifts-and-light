import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: "400",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  title: "Be the Bridge — ELVTE × Victory Christian Fellowship | New Castle, DE",
  description: "Find Your Gift. Your gift is not an accident. It's your mission field — right here, right now.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${dmSerifDisplay.variable} ${playfairDisplay.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
