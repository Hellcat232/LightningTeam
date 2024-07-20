import React, { useState } from 'react';
import WaterItem from '../WaterItem/WaterItem';
import AddWaterBtn from '../AddWaterBtnX/AddWaterBtn';
import styles from './WaterList.module.css';


const WaterList = () => {
  const [waterItems, setWaterItems] = useState([]);

  const addWaterItem = (amount, time) => {
    setWaterItems([...waterItems, { amount, time }]);
  };

  return (
    <div className={styles.waterList}>
      <div className={styles['cont-head']}>
        <h1 className={styles['title-txt']}>Today</h1>
        <AddWaterBtn onAddWater={addWaterItem} />
      </div>
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
    </div>
  );
};

export default WaterList;
