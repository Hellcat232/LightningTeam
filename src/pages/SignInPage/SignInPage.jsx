import SignInForm from "../../components/SignInForm/SignInForm";
import { Logo } from "../../components/Logo/Logo.jsx";
import React from "react";
import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection"; 


const SignInPage = () => {
  return (
    <>
      <Logo />
      <SignInForm />
        <AdvantagesSection />
    </>
  );
};

export default SignInPage;
