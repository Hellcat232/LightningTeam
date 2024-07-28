import { useDispatch } from "react-redux";
import css from "./CalendarItem.module.css";
import { fetchFullDay } from "../../redux/water/operations";

const CalendarItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(fetchFullDay());
  };
  return (
    <>
      <button onClick={handleClick} className={css.btn}>
        {item.localDate.slice(-10, -8)}
      </button>
      <p className={css.p}>{item.feasibility}%</p>
    </>
  );
};

export default CalendarItem;
