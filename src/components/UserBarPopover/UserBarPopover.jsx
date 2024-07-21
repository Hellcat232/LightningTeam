import css from './UserBarPopover.module.css';
import spriteHref from '../../images/icons_sprite_dev.svg';
import Modal from 'react-modal';
import { useState } from 'react';
import UserSettingsModal from '../UserSettingsModal/UserSettingsModal.jsx';
import LogOutModal from '../LogOutModal/LogOutModal.jsx';
import UserSettingForm from '../UserSettingsForm/UserSettingsForm.jsx';

const UserBarPopover = () => {
  const [modalType, setModalType] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = modalType => {
    setModalOpen(prevState => !prevState);
    setModalType(modalType);
  };

  return (
    <div className={css.container}>
      <button
        className={`${css.button} ${css.settingsBtn}`}
        onClick={() => {
          handleModal('settingsModal');
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
          handleModal('logoutModal');
        }}
      >
        <svg className={css.iconLogOut}>
          <use href={`${spriteHref}#icon-log_out`}></use>
        </svg>
        Log out
      </button>
      <UserSettingsModal showModal={modalOpen} handleClose={handleModal}>
        {modalType === 'settingsModal' ? <UserSettingForm /> : <LogOutModal />}
      </UserSettingsModal>
    </div>
  );
};

export default UserBarPopover;
