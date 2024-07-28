import { useEffect } from 'react';
import css from './MonthInfoX.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMonthWaterFrontConteroller } from '../../redux/water/operations.js';
import useCalendar from '../../hooks/getCalendar.js';
import { selectFullMonthWaterX } from '../../redux/water/selectors.js';
import { calculateWaterProgress } from '../../js/calculateWaterProgress.js';
import { selectUser } from '../../redux/auth/selectors.js';
import icons from "../../images/symbol-icons.svg";

const MonthInfoX = ({ setSelectedDate }) => {
  const dispatch = useDispatch();
  const monthWaterRecord = useSelector(selectFullMonthWaterX);
  console.log(monthWaterRecord);
  const userSelector = useSelector(selectUser);

  const { currentDate, renderDays, handlePrevMonth, handleNextMonth } =
    useCalendar(monthWaterRecord);

  useEffect(() => {
    const dateParam = `${new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate().toString().padStart(2, '0')}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear()}`;
    console.log('Formatted dateParam:', dateParam);
    dispatch(getMonthWaterFrontConteroller(dateParam));
  }, [dispatch, currentDate]);

  const handleDayClick = day => {
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const dayString = day.toString().padStart(2, '0');
    const dateKey = `${dayString}.${month}.${currentDate.getFullYear()}`;
    setSelectedDate(dateKey);
  };

  return (
    <div className={css.calendar}>
      <div className={css.calendarHeader}>
        <h2>Month</h2>
        <div className={css.calendarHeaderControl}>
          {/* <button onClick={handlePrevMonth}>pref</button> */}
          <svg >
            <use href={`${icons}#icon-left`} >
            </use>
          </svg>
          <h2>
            {currentDate.toLocaleString('default', { month: 'long' })}{' '}
            {currentDate.getFullYear()}
          </h2>
          {/* <button onClick={handleNextMonth}>Next</button> */}
          <svg >
            <use href={`${icons}#icon-right`} >
            </use>
          </svg>
        </div>
      </div>
      <div className={css.calendarBody}>
        {renderDays().map(({ day, data }, index) => {
          return (
            <div key={index} className={css.day}>
              {day && (
                <button
                  className={
                    data ? `${css.btnWithData} ${css.dayButton}` : css.dayButton
                  }
                  onClick={() => handleDayClick(day)}
                >
                  {day}
                </button>
              )}
              <div className={css.dayInfo}>
                <p>
                  {data
                    ? calculateWaterProgress(
                        data.records,
                        userSelector.waterRate
                      )
                    : 0}
                  %
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
