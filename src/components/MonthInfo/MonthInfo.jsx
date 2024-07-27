import { useEffect, useState } from "react";
import css from "./MonthInfo.module.css";
import Calendar from "../Calendar/Calendar";
import CalendarPagination from "../CalendarPagination/CalendarPagination";
import { useDispatch, useSelector } from "react-redux";
import { getMonthWaterFrontConteroller } from "../../redux/water/operations";
import { selectFullMonthWater } from "../../redux/water/selectors";

const MonthInfo = () => {
  const monthWaterArray = useSelector(selectFullMonthWater);
  // console.log(array);
  const dispatch = useDispatch();

  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [switchMounth, setSwitchMounth] = useState(
    monthsArray[new Date().getMonth()]
  );

  useEffect(() => {
    // запрос на бекенд и получение mounthWaterArray за нужный месяц по датам и по воде
    dispatch(getMonthWaterFrontConteroller());
  }, [switchMounth]);

  return (
    <>
      <div className={css.div}>
        <h2 className={css.h}>Month</h2>
        <CalendarPagination
          switchMounth={switchMounth}
          setSwitchMounth={setSwitchMounth}
          mounthsArray={monthsArray}
        />
      </div>
      <Calendar monthWaterArray={monthWaterArray} />
    </>
  );
};

export default MonthInfo;
