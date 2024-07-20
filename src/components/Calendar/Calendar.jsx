import CalendarItem from "../CalendarItem/CalendarItem";
import css from "./Calendar.module.css";

const Calendar = ({ mounthWaterArray }) => {
  return (
    <ul className={css.ul}>
      {mounthWaterArray.map((item) => {
        return (
          <li className={css.li} key={item.id}>
            <CalendarItem date={item.date} waterPart={item.waterPart} />
          </li>
        );
      })}
    </ul>
  );
};

export default Calendar;
