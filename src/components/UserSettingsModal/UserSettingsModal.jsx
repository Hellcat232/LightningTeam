import css from "./UserSettingsModal.module.css";
import icons from "../../images/symbol-icons.svg";

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
        <svg className={css.icon} width="28" height="28">
          <use href={`${icons}#icon-x`}></use>
        </svg>
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
