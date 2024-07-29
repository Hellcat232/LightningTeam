import ChooseDate from "../ChooseDate/ChooseDate.jsx";
import AddWaterBtn from "../AddWaterBtn/AddWaterBtn.jsx";
import WaterList from "../WaterList/WaterList.jsx";
import css from "./DailyInfo.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchFullDay } from "../../redux/water/operations.js";

const DailyInfo = ({ waterItems, addWaterItem, selectedDate }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFullDay(selectedDate));
  }, [dispatch, selectedDate]);

  return (
    <section className={css.section}>
      <div className={css.container}>
        <ChooseDate selectedDate={selectedDate} />
        <AddWaterBtn
          className="waterDailyBtn"
          onAddWater={addWaterItem}
          selectedDate={selectedDate}
        />
      </div>
      <WaterList waterItems={waterItems} selectedDate={selectedDate} />
    </section>
  );
};

export default DailyInfo;
