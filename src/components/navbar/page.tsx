"use client";

import styles from "../navbar/page.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar_container}>
        Pick It
        <ul className={styles.options_navbar}>
          <li><Link href="/">Inicio</Link>
          </li>
          <li><Link href="/contact">Contacto</Link>
          </li>
          <li><Link href="/">Carrito</Link>
          </li>
          <li><Link href="/">Ingresar</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar