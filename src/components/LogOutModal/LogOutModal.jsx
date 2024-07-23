import React from "react";
import { useDispatch } from "react-redux";

import { logout } from "../../redux/auth/operations";

import css from "./LogOutModal.module.css";

const LogOutModal = (props) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!props.call) {
    return null;
  }

  return (
    <div className={css.modal} onClick={props.onClose}>
      <div
        className={css["modal-content"]}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className={css.close} onClick={props.onClose}>
          ×
        </button>
        <h2>Log out</h2>
        <p>Do you really want to leave??</p>
        <div className={css.btn}>
          <button className={css.accept} type="button" onClick={handleLogout}>
            Log out
          </button>
          <button className={css.reject} type="button" onClick={props.onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogOutModal;
