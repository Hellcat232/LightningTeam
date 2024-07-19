import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return;
};

export default SignUpForm;
