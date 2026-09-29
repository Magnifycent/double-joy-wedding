import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
