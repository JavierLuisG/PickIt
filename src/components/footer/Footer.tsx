"use client";

import styles from "../footer/page.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={`${styles.footer_container}`}>
      <section className={`${styles.footer_header}`}>
        <span>Powered by</span>
      </section>
      <section className={`${styles.body_container}`}>
        <div className={`${styles.info_container}`}>
          <article className={`${styles.text_info}`}>
            <span>© 2025 - Javier Luis</span>
            <span>Todos los derechos reservados.</span>
          </article>
          <article className={`${styles.networks_contact}`}>
            <Link
              href="https://www.linkedin.com/in/javierluisg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={`${styles.img}`} src="/linkedin.svg" alt="" />
            </Link>
            <Link
              href="https://github.com/JavierLuisG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={`${styles.img}`} src="/github.svg" alt="" />
            </Link>
          </article>
        </div>
      </section>
    </footer>
  )
};

export default Footer;