import UserPanel from '../UserPanel/UserPanel.jsx';
import DailyInfo from '../DailyInfo/DailyInfo.jsx';
import MonthInfo from '../MonthInfo/MonthInfo.jsx';

import css from './WaterDetailedInfo.module.css';

const WaterDetailedInfo = ({ waterItems, addWaterItem }) => {
  //TODO: component will receive user data with
  return (
    <section className={css.section}>
      <UserPanel />
      <DailyInfo addWaterItem={addWaterItem} waterItems={waterItems} />
      <MonthInfo />
    </section>
  );
};

export default WaterDetailedInfo;
