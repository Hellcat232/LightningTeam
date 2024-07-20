import { useState } from 'react';
import Modal from 'react-modal';
import styles from './WaterModal.module.css';

const WaterModal = ({ isOpen, closeModal, onAddWater }) => {
  const [amount, setAmount] = useState(50);
  const [time, setTime] = useState('');

  const increaseAmount = () => setAmount(amount + 50);
  const decreaseAmount = () => setAmount(amount > 50 ? amount - 50 : 50);

  const handleSave = () => {
    onAddWater(amount, time);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Add Water Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button
        className={styles.closeButton}
        onClick={closeModal}
        aria-label="Close modal"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 7L7 21"
            stroke="#2F2F2F"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 7L21 21"
            stroke="#2F2F2F"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        {/* <svg className={styles.icon}>
            <use href="#icon-close" />
          </svg> */}
      </button>
      <h2 className={styles['title-txt']}>Add water</h2>
      <div className={styles['cont-sec-two-modal-add']}>
        <div className={styles.formGroup}>
          <div className={styles['sec-two-txt-choose']}>
            <label>Choose a value:</label>
          </div>
          <p className={styles['amount-txt-txt']}>Amount of water:</p>
          <div className={styles.amountControls}>
            <button onClick={decreaseAmount} className={styles.iconButton}>
              <svg
                width="43"
                height="43"
                viewBox="0 0 43 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.75"
                  y="0.75"
                  width="41.5"
                  height="41.5"
                  rx="20.75"
                  stroke="#323F47"
                  stroke-width="1.5"
                />
                <path
                  d="M13.8213 21.5H29.1784"
                  stroke="#323F47"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              {/* <svg className={styles.icon}>
            <use href="#icon-close" />
          </svg> */}
            </button>
            <span className={styles['amount-ml']}>{amount} ml</span>
            <button onClick={increaseAmount} className={styles.iconButton}>
              <svg
                width="43"
                height="43"
                viewBox="0 0 43 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.75"
                  y="0.75"
                  width="41.5"
                  height="41.5"
                  rx="20.75"
                  stroke="#323F47"
                  stroke-width="1.5"
                />
                <path
                  d="M21.5 13.8215V29.1787"
                  stroke="#323F47"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.8213 21.5H29.1784"
                  stroke="#323F47"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              {/* <svg className={styles.icon}>
            <use href="#icon-close" />
          </svg> */}
            </button>
          </div>
        </div>
        <div className={styles['input-time-choose']}>
          <label className={styles['amount-txt-txt']}>Recording time:</label>
          <input
            className={styles['inp-modal']}
            type="time"
            value={time}
            onChange={e => setTime(e.target.value)}
          />
        </div>
      </div>
      <div className={styles['input-time-choose']}>
        <label className={styles['amount-txt-txt']}>
          Enter the value of the water used:
        </label>
        <input
          className={styles['inp-modal']}
          type="number"
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
        />
      </div>
      <button onClick={handleSave} className={styles.saveButton}>
        <p className={styles['btn-save-txt']}>Save</p>
      </button>
    </Modal>
  );
};

export default WaterModal;
