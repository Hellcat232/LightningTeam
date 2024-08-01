import { useEffect, useState } from "react";
import css from "./MonthInfoX.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchFullDay, getMonthWaterFrontConteroller } from "../../redux/water/operations.js";
import useCalendar from "../../hooks/getCalendar.js";
import { selectFullMonthWaterX } from "../../redux/water/selectors.js";
import icons from "../../images/symbol-icons.svg";
import { useMonthQuery } from "../../hooks/useMonthQuery.js";

const isFutureDay = (day, month, year) => {
  const currentDate = new Date();
  const providedDate = new Date(year, month - 1, day);
  return providedDate > currentDate;
};

const MonthInfoX = ({ setSelectedDate, selectedDate }) => {
  const dispatch = useDispatch();
  const monthWaterRecord = useSelector(selectFullMonthWaterX);
  const { currentDate, setCurrentDate, renderDays, handlePrevMonth, handleNextMonth } = useCalendar(monthWaterRecord);
  const [initialRender, setInitialRender] = useState(true);

  // console.log(currentDate)

  const { dispatchDate } = useMonthQuery(currentDate);

  useEffect(() => {
    if (initialRender) {
      dispatchDate();
      setInitialRender(false);
    }
  }, [initialRender]);

  const handleMonthChange = (newDate) => {
    setCurrentDate(newDate);
    dispatchDate(newDate);
  };

  const handleDayClick = (day) => {
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const dayString = day.toString().padStart(2, "0");
    const dateKey = `${dayString}.${month}.${currentDate.getFullYear()}`;
    dispatch(fetchFullDay(dateKey));
    setSelectedDate(dateKey);
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  };

  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();

  return (
      <div className={css.calendar}>
        <div className={css.calendarHeader}>
          <h2>Month</h2>
          <div className={css.calendarHeaderControl}>
            <svg onClick={() => handleMonthChange(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}>
              <use href={`${icons}#icon-left`}></use>
            </svg>
            <h2 className={css.calendarMonth}>
              {currentDate.toLocaleString("en-US", { month: "long" })} {currentDate.getFullYear()}
            </h2>
            <svg onClick={() => handleMonthChange(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}>
              <use href={`${icons}#icon-right`}></use>
            </svg>
          </div>
        </div>
        <div className={css.calendarBody}>
          {renderDays().map(({ day, data }, index) => {
            const isToday = day === currentDay && (currentDate.getMonth() + 1) === currentMonth;
            const isDisabled = isFutureDay(day, currentDate.getMonth() + 1, currentDate.getFullYear());
            return (
                <div key={index} className={css.day}>
                  {day && (
                      <button
                          disabled={isDisabled}
                          className={`${css.dayButton} ${isToday ? css.todayButton : ''} ${data?.feasibility >= 100 && css.btnWithData} ${isDisabled && css.disabledBtn}`}
                          onClick={() => handleDayClick(day)}
                          data-feasibility={data ? data.feasibility : undefined}
                      >
                        {day}
                      </button>
                  )}
                  <div className={css.dayInfo}>
                    <p>
                      {data ? data.feasibility : 0}%
                    </p>
                  </div>
                </div>
            );
          })}
        </div>
      </div>
  );
};

export default MonthInfoX;
