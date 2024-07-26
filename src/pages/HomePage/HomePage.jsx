import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection.jsx";
import { Page } from "../../components/Page/Page";
import styles from "./HomePage.module.css";
import React from "react";

const HomePage = () => {
  return (
    <div className={styles.HomePageSection}>
      <title>Home Page</title>
      <Page/>
      <WelcomeSection />
      <AdvantagesSection />
    </div>
  );
};

export default HomePage;

