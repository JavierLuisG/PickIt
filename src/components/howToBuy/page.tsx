"use client";

import styles from "./page.module.css";

const Page: React.FC = () => {
  return (
    <section className={styles.htb_section}>
      <div className={styles.htb_image_container}>
        <img src="/images/img_amigos_2.jpg" className={styles.htb_img} alt="Proceso de compra" />
      </div>
      <div className={styles.htb_content}>
        <h2 className={styles.htb_title}>Conecta con</h2>
        <div className={styles.htb_steps}>
          <div className={styles.htb_step}>
            <h3 className={styles.step_title}>Tus favoritos</h3>
            <p className={styles.step_description}>
              Explora nuestro catálogo y selecciona lo que más te guste.
            </p>
          </div>
          <div className={styles.htb_step}>
            <h3 className={styles.step_title}>Tu cuenta</h3>
            <p className={styles.step_description}>
              Regístrate o inicia sesión para guardar productos, revisar pedidos y comprar más rápido.
            </p>
          </div>
          <div className={styles.htb_step}>
            <h3 className={styles.step_title}>Tu pedido</h3>
            <p className={styles.step_description}>
              Paga con confianza. Te enviaremos tus productos directamente a tu puerta, ¡rápido y sin sorpresas!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page