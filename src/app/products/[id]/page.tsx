"use client";

import styles from "./page.module.css";
import {
  Image,
  Link,
  Button,
} from "@heroui/react";
import mockProducts from "../../../../mocks/products.json";
import { useParams } from "next/navigation";
import { useCart } from "../../../context/cartContext";

const ProductDetail = () => {
  const params = useParams();
  const id = Number(params.id);
  const { addToCart } = useCart();

  const product = mockProducts.find((item) => item.id === id);

  if (!product) {
    return <div className={styles.error}>Producto no encontrado</div>;
  }

  return (
    <div className={styles.select_container}>
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
              href={`/products`}
              onPress={() => addToCart(product)}
            >
              Agregar al carrito
            </Button>
          </div>
        </div>
      </section >
    </div>
  );
};

export default ProductDetail;