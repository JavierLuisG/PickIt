"use client";

import styles from "../footer/page.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={`${styles.footer_container}`}>
      <section className={`${styles.header_footer}`}>
        <div className={`${styles.footer_columns}`}>
          <article className={`${styles.column}`}>
            <div className={`${styles.logo_footer}`}>
              <Link href="/">
                <img src="/images/pickit-logo-horizontal-color.png" alt="Logo" />
              </Link>
            </div>
          </article>
          <article className={`${styles.column}`}>
            <div className={`${styles.quick_links}`}>
              <Link href="/aboutUs">Sobre Nosotros</Link>
              <Link href="/products">Productos</Link>
              <Link href="/favorites">Favoritos</Link>
              <Link href="/">Terminos y condiciones</Link>
              <Link href="/contact">Contacto</Link>
            </div>
          </article>
          <article className={`${styles.column}`}>
            <div>
              <p><b>¿Tienes alguna pregunta?</b></p>
              <p><b>¿Te gustaría saber más?</b></p>
            </div>
            <div>
              <p>Explora, descubre y</p>
              <p>¡Contáctanos!</p>
            </div>
            <div className={`${styles.networks_contact}`}>
              <Link
                href="https://www.linkedin.com/in/javierluisg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className={`${styles.img}`} src="/linkedin.svg" alt="LinkedIn" />
              </Link>
              <Link
                href="https://github.com/JavierLuisG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className={`${styles.img}`} src="/github.svg" alt="GitHub" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className={`${styles.body_footer}`}>
        <p className={`${styles.text} ${styles.title_body}`}>Powered by </p>
        <div className={`${styles.text_body}`}>
          <span className={`${styles.text}`}>
            Todos los derechos reservados.
          </span>
          <span className={`${styles.text}`}>
            © 2025 - Javier Luis
          </span>
        </div>
      </section>
    </footer>
  )
};

export default Footer;