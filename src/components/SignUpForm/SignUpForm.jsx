import { register } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SignUpForm.module.css";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(register({ email: "m@gmail.com", password: "123456789" }));
  }, [dispatch]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.repeatPassword) {
      alert("Passwords do not match!");
      return;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <label className={styles.FormLabel}>Email</label>
        <input
          className={styles.FormInput}
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />

        <label className={styles.FormLabel}>Password</label>
        <input
          className={styles.FormInput}
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Enter your password"
          required
        />
        <label className={styles.FormLabel}>Repeat Password</label>
        <input
          className={styles.FormInput}
          onChange={handleChange}
          name="RepeatPassword"
          type="password"
          placeholder="Repeat password"
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUpForm;
