import UserPanel from '../UserPanel/UserPanel.jsx';
import DailyInfo from '../DailyInfo/DailyInfo.jsx';
// import MonthInfo from '../MonthInfo/MonthInfo.jsx';
import MonthInfoX from '../MonthInfoX/MonthInfoX.jsx';

import css from './WaterDetailedInfo.module.css';
import { useState } from 'react';

const WaterDetailedInfo = ({ waterItems, addWaterItem }) => {
  const [selectedDate, setSelectedDate] = useState('Today');
  console.log(selectedDate);

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
