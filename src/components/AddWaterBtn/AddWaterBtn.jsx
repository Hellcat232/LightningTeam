import { useState } from 'react';
import { useDispatch } from 'react-redux';
import css from './AddWaterBtn.module.css';
import spriteHref from '../../images/icons_sprite_dev.svg';
import WaterModal from '../WaterModalX/WaterModal.jsx';
import { addWater } from '../../redux/water/operations.js';
import toast from 'react-hot-toast';

const AddWaterBtn = ({ className, selectedDate }) => {
  const [isModalOpen, setIsModalsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsModalsOpen(prev => !prev);
  };

  const handleAddWater = async (amount, time) => {
    const waterData = {
      waterValue: amount,
      localTime: time,
      localDate: selectedDate,
    };
    console.log('Sending water data:', waterData); // Log the data being sent

    try {
      const response = await dispatch(addWater(waterData)).unwrap();
      // console.log('Water added successfully:', response);
      toast.success(`Water added successfully:${response} `);
      setIsModalsOpen(false); // Close the modal on success
    } catch (error) {
      // console.error('Error adding water:', error);
      toast.error(`Error adding water: ${error}`);
    }
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
        onAddWater={handleAddWater}
      />
    </>
  );
};

export default AddWaterBtn;
