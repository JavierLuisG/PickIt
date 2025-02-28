"use client";

import styles from "../navbar/page.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar_container}>
        <h1>
          <Link href="/">
            Pick It
          </Link>
        </h1>
        <div className={styles.options_container}>
          <ul className={styles.options_navbar}>
            <li><Link href="/contact">Nosotros</Link>
            </li>
            <li><Link href="/contact">Contáctanos</Link>
            </li>
            <li><Link href="/contact">Productos</Link>
            </li>
          </ul>
          <div className={styles.icons_navbar}>
            <Link className={styles.link_icons} href="/login">
              <Image width={25} height={25} src="/profile.svg" alt="login" />
            </Link>
            <Link className={styles.link_icons} href="/">
              <Image width={25} height={25} src="/favorite.svg" alt="favs" />
            </Link>
            <Link className={styles.link_icons} href="/">
              <Image width={25} height={25} src="/cart.svg" alt="favs" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar