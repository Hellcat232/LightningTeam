import { useEffect, useState } from "react";
import CalendarItem from "../CalendarItem/CalendarItem";
import css from "./Calendar.module.css";

const Calendar = ({ switchMounth }) => {
  const [mounthWaterArray, setMounthWaterArray] = useState();


  setMounthWaterArray(switchMounth);   //заглушка

  useEffect(() => {
    // запрос на бекенд и получение mounthWaterArray за нужный месяц по датам и по воде
    
  }, []);

  return (
    <ul className={css.ul}>
      {mounthWaterArray.map((item) => {
        return (
          <li className={css.li} key={item.id}>
            <CalendarItem
              date={mounthWaterArray.date}
              waterPart={mounthWaterArray.waterPart}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Calendar;
