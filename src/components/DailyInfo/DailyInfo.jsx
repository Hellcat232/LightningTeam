import ChooseDate from '../ChooseDate/ChooseDate.jsx';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn.jsx';
import WaterList from '../WaterList/WaterList.jsx';
import css from './DailyInfo.module.css';

const DailyInfo = ({ waterItems, addWaterItem }) => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <ChooseDate />
        <AddWaterBtn className="waterDailyBtn" onAddWater={addWaterItem} />
      </div>
      <WaterList waterItems={waterItems} />
    </section>
  );
};

export default DailyInfo;
