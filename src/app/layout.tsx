import type { Metadata } from "next";
import { Geist, Geist_Mono , Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";


const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lexboltt",
  description: "Lexboltt - AI-Powered Legal Document Automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${urbanist.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
