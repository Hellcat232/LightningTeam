import css from "./UserBarPopover.module.css";
import spriteHref from "../../images/icons_sprite_dev.svg";
import { useState } from "react";
import UserSettingsModal from "../UserSettingsModal/UserSettingsModal.jsx";
import LogOutModal from "../LogOutModal/LogOutModal.jsx";
import UserSettingForm from "../UserSettingsForm/UserSettingsForm.jsx";

const UserBarPopover = () => {
  const [modalType, setModalType] = useState(null);
  // const [modalOpen, setModalOpen] = useState(false);

  // const handleModal = (modalType) => {
  //   setModalOpen((prevState) => !prevState);
  //   setModalType(modalType);
  // };

  const handleModalToggle = (type) => {
    setModalType((prevType) => (prevType === type ? null : type));
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <div className={css.container}>
      <button
        className={`${css.button} ${css.settingsBtn}`}
        onClick={() => {
          handleModalToggle("settingsModal");
        }}
      >
        <svg className={css.icon}>
          <use href={`${spriteHref}#icon-settings`}></use>
        </svg>
        Settings
      </button>
      <button
        className={`${css.button} ${css.logOutBtn}`}
        onClick={() => {
          handleModalToggle("logoutModal");
        }}
      >
        <svg className={css.iconLogOut}>
          <use href={`${spriteHref}#icon-log_out`}></use>
        </svg>
        Log out
      </button>
      {modalType && (
        <UserSettingsModal showModal={!!modalType} handleClose={closeModal}>
          {modalType === "settingsModal" ? (
            <UserSettingForm />
          ) : (
            <LogOutModal call={true} onClose={closeModal} />
          )}
        </UserSettingsModal>
      )}
    </div>
  );
};

export default UserBarPopover;
