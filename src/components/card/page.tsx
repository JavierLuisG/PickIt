"use client";

import styles from "./page.module.css";
import {
  Image,
  Link,
  Button,
} from "@heroui/react";

type Producto = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type CardComponentProps = {
  product: Producto;
};

const CardComponent = ({ product }: CardComponentProps) => {
  return (
    <>
      <section className={styles.card_section}>
        <Image
          isZoomed
          alt="Product image"
          radius="none"
          src={product.image}
        />
        <div className={styles.card_content}>
          <div className={styles.info_content}>
            <h2 className={styles.title}>
              {product.title}
            </h2>
            <hr aria-orientation="horizontal" className={styles.hr_line} />
            <p className={styles.price}>
              $ {product.price}
            </p>
          </div>
          <div className={styles.card_btn}>
            <Button
              className={styles.btn}
              radius="none"
              as={Link}
              href={`/products/${product.id}`}
            >
              Ver detalles
            </Button>
          </div>
        </div>
      </section >
    </>
  );
};

export default CardComponent;