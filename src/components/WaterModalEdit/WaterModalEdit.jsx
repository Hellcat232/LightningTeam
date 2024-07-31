import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styles from "./WaterModalEdit.module.css";
import Iconsvg from "../Icon/Icon";
import { useDispatch } from "react-redux";
import { updateWater } from "../../redux/water/operations";
import { useMonthQuery } from "../../hooks/useMonthQuery.js";

const WaterModalEdit = ({
                          id,
                          isOpen,
                          closeModal,
                          initialAmount = 50,
                          initialTime = '',date
                        }) => {
  const [amount, setAmount] = useState(initialAmount);
  const [time, setTime] = useState(initialTime);
  const { dispatchDate } = useMonthQuery();
  console.log(date)

  useEffect(() => {
    setAmount(initialAmount);
    setTime(initialTime);
  }, [initialAmount, initialTime]);

  const increaseAmount = () => setAmount(amount + 50);
  const decreaseAmount = () => setAmount(amount > 50 ? amount - 50 : 50);

  const dispatch = useDispatch();

  const handleSave = async () => {

    await dispatch(
        updateWater({
          _id: id,
          waterValue: amount,
          localTime: time,
          localDate: date,
        })
    );
    dispatchDate();
    closeModal();
  };

  return (
      <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Edit Water Modal"
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
        <h2 className={styles["title-txt"]}>
          Edit the entered amount <br /> of water
        </h2>
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
          <label className={styles["amount-txt-ed"]}>
            Enter the value of the water used:
          </label>
          <input
              className={styles["inp-modal"]}
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              min="0"
              step="any"
          />
        </div>
        <button onClick={handleSave} className={styles.saveButton}>
          <p className={styles["btn-save-txt"]}>Save</p>
        </button>
      </Modal>
  );
};

export default WaterModalEdit;
