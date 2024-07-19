import { register } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(register({ email: "m@gmail.com", password: "123456789" }));
  }, [dispatch]);

  return (
    <>
      <p>register form</p>
    </>
  );
};

export default SignUpForm;
