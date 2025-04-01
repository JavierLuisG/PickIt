"use client";

import Hero from "../components/hero/page";
import styles from "./page.module.css";
import AutCallToAction from "../components/authCallToAction/page";

export default function Home() {
  return (
    <div className={styles.home_container}>
      <Hero />
      <AutCallToAction />
    </div>
  );
};