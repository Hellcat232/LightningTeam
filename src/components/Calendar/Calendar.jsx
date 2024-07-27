import CalendarItem from "../CalendarItem/CalendarItem";
import css from "./Calendar.module.css";

const Calendar = ({ monthWaterArray }) => {
  return (
    <ul className={css.ul}>
      {monthWaterArray.map((item) => {
        return (
          <li className={css.li} key={item.id}>
            <CalendarItem item={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default Calendar;
