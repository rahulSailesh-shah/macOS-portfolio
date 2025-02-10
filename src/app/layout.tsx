import type { Metadata } from "next";
import { Jost, Vujahday_Script, DM_Serif_Display } from "next/font/google"; // Import Vujahday Script
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jost",
});

const vujahday = Vujahday_Script({
  subsets: ["latin"],
  weight: ["400"], // Only one weight available for Vujahday Script
  variable: "--font-vujahday",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"], // Only one weight available for Vujahday Script
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "Rahul Shah | Software Engineer",
  description: "Professional portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} ${dmSerif.variable} ${vujahday.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
