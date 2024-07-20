import React from 'react';
import Modal from 'react-modal';
import styles from './DeleteModal.module.css';


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
      <button className={styles.closeButton} onClick={closeModal} aria-label="Close modal">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 7L7 21" stroke="#2F2F2F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M7 7L21 21" stroke="#2F2F2F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <h2 className={styles['title-txt']}>Delete entry</h2>
      <p className={styles['message-txt']}>Are you sure you want to delete the entry?</p>
      <div className={styles.buttons}>
        <button onClick={onDelete} className={styles.deleteButton}>Delete</button>
        <button onClick={closeModal} className={styles.cancelButton}>Cancel</button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
