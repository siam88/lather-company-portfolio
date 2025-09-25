import type { Metadata } from "next";
import { DM_Serif_Text, Rubik } from "next/font/google";
import "./globals.css";
import Footer from "@/components/sections/footer";

// DM Serif Text for headings
const dmSerif = DM_Serif_Text({
  weight: "400", // only weight available
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

// Rubik for lighter text / body
const rubik = Rubik({
  weight: ["300", "400", "500", "700"], // include lighter weights
  subsets: ["latin"],
  variable: "--font-rubik",
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
      <body className={`${dmSerif.variable} ${rubik.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
