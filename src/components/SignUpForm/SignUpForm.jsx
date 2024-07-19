import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Box, FormControl, FormLabel } from "@mui/material";
import styles from "./SignUpForm.module.css";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return;
};

export default SignUpForm;
