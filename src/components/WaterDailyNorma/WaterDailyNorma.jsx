import css from './WaterDailyNorma.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors.js';

const WaterDailyNorma = () => {
  //func will receive liters norma from parent component
  const dailyNorm = useSelector(selectUser);
  return (
    <div className={css.container}>
      <p className={css.liters}>{dailyNorm.waterRate}L</p>
      <p className={css.normaText}>My daily norma</p>
    </div>
  );
};

export default WaterDailyNorma;
