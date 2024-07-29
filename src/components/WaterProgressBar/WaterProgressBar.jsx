import ProgressBar from '../ProgressBar/ProgressBar.jsx';
import css from './WaterProgressBar.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors.js';
import { selectFullMonthWaterX } from '../../redux/water/selectors.js';
import { calculateWaterProgress } from '../../js/calculateWaterProgress.js';

const WaterProgressBar = ({ selectedDate }) => {
  const dailyWaterDataArray = useSelector(selectFullMonthWaterX);
  console.log(dailyWaterDataArray);
  const filteredArray = dailyWaterDataArray.filter(
    date => date.localDate === selectedDate
  );
  const recordsArray = filteredArray.flatMap(item => item.records);
  const user = useSelector(selectUser);
  const waterProgress = calculateWaterProgress(recordsArray, user.waterRate);

  return (
    <div className={css.container}>
      <h3 className={css.header}>Today</h3>
      <ProgressBar percentage={waterProgress} />
      <ul className={css.progressPercentList}>
        <li className={css.progressPercentItem}>0%</li>
        <li className={css.progressPercentItem}>50%</li>
        <li className={css.progressPercentItem}>100%</li>
      </ul>
    </div>
  );
};

export default WaterProgressBar;
