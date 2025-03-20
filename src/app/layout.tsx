import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ContextGlobalProvider } from "../context/globalContext";
import NavbarPage from "../components/navbar/page";
import Footer from "../components/footer/Footer";

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
      <body className="font-sans">
        <ContextGlobalProvider>
          <Providers>
            <NavbarPage />
            {children}
            <Footer />
          </Providers>
        </ContextGlobalProvider>
      </body>
    </html>
  );
}
