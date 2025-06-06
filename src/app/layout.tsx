import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { ContextGlobalProvider } from "../context/globalContext";
import { CartProvider } from "../context/cartContext";
import NavbarComponent from "../components/navbar/page";
import FooterComponent from "../components/footer/page";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "PickIt",
  description: "Sistema de prueba para PickIt",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className="font-sans">
        <ContextGlobalProvider>
          <CartProvider>
            <Providers>
              <div className={styles.container_layout}>
                <NavbarComponent />
                {children}
                <FooterComponent />
              </div>
            </Providers>
          </CartProvider>
        </ContextGlobalProvider>
      </body>
    </html>
  );
};

export default RootLayout;
