import React, { useState } from "react";
import WaterModal from "../WaterModalX/WaterModal";
import styles from "./AddWaterBtn.module.css";
import Iconsvg from "../Icon/Icon";

const AddWaterBtn = ({ onAddWater }) => {
  const [isAddWaterModalOpen, setIsAddWaterModalOpen] = useState(false);

  const openAddWaterModal = () => setIsAddWaterModalOpen(true);
  const closeAddWaterModal = () => setIsAddWaterModalOpen(false);

  return (
    <>
      <button
        onClick={openAddWaterModal}
        className={styles.buttonStyle}
        type="button"
        aria-label="Add water"
      >
        <Iconsvg
          width="20"
          height="20"
          iconName="plus"
          className={styles.iconns}
        />
        <span className={styles.textStyle}>Add water</span>
      </button>
      <WaterModal
        isOpen={isAddWaterModalOpen}
        closeModal={closeAddWaterModal}
        onAddWater={onAddWater}
      />
    </>
  );
};

export default AddWaterBtn;
