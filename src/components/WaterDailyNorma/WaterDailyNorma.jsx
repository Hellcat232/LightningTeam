import css from './WaterDailyNorma.module.css';

const WaterDailyNorma = () => {
  //func will receive liters norma from parent component
  const litersNorma = '1.5 L';
  return (
    <div className={css.container}>
      <p className={css.liters}>{litersNorma}</p>
      <p className={css.normaText}>My daily norma</p>
    </div>
  );
};

export default WaterDailyNorma;
