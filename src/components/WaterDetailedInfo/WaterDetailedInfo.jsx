import UserPanel from '../UserPanel/UserPanel.jsx';
import DailyInfo from '../DailyInfo/DailyInfo.jsx';
import MonthInfo from '../MonthInfo/MonthInfo.jsx';

import css from './WaterDetailedInfo.module.css';
import { useState } from 'react';

const WaterDetailedInfo = ({ waterItems, addWaterItem }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <section className={css.section}>
      <UserPanel />
      <DailyInfo
        addWaterItem={addWaterItem}
        waterItems={waterItems}
        selectedDate={selectedDate}
      />
      {/*<MonthInfoX />*/}
      <MonthInfo />
    </section>
  );
};

export default WaterDetailedInfo;
