import { register } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Box, FormControl, FormLabel } from "@mui/material";
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
    confirmPassword: "",
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
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  };

  return (
    <>
      <Box
        className={styles.registerForm}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 400,
          margin: "auto",
        }}
      >
        <FormControl>
          <FormLabel className={styles.FormLabel}>Email</FormLabel>
          <TextField
            className={styles.FormInput}
            label="Enter your email"
            variant="outlined"
            name="email"
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel className={styles.FormLabel}>Password</FormLabel>
          <TextField
            className={styles.FormInput}
            label="Enter your password"
            variant="outlined"
            name="password"
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel className={styles.FormLabel}>Repeat Password</FormLabel>
          <TextField
            className={styles.FormInput}
            label="Repeat password"
            variant="outlined"
            name="confirmPassword"
            onChange={handleChange}
            required
          />
        </FormControl>
        <Button type="submit" variant="contained">
          Sign Up
        </Button>
      </Box>
    </>
  );
};

export default SignUpForm;
