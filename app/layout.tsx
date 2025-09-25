import type { Metadata } from "next";
import { DM_Serif_Text } from "next/font/google"; // Import DM Serif Text
import "./globals.css";
import Footer from "@/components/sections/footer";

// Configure DM Serif Text
const dmSerif = DM_Serif_Text({
  weight: "400", // DM Serif Text only has one weight
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "Excellent Leather Agency",
  description:
    "We supply all kinds of leather & leather goods from Bangladesh. 🇧🇩 Cow, Goat, Buffalo and sheep leather in all articles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSerif.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
