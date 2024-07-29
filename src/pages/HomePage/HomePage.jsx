import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection.jsx";
import styles from "./HomePage.module.css";
import React from "react";
import { Logo } from "../../components/Logo/Logo";

const HomePage = () => {
  return (
    <div className={styles.HomePageSection}>
      <title>Home Page</title>
      <div className={styles.PageLogo}>
        <Logo />
      </div>
      <WelcomeSection />
      <AdvantagesSection />
    </div>
  );
};

export default HomePage;

