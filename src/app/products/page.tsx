"use client";

import styles from "./page.module.css";
import CardComponent from "../../components/card/page";

const ProductsPage = () => {
  const products = [
    { id: 1, title: "Producto 1", price: 10.00, image: "/images/img_person.jpg" },
    { id: 2, title: "Producto 2", price: 20.00, image: "/images/img_person.jpg" },
    { id: 3, title: "Producto 3", price: 30.00, image: "/images/img_person.jpg" },
    { id: 4, title: "Producto 4", price: 40.00, image: "/images/img_person.jpg" },
    { id: 5, title: "Producto 5", price: 50.00, image: "/images/img_person.jpg" },
    { id: 6, title: "Producto 6", price: 60.00, image: "/images/img_person.jpg" },
    { id: 7, title: "Producto 7", price: 70.00, image: "/images/img_person.jpg" },
    { id: 8, title: "Producto 8", price: 80.00, image: "/images/img_person.jpg" },
    { id: 9, title: "Producto 9", price: 90.00, image: "/images/img_person.jpg" },
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