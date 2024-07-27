import css from './UserSettingsModal.module.css';

const UserSettingsModal = ({ showModal, handleClose, children }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className={css.mainModal} onClick={handleClose}>
      <div className={css.modalContent} onClick={e => e.stopPropagation()}>
        <button className={css.close} onClick={handleClose}>
          ×
        </button>
        <div className={css.customScrollbar} /*style={{ overflowY: 'scroll' }}*/>
          {children}
        </div>
      </div>
    </div>
  );
};

export default UserSettingsModal;
