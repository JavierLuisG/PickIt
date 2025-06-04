"use client";

import styles from "./page.module.css";
import {
  Image,
  Button,
} from "@heroui/react";
import mockProducts from "../../../../mocks/products.json";
import { useParams } from "next/navigation";
import { useCart } from "../../../context/cartContext";
import { useRouter } from "next/navigation";

const ProductDetail = () => {
  const params = useParams();
  const id = Number(params.id);
  const { addToCart } = useCart();
  const router = useRouter();

  const product = mockProducts.find((item) => item.id === id);

  if (!product) {
    return <div className={styles.error}>Producto no encontrado</div>;
  }

  const handleClick = () => {
    addToCart(product);
    router.push("/products");
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
              onPress={() => handleClick()}
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