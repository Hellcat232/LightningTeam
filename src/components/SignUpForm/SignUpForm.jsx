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
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.registerForm}>
        <label className={styles.FormLabel}>Email</label>
        <input
          className={styles.FormInput}
          name="email"
          type="email"
          placeholder="Enter your email"
          required
          {...formRegister("email")}
        />

        <label className={styles.FormLabel}>Password</label>
        <input
          className={styles.FormInput}
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Enter your password"
          required
          {...formRegister("password")}
        />
        <label className={styles.FormLabel}>Repeat Password</label>
        <input
          className={styles.FormInput}
          onChange={handleChange}
          name="repeatPassword"
          type="password"
          placeholder="Repeat password"
          required
          {...formRegister("repeatPassword")}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUpForm;
