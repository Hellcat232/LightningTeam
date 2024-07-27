import { useDispatch } from "react-redux";
import css from "./CalendarItem.module.css";
import { fetchFullDay } from "../../redux/water/operations";

const CalendarItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    // запрос на бекенд

    dispatch(fetchFullDay());

  };
  return (
    <>
      <button onClick={handleClick} className={css.btn}>
        {/* пока пишу всю дату, - когда решится какой будет формат даты, то сделаю просто дату */}
        {item.localDate}
      </button>
      <p className={css.p}>{item.feasibility}%</p>
    </>
  );
};

export default CalendarItem;
