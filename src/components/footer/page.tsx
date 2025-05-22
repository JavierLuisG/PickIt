"use client";

import styles from "../footer/page.module.css";
import Link from "next/link";
import Github from "../../assets/icons/github.svg";
import Linkedin from "../../assets/icons/linkedin.svg";

const FooterComponent = () => {
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
              <Link href="/products">Tienda</Link>
              <Link href="/cart">Carrito</Link>
              <Link href="/tyc">Términos y condiciones</Link>
              <Link href="/contact">Contacto</Link>
            </div>
          </article>
          <article className={`${styles.column}`}>
            <div>
              <p><b className={`${styles.p}`}>¿Tienes alguna pregunta?</b></p>
              <p><b className={`${styles.p}`}>¿Te gustaría saber más?</b></p>
            </div>
            <div>
              <p className={`${styles.p}`}>Explora, descubre y</p>
              <p className={`${styles.p}`}>¡Contáctanos!</p>
            </div>
            <div className={`${styles.networks_contact}`}>
              <Link
                href="https://www.linkedin.com/in/javierluisg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className={styles.img} />
              </Link>
              <Link
                href="https://github.com/JavierLuisG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className={styles.img} />
              </Link>
            </div>
          </article>
        </div>
      </section>
      <section className={`${styles.body_footer}`}>
        <p className={`${styles.text} ${styles.title_body}`}>Desarrollado por</p>
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
  );
};

export default FooterComponent;