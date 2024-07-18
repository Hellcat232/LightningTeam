import ProgressBar from '../ProgressBar/ProgressBar.jsx';
import css from './WaterProgressBar.module.css';

const WaterProgressBar = () => {
  // TODO: get the variable value from back-end;
  const waterPercentage = '70';

  return (
    <div className={css.container}>
      <h3 className={css.header}>Today</h3>
      <ProgressBar percentage={waterPercentage} />
      <ul className={css.progressPercentList}>
        <li className={css.progressPercentItem}>0%</li>
        <li className={css.progressPercentItem}>50%</li>
        <li className={css.progressPercentItem}>100%</li>
      </ul>
    </div>
  );
};

export default WaterProgressBar;
