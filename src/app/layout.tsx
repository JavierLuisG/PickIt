import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { ContextGlobalProvider } from "../context/globalContext";
import NavbarComponent from "../components/navbar/page";
import FooterComponent from "../components/footer/page";

export const metadata: Metadata = {
  title: "PickIt",
  description: "Sistema de prueba para PickIt",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className="font-sans">
        <ContextGlobalProvider>
          <Providers>
            <NavbarComponent />
            {children}
            <FooterComponent />
          </Providers>
        </ContextGlobalProvider>
      </body>
    </html>
  );
};

export default RootLayout;
