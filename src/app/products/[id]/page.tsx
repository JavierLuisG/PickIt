"use client";

import styles from "./page.module.css";
import {
  Image
} from "@heroui/react";
import mockProducts from "../../../../mocks/products.json";
import { useParams } from "next/navigation";
import { useCart } from "../../../context/cartContext";
import { useRouter } from "next/navigation";
import Favorite from "../../../assets/icons/favorite.svg";

const ProductDetail = () => {
  const params = useParams();
  const id = Number(params.id);
  const { addToCart } = useCart();
  const router = useRouter();

  const product = mockProducts.find((item) => item.id === id);

  if (!product) {
    return <div className={styles.error}>Producto no encontrado</div>;
  }

  const handleClickCart = () => {
    addToCart(product);
    router.push("/products");
  }

  const handleClickFav = () => {
    // addToFav(product);
    router.push("/products");
  }

  const handleClickBuy = () => {
    addToCart(product);
    router.push("/cart");
  }

  return (
    <div className={styles.select_container}>
      <section className={styles.first_section}>
        <Image
          isZoomed
          alt="Product image"
          radius="none"
          src={product.image}
        />

      </section>
      <section className={styles.second_section}>
        <article className={styles.info_content}>
          <h2 className={styles.title}>
            {product.title}
          </h2>
          <p className={styles.sku}>
            {product.sku}
          </p>
          <p className={styles.price}>
            $ {product.price}
          </p>
        </article>
        <article className={styles.description}>
          <p>
            {product.description}
          </p>
        </article>
        <article className={styles.btns_container}>
          <div className={styles.btn_top}>
            <button
              className={styles.btn_cart}
              onClick={() => handleClickCart()}
            >
              Agregar al carrito
            </button>
            <button
              className={styles.btn_fav}
              onClick={() => handleClickFav()}
            >
              <Favorite className={styles.icon_favs} />
            </button>
          </div>
          <div className={styles.btn_bottom}>
            <button
              className={styles.btn_buy}
              onClick={() => handleClickBuy()}
            >
              Realizar compra
            </button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default ProductDetail;