import ChooseDate from '../ChooseDate/ChooseDate.jsx';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn.jsx';
import WaterList from '../WaterList/WaterList.jsx';
import css from './DailyInfo.module.css';

const DailyInfo = ({ openModal }) => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <ChooseDate />
        <AddWaterBtn openModal={openModal} className="waterDailyBtn" />
      </div>
      <WaterList />
    </section>
  );
};

export default DailyInfo;
