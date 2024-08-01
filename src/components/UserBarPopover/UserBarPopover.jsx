import css from "./UserBarPopover.module.css";
import { LuLogOut } from "react-icons/lu";
import { GoGear } from "react-icons/go";
import { useState } from "react";
import UserSettingsModal from "../UserSettingsModal/UserSettingsModal.jsx";
import LogOutModal from "../LogOutModal/LogOutModal.jsx";
import UserSettingForm from "../UserSettingsForm/UserSettingsForm.jsx";

const UserBarPopover = () => {
  const [modalType, setModalType] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = (modalType) => {
    setModalOpen((prevState) => !prevState);
    setModalType(modalType);
  };

  return (
    <div className={css.container}>
      <button
        className={`${css.button} ${css.settingsBtn}`}
        onClick={() => {
          handleModal("settingsModal");
        }}
      >
        <GoGear />
        Settings
      </button>
      <button
        className={`${css.button} ${css.logOutBtn}`}
        onClick={() => {
          handleModal("logoutModal");
        }}
      >
        <LuLogOut />
        Log out
      </button>
      {modalType === "settingsModal" ? (
        <UserSettingsModal showModal={modalOpen} handleClose={handleModal}>
          <UserSettingForm handleClose={handleModal} />
        </UserSettingsModal>
      ) : (
        <LogOutModal showModal={modalOpen} handleClose={handleModal} />
      )}
    </div>
  );
};

export default UserBarPopover;
