import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './WaterProgressBar.module.css';
import { selectFullDayWater } from '../../redux/water/selectors.js';
import { fetchFullDay } from '../../redux/water/operations.js';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';

const WaterProgressBar = () => {
  const dispatch = useDispatch();
  const waterProgressSelector = useSelector(selectFullDayWater);
  const waterProgress = waterProgressSelector.waterRate.feasibility;

  useEffect(() => {
    dispatch(fetchFullDay());
  }, [dispatch]);

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
