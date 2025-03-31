"use client";

import Hero from "../components/hero/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home_container}>
      <Hero />
    </div>
  );
};