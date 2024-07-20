import UserPanel from '../UserPanel/UserPanel.jsx';
import DailyInfo from '../DailyInfo/DailyInfo.jsx';
import MonthInfo from '../MonthInfo/MonthInfo.jsx';

import css from './WaterDetailedInfo.module.css';

const WaterDetailedInfo = ({ openModal }) => {
  //TODO: component will receive user data with
  const userName = 'Roger';
  return (
    <section className={css.section}>
      <UserPanel openModal={openModal} userData={userName} />
      <DailyInfo openModal={openModal} />
      <MonthInfo />
    </section>
  );
};

export default WaterDetailedInfo;
