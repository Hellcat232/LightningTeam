import Modal from "react-modal";
import styles from "./DeleteModal.module.css";
import Iconsvg from "../Icon/Icon";
import { deleteWater } from "../../redux/water/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectFullDayWater } from "../../redux/water/selectors";

Modal.setAppElement("#root");

const DeleteModal = ({ id, isOpen, closeModal, onDelete }) => {
  const dispatch = useDispatch();
  const isFull = useSelector(selectFullDayWater);

  // console.log(isFull);

  // const waterId = id;

  const handleDelete = async () => {
    // onDelete(id);
    dispatch(deleteWater(id));
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Delete Confirmation Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button
        className={styles.closeButton}
        onClick={closeModal}
        aria-label="Close modal"
      >
        <Iconsvg
          width="28"
          height="28"
          iconName="close"
          className={styles["icon-close"]}
        />
      </button>
      <h2 className={styles["title-txt"]}>Delete entry</h2>
      <p className={styles["message-txt"]}>
        Are you sure you want to delete the entry?
      </p>
      <div className={styles.buttons}>
        <button onClick={handleDelete} className={styles.deleteButton}>
          Delete
        </button>
        <button onClick={closeModal} className={styles.cancelButton}>
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
