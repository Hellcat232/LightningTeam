import { useState } from "react";
import Modal from "react-modal";
import styles from "./WaterModal.module.css";
import Iconsvg from "../Icon/Icon";

Modal.setAppElement("#root");

const WaterModal = ({ isOpen, closeModal, onAddWater }) => {
  const [amount, setAmount] = useState(50);
  const [time, setTime] = useState("");

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
        <Iconsvg
          width="28"
          height="28"
          iconName="close"
          className={styles["icon-close"]}
        />
      </button>

      <h2 className={styles["title-txt"]}>Add water</h2>
      <div className={styles["cont-sec-two-modal-add"]}>
        <div className={styles.formGroup}>
          <div className={styles["sec-two-txt-choose"]}>
            <label>Choose a value:</label>
          </div>
          <p className={styles["amount-txt-txt"]}>Amount of water:</p>
          <div className={styles.amountControls}>
            <button onClick={decreaseAmount} className={styles.iconButton}>
              <Iconsvg
                width="43"
                height="43"
                iconName="minus"
                className={styles["icon-mod-math"]}
              />
            </button>
            <span className={styles["amount-ml"]}>{amount} ml</span>
            <button onClick={increaseAmount} className={styles.iconButton}>
              <Iconsvg
                width="43"
                height="43"
                iconName="plus"
                className={styles["icon-mod-math"]}
              />
            </button>
            <span className={styles["amount-ml"]}>{amount} ml</span>
            <button
              onClick={increaseAmount}
              className={styles.iconButton}
            ></button>
          </div>
        </div>
        <div className={styles["input-time-choose"]}>
          <label className={styles["amount-txt-txt"]}>Recording time:</label>
          <input
            className={styles["inp-modal"]}
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>
      <div className={styles["input-time-choose"]}>
        <label className={styles["amount-txt-txt"]}>
          Enter the value of the water used:
        </label>
        <input
          className={styles["inp-modal"]}
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <button onClick={handleSave} className={styles.saveButton}>
        <p className={styles["btn-save-txt"]}>Save</p>
      </button>
    </Modal>
  );
};

export default WaterModal;
