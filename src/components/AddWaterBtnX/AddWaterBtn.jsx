import React, { useState } from 'react';
import WaterModal from '../WaterModalX/WaterModal';
import styles from './AddWaterBtn.module.css';


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
        
        {/* <svg className={styles.iconStyle}>
          <use href="#your-icon-id" />
        </svg> */}
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="30" height="30" rx="15" fill="#9BE1A0" />
  <path d="M15 9.64288V20.3572" stroke="#323F47" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M9.64307 15H20.3574" stroke="#323F47" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
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
