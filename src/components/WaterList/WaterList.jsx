import WaterItem from '../WaterItem/WaterItem';
import styles from './WaterList.module.css';
import { useSelector } from 'react-redux';
import { selectFullDayWater } from '../../redux/water/selectors.js';

const WaterList = () => {
  const dailyWaterDataArray = useSelector(selectFullDayWater);
  console.log(dailyWaterDataArray.waterRecord);

  return (
    <div className={styles.waterItemsContainer}>
      <ul className={styles.waterItems}>
        {dailyWaterDataArray.waterRecord?.length === 0 ? (
          <li className={styles.emptyItem}>No water added</li>
        ) : (
          dailyWaterDataArray.waterRecord?.map(item => (
            <li className={styles.item} key={item._id}>
              <WaterItem amount={item.waterValue} time={item.localTime} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default WaterList;
{
  /*<AddWaterBtn onAddWater={addWaterItem} />*/
}
