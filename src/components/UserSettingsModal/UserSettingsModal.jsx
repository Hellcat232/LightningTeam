import css from "./UserSettingsModal.module.css";

const UserSettingsModal = ({ showModal, handleClose, children }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className={css["main-modal"]} onClick={handleClose}>
      <div
        className={css["modal-content"]}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={css.close} onClick={handleClose}>
          x
        </button>
        <div
          className={
            css["custom-scrollbar"]
          } /*style={{ overflowY: 'scroll' }}*/
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default UserSettingsModal;
