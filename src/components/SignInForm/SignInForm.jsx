import * as yup from "yup";
import { login } from "../../redux/auth/operations";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";

const SignInSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const SignInForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInSchema),
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>email</label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label>password</label>
        <input
          name="password"
          type={passwordShown ? "text" : "password"}
          placeholder="Enter your password"
          {...register("password")}
        />
        <FaRegEyeSlash onClick={togglePasswordVisibility} />

        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignInForm;
