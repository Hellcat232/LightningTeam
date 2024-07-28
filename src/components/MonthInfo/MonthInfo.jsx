import { useEffect, useState } from "react";
import css from "./MonthInfo.module.css";
import Calendar from "../Calendar/Calendar";
import CalendarPagination from "../CalendarPagination/CalendarPagination";
import { useDispatch, useSelector } from "react-redux";
import { getMonthWaterFrontConteroller } from "../../redux/water/operations";
import { selectFullMonthWater } from "../../redux/water/selectors";

const MonthInfo = () => {
  const monthWaterArray = useSelector(selectFullMonthWater);

  const dispatch = useDispatch();

  const mounthsArray = [
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
    mounthsArray[new Date().getMonth()]
  );

  useEffect(() => {
    dispatch(
      getMonthWaterFrontConteroller(
        `01.${mounthsArray.findIndex((elem) => elem === switchMounth) + 1}.2024`
      )
    );
  }, [switchMounth]);

  return (
    <>
      <div className={css.div}>
        <h2 className={css.h}>Month</h2>
        <CalendarPagination
          switchMounth={switchMounth}
          setSwitchMounth={setSwitchMounth}
          mounthsArray={mounthsArray}
        />
      </div>
      <Calendar monthWaterArray={monthWaterArray} />
    </>
  );
};

export default MonthInfo;
