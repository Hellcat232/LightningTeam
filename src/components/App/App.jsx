import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { refreshing } from "../../redux/auth/operations";

import HomePage from "../../pages/HomePage/HomePage";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import SignInPage from "../../pages/SignInPage/SignInPage";
import TrackerPage from "../../pages/TrackerPage/TrackerPage";

import SharedLayout from "../SharedLayout/SharedLayout";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshing());
  }, [dispatch]);

  return isRefresh ? (
    <p>Reload...</p>
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
      </Routes>
    </SharedLayout>
  );
};

import { useState } from 'react';
import UserSettingsModal from "./components/ModalUserSetting/ModalUserSetting";
import UserSettingForm from './components/Modal/UserSettingForm';

const App = () => {
   const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };


  const handleCloseModal = () => {
    setShowModal(false);
  };
 

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <UserSettingsModal showModal={showModal} handleClose={handleCloseModal}>
        <UserSettingForm />
      </UserSettingsModal>
      
    </div>
  );
};

export default App;