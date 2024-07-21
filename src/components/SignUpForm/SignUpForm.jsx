import { useDispatch } from "react-redux";
import { useState } from "react";
import * as yup from "yup";
import { register } from "../../redux/auth/operations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./SignUpForm.module.css";
import { FaRegEyeSlash } from "react-icons/fa6";

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
    console.log(data);

    if (data.password !== data.repeatPassword) {
      alert("Passwords do not match!");
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
    <div className={css.signUpForm}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.registerForm}>
        <label className={css.signUpFormHeader}>Email</label>
        <input
          className={`${css.signUpFormInput}
            ${errors.email ? `${css.errorPlaceholder} ${css.errorInput}` : ""}`}
          name="email"
          type="email"
          placeholder={errors.email ? "Invalid email" : "Enter your email"}
            {...formRegister("email")}
        />
        {errors.email && (
            <p className={css.errorMessage}>{errors.email.message}</p>
          )}

        <label className={css.signUpFormLabel}>Password</label>
        <input
          className={`${css.signUpFormInput} ${
                errors.password
                  ? `${css.errorPlaceholder} ${css.errorInput}`
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

        <FaRegEyeSlash onClick={togglePasswordVisibility} />
        <label className={css.signUpFormLabel}>Repeat Password</label>
        <input
          className={`${css.signUpFormInput} ${
                errors.repeatPassword
                  ? `${css.errorPlaceholder} ${css.errorInput}`
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
        <FaRegEyeSlash onClick={toggleRepeatPasswordVisibility} />

        {errors.password && (<p className={css.errorMessage}>{errors.password.message}</p>)}

        <button type="submit" className={css.signUpFormBtn}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
