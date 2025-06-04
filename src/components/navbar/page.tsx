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
  Badge,
} from "@heroui/react";
import { usePathname } from "next/navigation";
import styles from "../navbar/page.module.css";
import Profile from "../../assets/icons/profile.svg";
import Cart from "../../assets/icons/cart.svg";
import { useCart } from "../../context/cartContext";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const { countCart } = useCart();

  const countProductsCart = countCart();

  const menuItems = [
    { name: "Tienda", path: "/products" },
    { name: "Favoritos", path: "/favorites" },
    { name: "Sobre nosotros", path: "/aboutUs" },
    { name: "Términos y condiciones", path: "/tyc"},
    { name: "Contáctanos", path: "/contact" },
  ];

  const buttonText = pathname === "/login" ? "Registrate" : "Iniciar sesión";
  const buttonHref = pathname === "/login" ? "/register" : "/login";

  return (
    <Navbar className={styles.navbar_container} maxWidth="full" onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent>
        <NavbarBrand className={styles.container_logo}>
          <Link className={styles.link_logo} href="/">
            <img
              className={styles.logo_navbar}
              src="/images/pickit-logo-color.png"
              alt="logo"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className={`hidden md:flex ${styles.navbar_content}`} justify="center">
        <NavbarItem className={styles.container_text}>
          <Link className={styles.text} color="foreground" href="/products">
            Tienda
          </Link>
        </NavbarItem>
        <NavbarItem className={styles.container_text}>
          <Link className={styles.text} color="foreground" href="/aboutUs">
            Acerca de
          </Link>
        </NavbarItem>
        <NavbarItem className={styles.container_text}>
          <Link className={styles.text} color="foreground" href="/contact">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className={`hidden md:flex ${styles.navbar_content}`} justify="end">
        <NavbarItem className={styles.container_btn_navbar}>
          <Profile className={styles.icon_profile} />
          <Link
            className={styles.btn_navbar}
            href={buttonHref}
            color="secondary"
          >
            {buttonText}
          </Link>
          <Badge
            content={countProductsCart.toString()}
            shape="circle"
            className={styles.badge_cart}
          >
            <Link href="/cart">
              <Cart className={styles.icon_cart} />
            </Link>
          </Badge>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className={`flex md:hidden ${styles.navbar_content}`} justify="end">
        <NavbarItem className={styles.container_btn_navbar}>
          <Badge
            content={countProductsCart.toString()}
            shape="circle"
            className={styles.badge_cart}
          >
            <Link href="/cart">
              <Cart className={styles.icon_cart} />
            </Link>
          </Badge>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className={`md:hidden`}
      />
      <NavbarMenu className={styles.menu_container}>
        <div className={styles.profile_menu}>
          <Profile className={styles.icon_profile_menu} />
          <Link
            className={styles.btn_navbar_menu}
            href={buttonHref}
            color="secondary"
          >
            {buttonText}
          </Link>
        </div>
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
};

export default NavbarComponent;