import { useState } from "react";
import css from "./CalendarPagination.module.css";
import { useDispatch } from "react-redux";

const CalendarPagination = () => {
  //   let date = new Date();
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
  const [switchData, setSwitchData] =
    useState[
      {
        mounth: mounthsArray[new Date().getMonth()],
        year: new Date().getFullYear(),
      }
    ];

  const handleClickBack = () => {
    setSwitchData({
      mounth: mounthsArray[new Date().getMonth() - 1],
      year: new Date().getFullYear(),
    });
    dispatch();
  };
  const handleClickForward = () => {
    if (
      switchData.year <= new Date().getFullYear() &&
      switchData.mounth <= new Date().getMonth()
    ) {
      setSwitchData({
        mounth: mounthsArray[new Date().getMonth() + 1],
        year: new Date().getFullYear(),
      });
      dispatch();
    }
  };

  return (
    <div>
      <h2>Month</h2>
      <div>
        <button onClick={handleClickBack} className={css.btn1}>
          {"<"}
        </button>
        <p>
          {switchData.mounth}, {switchData.year}
        </p>
        <button onClick={handleClickForward} className={css.btn2}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default CalendarPagination;
