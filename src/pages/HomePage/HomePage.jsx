import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection.jsx";
import styles from "./HomePage.module.css";
import React from "react";

const HomePage = () => {
  return (
    <div className={styles.HomePageSection}>
      <title>Home Page</title>
      <WelcomeSection />
      <AdvantagesSection />
    </div>
  );
};

export default HomePage;

