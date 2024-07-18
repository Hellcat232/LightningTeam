import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma.jsx';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar.jsx';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn.jsx';
import css from './WaterMainInfo.module.css';

const WaterMainInfo = () => {
  return (
    <section className={css.section}>
      <h2 className={css.sectionHeader}>AquaTrack</h2>
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn />
    </section>
  );
};

export default WaterMainInfo;
