import UserPanel from '../UserPanel/UserPanel.jsx';
import DailyInfo from '../DailyInfo/DailyInfo.jsx';
// import MonthInfo from '../MonthInfo/MonthInfo.jsx';
import MonthInfoX from '../MonthInfoX/MonthInfoX.jsx';

import css from './WaterDetailedInfo.module.css';
const WaterDetailedInfo = ({
  waterItems,
  addWaterItem,
    setSelectedDate, selectedDate
}) => {
  return (
    <section className={css.section}>
      <UserPanel />
      <DailyInfo
        addWaterItem={addWaterItem}
        waterItems={waterItems}
        selectedDate={selectedDate}
      />
      <MonthInfoX setSelectedDate={setSelectedDate} />
      {/* <MonthInfo /> */}
    </section>
  );
};

export default WaterDetailedInfo;
