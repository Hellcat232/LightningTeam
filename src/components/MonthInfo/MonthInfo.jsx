import { useEffect, useState } from "react";
import css from "./MonthInfo.module.css";
import Calendar from "../Calendar/Calendar";
import CalendarPagination from "../CalendarPagination/CalendarPagination";

const MonthInfo = () => {
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
  const [mounthWaterArray, setMounthWaterArray] = useState([]);
  const [switchMounth, setSwitchMounth] = useState(
    mounthsArray[new Date().getMonth()]
  );

  useEffect(() => {
    // запрос на бекенд и получение mounthWaterArray за нужный месяц по датам и по воде

    setMounthWaterArray([
      { date: 15, waterPart: "70%", id: 1 },
      { date: 16, waterPart: "50%", id: 2 },
      { date: 17, waterPart: "70%", id: 3 },
      { date: 18, waterPart: "50%", id: 4 },
      { date: 19, waterPart: "70%", id: 5 },
      { date: 20, waterPart: "50%", id: 6 },
      { date: 21, waterPart: "70%", id: 7 },
      { date: 22, waterPart: "50%", id: 8 },
      { date: 23, waterPart: "70%", id: 9 },
      { date: 24, waterPart: "50%", id: 10 },
      { date: 25, waterPart: "70%", id: 11 },
      { date: 26, waterPart: "50%", id: 12 },
    ]);
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
      <Calendar mounthWaterArray={mounthWaterArray} />
    </>
  );
};

export default MonthInfo;
