// import React from 'react';
// import './ModalUserSetting.css';
// import UserSettingForm from '../Modal/UserSettingForm';

const UserSettingsModal = ({ showModal, handleClose, children }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="main-modal" onClick={handleClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close" onClick={handleClose}>
          ×
        </button>
        <h1 className="setting">Setting</h1>
        {children}
      </div>
    </div>
  );
};

export default UserSettingsModal;
