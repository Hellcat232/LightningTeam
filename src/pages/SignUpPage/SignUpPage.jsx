import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { Link } from "react-router-dom";
import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection"; 
import styles from "./SignUpPage.module.css";
import { Page } from "../../components/Page/Page";


const SignUpPage = () => {
  return (
    <div className={styles.signUpContainer}>
      <div className={styles.SignUpPageSection}>
        <Page/>
          <SignUpForm />
      </div>
      <div className={styles.SignUpPageMedia}>
        <AdvantagesSection />
      </div> 
    </div>
  );
};

export default SignUpPage;

