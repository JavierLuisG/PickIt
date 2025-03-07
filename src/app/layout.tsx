import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ContextGlobalProvider } from "../context/globalContext";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PickIt",
  description: "Sistema de prueba para PickIt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ContextGlobalProvider>
          <Navbar />
          {children}
          <Footer />
        </ContextGlobalProvider>
      </body>
    </html>
  );
}
