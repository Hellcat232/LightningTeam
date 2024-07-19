import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { Logo } from "../../components/Logo/Logo.jsx";

const SignUpPage = () => {
  return (
    <>
      <Logo />
      <h1>Sign Up</h1>
      <SignUpForm />
      <p>Already have account? <a href="/">Sign In</a></p>
    </>
  );
};

export default SignUpPage;
