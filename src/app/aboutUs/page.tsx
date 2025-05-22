"use client";

import styles from "./page.module.css";
import HeroComponent from "../../components/hero/page";
import AutCallToActionComponent from "../../components/authCallToAction/page";
import HowToBuyComponent from "../../components/howToBuy/page";
import ContactPage from "../contact/page";

const AboutUsPage = () => {
  return (
    <div className={styles.aboutus_container}>
      <HeroComponent />
      <AutCallToActionComponent />
      <HowToBuyComponent />
      <ContactPage />
    </div>
  );
};

export default AboutUsPage;