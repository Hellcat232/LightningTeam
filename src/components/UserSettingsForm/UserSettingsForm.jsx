import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { useEffect } from "react";

const UserSettingsForm = () => {
  return (
    <>
      <p>UserSettingsForm</p>;
    </>
  );
};

export default UserSettingsForm;
