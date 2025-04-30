"use client";

import styles from "./page.module.css";
import CardComponent from "../../components/card/page";

const ProductsPage = () => {
  const products = [
    { id: 1, title: "Producto 1", price: 100000, image: "/images/img_person.jpg" },
    { id: 2, title: "Producto 2", price: 200000, image: "/images/img_person.jpg" },
    { id: 3, title: "Producto 3", price: 300000, image: "/images/img_person.jpg" },
    { id: 4, title: "Producto 4", price: 400000, image: "/images/img_person.jpg" },
    { id: 5, title: "Producto 5", price: 500000, image: "/images/img_person.jpg" },
    { id: 6, title: "Producto 6", price: 600000, image: "/images/img_person.jpg" },
    { id: 7, title: "Producto 7", price: 700000, image: "/images/img_person.jpg" },
    { id: 8, title: "Producto 8", price: 800000, image: "/images/img_person.jpg" },
    { id: 9, title: "Producto 9", price: 900000, image: "/images/img_person.jpg" },
  ]

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