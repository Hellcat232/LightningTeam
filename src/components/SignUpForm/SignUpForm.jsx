import { useDispatch } from "react-redux";
import { useState } from "react";
import * as yup from "yup";
import { register } from "../../redux/auth/operations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import styles from "./SignUpForm.module.css";
import { FaRegEyeSlash } from "react-icons/fa6";
import toast from "react-hot-toast";

const SignUpSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const SignUpForm = () => {
  const dispatch = useDispatch();
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const [repeatPasswordShown, setRepeatPasswordShown] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const toggleRepeatPasswordVisibility = () => {
    setRepeatPasswordShown(!repeatPasswordShown);
  };

  const onSubmit = (data) => {
    if (data.password !== data.repeatPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    dispatch(register({ email: data.email, password: data.password }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={styles.signUpForm}>
      <h1 className={styles.signUpFormHeader}>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.registerForm}>
        <label className={styles.signUpFormLabel}>Email</label>
        <input
          className={`${styles.signUpFormInput} ${
            errors.email
              ? `${styles.errorPlaceholder} ${styles.errorInput}`
              : ""
          }`}
          name="email"
          type="email"
          placeholder={errors.email ? "Invalid email" : "Enter your email"}
          {...formRegister("email")}
        />
        {errors.email && (
          <p className={styles.errorMessage}>{errors.email.message}</p>
        )}

        <div>
          <label className={styles.signUpFormLabel}>Password</label>
          <div className={styles.inputContainer}>
            <input
              className={`${styles.signUpFormInput} ${
                errors.password
                  ? `${styles.errorPlaceholder} ${styles.errorInput}`
                  : ""
              }`}
              onChange={handleChange}
              name="password"
              type={passwordShown ? "text" : "password"}
              placeholder={
                errors.password ? "Invalid password" : "Enter your password"
              }
              {...formRegister("password")}
            />
            <FaRegEyeSlash
              onClick={togglePasswordVisibility}
              className={styles.passwordToggleIcon}
            />
          </div>
        </div>

        <div>
          <label className={styles.signUpFormLabel}>Repeat Password</label>
          <div className={styles.inputContainer}>
            <input
              className={`${styles.signUpFormInput} ${
                errors.repeatPassword
                  ? `${styles.errorPlaceholder} ${styles.errorInput}`
                  : ""
              }`}
              onChange={handleChange}
              name="repeatPassword"
              type={repeatPasswordShown ? "text" : "password"}
              placeholder={
                errors.repeatPassword
                  ? "Passwords do not match"
                  : "Repeat password"
              }
              required
              {...formRegister("repeatPassword")}
            />
            <FaRegEyeSlash
              className={styles.passwordToggleIcon}
              onClick={toggleRepeatPasswordVisibility}
            />
          </div>
        </div>

        {errors.password && (
          <p className={styles.errorMessage}>{errors.password.message}</p>
        )}

        <button type="submit" className={styles.signUpFormBtn}>
          Sign Up
        </button>
      </form>
      <div className={styles.signInLinkContainer}>
        <p className={styles.signUpPageText}>
          Already have an account?{" "}
          <Link to="/signin" className={styles.signInPageLink}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
