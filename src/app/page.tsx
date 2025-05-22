"use client";

import styles from "./page.module.css";
import ProductsPage from "./products/page";

const HomePage = () => {
  return (
    <div className={styles.home_container}>
      <ProductsPage />
    </div>
  );
};

export default HomePage;