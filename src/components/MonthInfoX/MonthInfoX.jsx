// src/Calendar.js
import { useEffect, useState } from 'react';
import css from './MonthInfoX.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMonthWaterFrontConteroller } from '../../redux/water/operations.js';
import useCalendar from '../../hooks/getCalendar.js';
import { selectFullMonthWaterX } from '../../redux/water/selectors.js';
import { calculateWaterProgress } from '../../js/calculateWaterProgress.js';
import { selectUser } from '../../redux/auth/selectors.js';

const MonthInfoX = () => {
  const dispatch = useDispatch();
  const monthWaterRecord = useSelector(selectFullMonthWaterX);
  const userSelector = useSelector(selectUser);

  useEffect(() => {
    const dateParam = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
    dispatch(getMonthWaterFrontConteroller(dateParam));
  }, [dispatch]);

  const { currentDate, renderDays, handlePrevMonth, handleNextMonth } =
    useCalendar(monthWaterRecord);

  const handleDayClick = day => {
    const dateKey = `${currentDate.getMonth() + 1}/${day}/${currentDate.getFullYear()}`;
    const dayData = monthWaterRecord.find(
      record => record.localDate === dateKey
    );
    alert(
      dayData ? `Water drunk: ${dayData.dailyTotal}` : `No data for day ${day}`
    );
  };

  return (
    <div className={css.calendar}>
      <div className={css.calendarHeader}>
        <h2>Month</h2>
        <div className={css.calendarHeaderControl}>
          <button onClick={handlePrevMonth}>Prev</button>
          <h2>
            {currentDate.toLocaleString('default', { month: 'long' })}{' '}
            {currentDate.getFullYear()}
          </h2>
          <button onClick={handleNextMonth}>Next</button>
        </div>
      </div>
      <div className={css.calendarBody}>
        {renderDays().map(({ day, data }, index) => (
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
                  ? calculateWaterProgress(data.records, userSelector.waterRate)
                  : 0}
                %
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthInfoX;
