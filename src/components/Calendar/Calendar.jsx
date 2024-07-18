import { useEffect } from "react";
import CalendarItem from "../CalendarItem/CalendarItem";
import css from "./Calendar.module.css";

const Calendar = () => {
  let items = [{ date: 17, waterPart: "70%" }]; //заглушка

  useEffect(() => {
    // запрос на бекенд и получение items по дате и воде
  }, []);

  return (
    <ul className={css.ul}>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <CalendarItem date={item.date} waterPart={item.waterPart} />
          </li>
        );
      })}
    </ul>
  );
};

export default Calendar;
