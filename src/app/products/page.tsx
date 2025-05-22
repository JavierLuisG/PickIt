"use client";

import styles from "./page.module.css";
import CardComponent from "../../components/card/page";
import products from "../../../mocks/products.json";

const ProductsPage = () => {
  return (
    <div className={styles.product_container}>
      {
        products.map((product) => (
          <CardComponent key={product.id} product={product} />
        ))
      }
    </div>
  );
};

export default ProductsPage;