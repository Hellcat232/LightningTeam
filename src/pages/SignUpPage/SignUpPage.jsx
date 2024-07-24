import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { Logo } from "../../components/Logo/Logo.jsx";
import { Link } from "react-router-dom";
import styles from "./SignUpPage.module.css";
import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection";


const SignUpPage = () => {
  return (
    <div className={styles.signUpContainer}>
      <Logo />
      <h1>Sign Up</h1>
      <SignUpForm />
      <p>
        Already have account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUpPage;
