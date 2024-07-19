import { useState } from "react";
import ModalPart from "react-modal";
import css from "./Modal.module.css";

const Modal = ({ isOpen, children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <ModalPart
      appElement={document.getElementById("root")}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      <button className={css.btnClose} onClick={closeModal}>
        X
      </button>
      {children}
    </ModalPart>
  );
};

export default Modal;
