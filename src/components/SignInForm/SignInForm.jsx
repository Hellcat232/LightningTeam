import { login } from "../../redux/auth/operations";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const SignInForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

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
          required
          {...register("email")}
        />

        <label>password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          required
          {...register("password")}
        />

        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignInForm;
