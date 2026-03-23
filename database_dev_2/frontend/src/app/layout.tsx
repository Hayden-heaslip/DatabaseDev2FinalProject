/**
 * Page Purpose:
 * Root layout for the entire frontend app.
 *
 * What goes here:
 * - Global providers (AuthProvider, theme provider, query provider)
 * - Global CSS import
 * - App-wide metadata and base HTML structure
 *
 * What should NOT go here:
 * - Page-specific data fetching
 * - Feature-specific business logic
 */
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
  title: "Britannicus Reading Room",
  description: "Inventory, contacts, pricing, and sales management",
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
