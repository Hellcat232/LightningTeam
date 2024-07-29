import css from './ChooseDate.module.css';
import { useMemo } from 'react';

const ChooseDate = ({ selectedDate }) => {
  console.log(selectedDate)
  const formattedDate = useMemo(() => {
    const today = new Date();
    const [day, month, year] = selectedDate.split('.');
    const dateObject = new Date(year, month -1 , day);
    const isToday = dateObject.toDateString() === today.toDateString();

    if (isToday) {
      return 'Today';
    }

    return `${day}.${month}`;
  }, [selectedDate]);

  return <h2 className={css.header}>{formattedDate}</h2>;
};

export default ChooseDate;
