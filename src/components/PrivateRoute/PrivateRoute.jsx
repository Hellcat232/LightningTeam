import { selectIsLoggedIn, selectIsRefreshing } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const nav = !isLoggedIn && !isRefreshing;

  return nav ? <Navigate to={redirectTo} /> : component;
};

export default PrivateRoute;
