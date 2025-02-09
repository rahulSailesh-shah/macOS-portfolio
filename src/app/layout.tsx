import type { Metadata } from "next";
import { Lato, Vujahday_Script } from "next/font/google"; // Import Vujahday Script
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

const vujahday = Vujahday_Script({
  subsets: ["latin"],
  weight: ["400"], // Only one weight available for Vujahday Script
  variable: "--font-vujahday",
});

export const metadata: Metadata = {
  title: "Your Portfolio",
  description: "Professional portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable}  ${vujahday.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
