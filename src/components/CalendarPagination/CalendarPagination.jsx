import css from "./CalendarPagination.module.css";
import sprite from "../../images/icons_sprite_dev.svg";

const CalendarPagination = ({
  switchMounth,
  setSwitchMounth,
  mounthsArray,
}) => {
  const iconLeftPath = `${sprite}#icon-arrow_left`;
  const iconRightPath = `${sprite}#icon-arrow_right`;

  const handleClickBack = () => {
    if (switchMounth !== "January") {
      setSwitchMounth(
        mounthsArray[
          mounthsArray.findIndex((elem) => elem === switchMounth) - 1
        ]
      );
    }
  };

  const handleClickForward = () => {
    if (switchMounth != mounthsArray[new Date().getMonth()]) {
      setSwitchMounth(
        mounthsArray[
          mounthsArray.findIndex((elem) => elem === switchMounth) + 1
        ]
      );
    }
  };

  return (
    <div className={css.gendiv}>
      <div className={css.btndiv}>
        <button onClick={handleClickBack} className={css.btn}>
          <svg className={css.icon} width="18" height="18">
            <use href={iconLeftPath}></use>
          </svg>
        </button>
        <p className={css.p}>
          {switchMounth}, {"2024"}
        </p>
        <button onClick={handleClickForward} className={css.btn}>
          <svg className={css.icon} width="18" height="18">
            <use href={iconRightPath}></use>
          </svg>
        </button>
      </div>
      {/* <button>addButton</button> */}
    </div>
  );
};

export default CalendarPagination;
