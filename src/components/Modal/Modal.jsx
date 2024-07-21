// import { useState } from "react";
import Modal from "react-modal";
// import css from "./Modal.module.css";

const CustomModal = () => {

  // console.log(props);

// console.log(children);

  // const [modalIsOpen, setModalIsOpen] = useState(open);

  // const closeModal = () => {
  //   setModalIsOpen(false);
  // };
  return (
    <Modal>
      {/* appElement={document.getElementById("root")}
      isOpen={open}
      onRequestClose={props.closeModal}
     */}
      {/* <button className={css.btnClose} onClick={props.closeModal}>
        X
      </button> */}
      {/* {props.children} */}
    </Modal>
  );
};

export default CustomModal;
