import React from "react";
import SignInForm from "../../components/SignInForm/SignInForm";
import { Link } from "react-router-dom";
import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection"; 
import styles from "./SignInPage.module.css";
import { Page } from "../../components/Page/Page";


const SignUpPage = () => {
  return (
    <div className={styles.SignInPageWrapper}>
      <div className={styles.SignInPageSection}>
        <Page/>
          <SignInForm />
        </div>
      <AdvantagesSection /> 
    </div>
  );
};

export default SignUpPage;
