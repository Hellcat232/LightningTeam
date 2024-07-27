import { useState } from 'react';

const useCalendar = waterData => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const daysArray = Array.from({ length: daysInMonth }, (_, index) => {
      const day = index + 1;
      const dateKey = `${month + 1}/${day}/${year}`;
      const dayData = waterData.find(record => record.localDate === dateKey);
      return { day, data: dayData };
    });

    return daysArray;
  };

  const handlePrevMonth = () => {
    const prevMonthDate = new Date(
      currentDate.setMonth(currentDate.getMonth() - 1)
    );
    setCurrentDate(new Date(prevMonthDate));
  };

  const handleNextMonth = () => {
    const nextMonthDate = new Date(
      currentDate.setMonth(currentDate.getMonth() + 1)
    );
    setCurrentDate(new Date(nextMonthDate));
  };

  return {
    currentDate,
    renderDays,
    handlePrevMonth,
    handleNextMonth,
  };
};

export default useCalendar;
