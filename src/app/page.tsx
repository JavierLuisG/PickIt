"use client";

import HeroComponent from "../components/hero/page";
import styles from "./page.module.css";
import AutCallToActionComponent from "../components/authCallToAction/page";
import HowToBuyComponent from "../components/howToBuy/page";

const HomePage = () => {
  return (
    <div className={styles.home_container}>
      <HeroComponent />
      <AutCallToActionComponent />
      <HowToBuyComponent />
    </div>
  );
};

export default HomePage;