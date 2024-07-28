import UserPanel from '../UserPanel/UserPanel.jsx';
import DailyInfo from '../DailyInfo/DailyInfo.jsx';
// import MonthInfo from '../MonthInfo/MonthInfo.jsx';
import MonthInfoX from '../MonthInfoX/MonthInfoX.jsx';

import css from './WaterDetailedInfo.module.css';
import { useState } from 'react';

const WaterDetailedInfo = ({ waterItems, addWaterItem }) => {
  const dateParam = `${new Date().getDate().toString().padStart(2, '0')}.${(new Date().getMonth() + 1).toString().padStart(2, '0')}.${new Date().getFullYear()}`;
  const [selectedDate, setSelectedDate] = useState(dateParam);
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
