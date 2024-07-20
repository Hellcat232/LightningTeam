import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { Logo } from "../../components/Logo/Logo.jsx";
import styles from "./SignUpPage.module.css";

const SignUpPage = () => {
  return (
    <div className={styles.signUpContainer}>
      <Logo />
      <h1>Sign Up</h1>
      <SignUpForm />
      <p>
        Already have account? <a href="/">Sign In</a>
      </p>
    </div>
  );
};

export default SignUpPage;
