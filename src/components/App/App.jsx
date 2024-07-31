import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { refreshing } from "../../redux/auth/operations";
import toast, { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const SignInPage = lazy(() => import("../../pages/SignInPage/SignInPage"));
const SignUpPage = lazy(() => import("../../pages/SignUpPage/SignUpPage"));
const TrackerPage = lazy(() => import("../../pages/TrackerPage/TrackerPage"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

import SharedLayout from "../SharedLayout/SharedLayout";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const notify = () => toast("Here is your toast.");
import Loader from "../Loader/Loader";

const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshing());
  }, [dispatch]);

  return isRefresh ? (
    <Loader />
  ) : (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/signup"
          element={
            <RestrictedRoute redirectTo="/tracker" component={<SignUpPage />} />
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute redirectTo="/tracker" component={<SignInPage />} />
          }
        />
        <Route
          path="/tracker"
          element={
            <PrivateRoute redirectTo="/signin" component={<TrackerPage />} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </SharedLayout>
  );
};

export default App;
