import { useState } from "react";
import css from "./MonthInfo.module.css";
// import Calendar from "../Calendar/Calendar";
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

  const [switchMounth, setSwitchMounth] = useState(
    mounthsArray[new Date().getMonth()]
  );

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
      {/* <Calendar switchMounth={switchMounth} /> */}
    </>
  );
};

export default MonthInfo;
