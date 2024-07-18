import { useDispatch } from "react-redux";
import css from "./CalendarItem.module.css";

const CalendarItem = ({date, waterPart}) => {
	const dispatch = useDispatch();
  const handleClick = () => {
    // запрос на бекенд

    dispatch();
  };
  return (
    <div className={css.div}>
      <button onClick={handleClick} className={css.btn}>
        {date}
      </button>
      <p>{waterPart}</p>
    </div>
  );
};

export default CalendarItem;
