"use client";

import styles from "./page.module.css";
import { Button, Link } from "@heroui/react";

const Page: React.FC = () => {
  return (
    <section className={styles.auth_section}>
      <h1 className={styles.auth_title}>Tu experiencia empieza aquí</h1>
      <p className={styles.auth_subtitle}>
        Accede a más funciones y simplifica tus compras.
      </p>
      <div className={styles.auth_cards_container}>

        <div className={styles.auth_card}>
          <div>
            <h3 className={styles.auth_card_title}>Únete y descubre más posibilidades</h3>
            <ul className={styles.auth_card_list}>
              <li>Guarda tus productos favoritos y accede a ellos en cualquier momento.</li>
              <li>Sé el primero en conocer nuevas ofertas y lanzamientos.</li>
              <li>Compra sin complicaciones con un solo clic.</li>
            </ul>
          </div>
          <Button
            className={styles.auth_button}
            radius="full"
            as={Link}
            href="/register"
          >
            Crear cuenta gratis
          </Button>
        </div>

        <div className={styles.auth_card}>
          <div>
            <h3 className={styles.auth_card_title}>Ingresa y continúa donde lo dejaste</h3>
            <ul className={styles.auth_card_list}>
              <li>Agrega productos al carrito y gestiona tu compra fácilmente.</li>
              <li>Accede a tu historial y revisa tus compras anteriores.</li>
              <li>Disfruta de una experiencia personalizada basada en tus intereses.</li>
            </ul>
          </div>
          <Button
            className={styles.auth_button_secondary}
            radius="full"
            as={Link}
            href="/login"
          >
            Ingresa ahora
          </Button>
        </div>

      </div>
    </section>
  )
}

export default Page;