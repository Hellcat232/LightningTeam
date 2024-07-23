import Modal from 'react-modal';
import styles from './DeleteModal.module.css';
import Iconsvg from '../Icon/Icon';

Modal.setAppElement('#root');

const DeleteModal = ({ isOpen, closeModal, onDelete }) => {
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
          className={styles['icon-close']}
        />
      </button>
      <h2 className={styles['title-txt']}>Delete entry</h2>
      <p className={styles['message-txt']}>
        Are you sure you want to delete the entry?
      </p>
      <div className={styles.buttons}>
        <button onClick={onDelete} className={styles.deleteButton}>
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
