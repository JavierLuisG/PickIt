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

  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Ingresar", path: "/login" },
    { name: "Registrate", path: "/register" },
    { name: "Favoritos", path: "/" },
    { name: "Sobre nosotros", path: "/" },
    { name: "Contáctanos", path: "/contact" },
    { name: "Salir", path: "/" },
  ];

  return (
    <Navbar className="w-full" onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent>
        <NavbarBrand>
          <PickitLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link className={styles.text} color="foreground" href="#">
            Contacto
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={styles.text} color="foreground" href="#">
            Productos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={styles.text} color="foreground" href="#">
            Favoritos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Button
            className={styles.btn_navbar}
            radius="full"
            as={Link}
            color="secondary"
            href="/login"
          >
            Ingresar
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className={`sm:hidden ${styles.menu_toggle}`}
      />
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <div className={styles.container_menu_item}>
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