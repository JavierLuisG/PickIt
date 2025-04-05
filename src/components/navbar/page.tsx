"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";
import { usePathname } from "next/navigation";
import styles from "../navbar/page.module.css";

export const PickitLogo = () => {
  return (
    <Link href="/">
      <img
        className={styles.logo_navbar}
        src="/images/pickit-logo-color.png"
        alt="logo"
      />
    </Link>
  );
};

const NavbarPage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Iniciar sesión", path: "/login" },
    { name: "Registrate", path: "/register" },
    { name: "Favoritos", path: "/favorites" },
    { name: "Sobre nosotros", path: "/aboutUs" },
    { name: "Contáctanos", path: "/contact" },
    { name: "Salir", path: "/" },
  ];

  const buttonText = pathname === "/login" ? "Registrate" : "Iniciar sesión";
  const buttonHref = pathname === "/login" ? "/register" : "/login";

  return (
    <Navbar className={styles.navbar_container} maxWidth="full" onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent>
        <NavbarBrand>
          <PickitLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className={`hidden md:flex ${styles.navbar_content}`} justify="center">
        <NavbarItem className={styles.container_text}>
          <Link className={styles.text} color="foreground" href="/contact">
            Contacto
          </Link>
        </NavbarItem>
        <NavbarItem className={styles.container_text}>
          <Link className={styles.text} color="foreground" href="/products">
            Productos
          </Link>
        </NavbarItem>
        <NavbarItem className={styles.container_text}>
          <Link className={styles.text} color="foreground" href="/favorites">
            Favoritos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className={`hidden md:flex ${styles.navbar_content}`} justify="end">
        <NavbarItem className={styles.container_btn_navbar}>
          <Button
            className={styles.btn_navbar}
            radius="full"
            as={Link}
            color="secondary"
            href={buttonHref}
          >
            {buttonText}
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className={`md:hidden ${styles.menu_toggle}`}
      />
      <NavbarMenu className={styles.menu_container}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem className={styles.container_menu_item} key={`${item.name}-${index}`}>
            <div>
              <Link
                className={styles.menu_item}
                href={item.path}
                size="lg"
              >
                {item.name}
              </Link>
            </div>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarPage;