import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Rye } from "next/font/google";
import RsvpPrompt from "./components/RsvpPrompt";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Lora({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const accentFont = Rye({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Double Joy | Joy & Ayoola",
  description:
    "The wedding celebration of Joy Oyiza Josiah & Ayoola Peter Olayinka — 12 December 2026.",
  icons: {
    icon: "/icon.jpeg",
    shortcut: "/icon.jpeg",
    apple: "/icon.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${accentFont.variable}`}>
      <body>
        {children}
        <RsvpPrompt />
      </body>
    </html>
  );
}
