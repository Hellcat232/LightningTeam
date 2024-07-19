import css from "./CalendarPagination.module.css";

const CalendarPagination = ({
  switchMounth,
  setSwitchMounth,
  mounthsArray,
}) => {

  const handleClickBack = () => {
    if (switchMounth !== "January") {
    setSwitchMounth(mounthsArray[new Date().getMonth() - 1]);
  }
  };

  const handleClickForward = () => {
    if (switchMounth != mounthsArray[new Date().getMonth()]) {
      setSwitchMounth(mounthsArray[new Date().getMonth() + 1]);
    }
  };

  return (
    <div className={css.gendiv}>
      <div className={css.btndiv}>
        <button onClick={handleClickBack} className={css.btn}>
          {"<"}
        </button>
        <p className={css.p}>
          {switchMounth}, {"2024"}
        </p>
        <button onClick={handleClickForward} className={css.btn}>
          {">"}
        </button>
      </div>
      <button className={css.addbtn}>addButton</button>
    </div>
  );
};

export default CalendarPagination;
