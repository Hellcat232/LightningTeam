import ChooseDate from '../ChooseDate/ChooseDate.jsx';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn.jsx';
import WaterList from '../WaterList/WaterList.jsx';
import css from './DailyInfo.module.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectAccessToken } from '../../redux/auth/selectors.js';

const DailyInfo = ({ waterItems, addWaterItem, selectedDate }) => {
  const accessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OWE3NzRkMDYzYjM2ZjJhMjNmODIyYyIsImlhdCI6MTcyMTY3NDY0MiwiZXhwIjoxNzIxNjc4MjQyfQ.KuwBtIgkmImCxh0MTFpiT70dxRL3r2K_ZUgQi7MlbpA';
  const response = axios
    .get('https://lightningbackend.onrender.com/water/fullday', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(data => console.log(data));

  const fullday = state.auth.accessToken

  return (
    <section className={css.section}>
      <div className={css.container}>
        <ChooseDate selectedDate={selectedDate} />
        <AddWaterBtn className="waterDailyBtn" onAddWater={addWaterItem} />
      </div>
      <WaterList waterItems={waterItems} />
    </section>
  );
};

export default DailyInfo;
