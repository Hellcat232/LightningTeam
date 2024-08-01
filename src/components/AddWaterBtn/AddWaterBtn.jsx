import { useState } from "react";
import { useDispatch } from "react-redux";
import css from "./AddWaterBtn.module.css";
import spriteHref from "../../images/icons_sprite_dev.svg";
import WaterModal from "../WaterModalX/WaterModal.jsx";
import { addWater } from "../../redux/water/operations.js";
import toast from "react-hot-toast";
import { useMonthQuery } from "../../hooks/useMonthQuery.js";

const AddWaterBtn = ({ className, selectedDate }) => {
  const [isModalOpen, setIsModalsOpen] = useState(false);
  const dispatch = useDispatch();

  const { dispatchDate } = useMonthQuery(selectedDate);

  const toggleModal = () => {
    setIsModalsOpen((prev) => !prev);
  };

  const handleAddWater = async (amount, time) => {
    if (!selectedDate) {
      toast.error("Selected date is undefined");
      return;
    }

    const waterData = {
      waterValue: amount,
      localTime: time,
      localDate: selectedDate,
    };

    try {
      await dispatch(addWater(waterData));
      dispatchDate(selectedDate);
      toast.success(`Water added successfully`);
      setIsModalsOpen(false);
    } catch (error) {
      toast.error(`Error adding water: ${error}`);
    }
  };

  return (
      <>
        <button
            type="button"
            onClick={toggleModal}
            className={`${css.button} ${
                className === "waterDailyBtn" ? css.waterDailyBtn : css.waterMainBtn
            }`}
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
