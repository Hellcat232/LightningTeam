import { login } from "../../redux/auth/operations";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const SignInForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(login({ email: "m@gmail.com", password: "123456789" }));
  }, [dispatch]);

  return (
    <>
      <p>login form</p>
    </>
  );
};

export default SignInForm;
