import WaterItem from '../WaterItem/WaterItem';
import styles from './WaterList.module.css';

const WaterList = ({ waterItems }) => {
  return (
    <div className={styles.waterItemsContainer}>
      <ul className={styles.waterItems}>
        {waterItems.length === 0 ? (
          <li className={styles.emptyItem}>No water added</li>
        ) : (
          waterItems.map((item, index) => (
            <li className={styles.item} key={index}>
              <WaterItem amount={item.amount} time={item.time} />
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
