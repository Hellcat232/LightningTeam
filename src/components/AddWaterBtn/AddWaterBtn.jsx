import css from './AddWaterBtn.module.css';
import spriteHref from '../../images/icons_sprite_dev.svg';
import { useState } from 'react';
import WaterModal from '../WaterModalX/WaterModal.jsx';

const AddWaterBtn = ({ className, onAddWater }) => {
  const [isModalOpen, setIsModalsOpen] = useState(false);

  const toggleModal = () => {
    setIsModalsOpen(prev => !prev);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleModal}
        className={`${css.button} ${className === 'waterDailyBtn' ? css.waterDailyBtn : css.waterMainBtn}`}
      >
        <svg className={css.icon}>
          <use href={`${spriteHref}#icon-plus_water`}></use>
        </svg>
        Add water
      </button>
      <WaterModal
        isOpen={isModalOpen}
        closeModal={toggleModal}
        onAddWater={onAddWater}
      />
    </>
  );
};

export default AddWaterBtn;
