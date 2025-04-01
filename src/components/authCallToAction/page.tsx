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
            <h3 className={`${styles.auth_card_title} ${styles.auth_card_title_register}`}>
              Empieza ahora y disfruta de más posibilidades
            </h3>
            <p className={`${styles.auth_card_list} ${styles.auth_card_list_register}`}>
              Guarda tus favoritos, accede a ofertas exclusivas y compra fácilmente con un solo clic.
            </p>
          </div>
          <Button
            className={styles.auth_button}
            radius="full"
            as={Link}
            href="/register"
          >
            Crea tu cuenta
          </Button>
        </div>
        <div className={styles.auth_card}>
          <div>
            <h3 className={`${styles.auth_card_title} ${styles.auth_card_title_login}`}>Ingresa y continúa donde lo dejaste</h3>
            <p className={`${styles.auth_card_list} ${styles.auth_card_list_login}`}>
              Añade productos al carrito, revisa tu historial y disfruta de una experiencia personalizada.
            </p>
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