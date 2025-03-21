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
    "Inicio",
    "Ingresar",
    "Registrate",
    "Favoritos",
    "Sobre nosotros",
    "Contáctanos",
    "Salir",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent>
        <NavbarBrand>
          <PickitLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        <NavbarItem>
          <Link className="text-bold" color="foreground" href="#">
            Contacto
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Productos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
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
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarPage;