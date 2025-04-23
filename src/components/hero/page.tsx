"use client";

import styles from "./page.module.css";
import { Button, Link } from "@heroui/react";

const HeroComponent = () => {
  return (
    <section className={styles.hero_container}>
      <div className={styles.hero_content}>
        <p className={styles.subtitle}>Calidad en cada producto</p>
        <h1 className={styles.title}>Descubre lo mejor de nuestros productos</h1>
        <h2 className={styles.description}>
          Encuentra productos de calidad a precios justos, pensados para ti.
        </h2>
        <Button
          className={styles.hero_btn}
          radius="full"
          as={Link}
          href={"/products"}
          color="secondary"
        >
          Explorar productos
        </Button>
      </div>
      <div className={styles.hero_image_container}>
        <img src="/images/img_amigos_1.jpg" className={styles.hero_img} />
      </div>
    </section>
  );
};

export default HeroComponent;