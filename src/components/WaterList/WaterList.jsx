import WaterItem from "../WaterItem/WaterItem";
import styles from "./WaterList.module.css";
import { useSelector } from "react-redux";
import {selectFullDayWater} from "../../redux/water/selectors.js";

const WaterList = ({selectedDate} ) => {
  const fullDay = useSelector(selectFullDayWater)

  const handleDelete = (waterId) => {
    const id = waterId;
    return id;
  };


  const handleEdit = (waterId) => {
    const id = waterId;
    return id;
  };

  return (
    <div
      className={`${styles.waterItemsContainer} ${
          fullDay.allWaterRecord.length <= 3 && styles.waterItemsContainerInvis
      }`}
    >
      <ul className={styles.waterItems}>
        {fullDay.allWaterRecord.length === 0 ? (
          <li className={styles.emptyItem}>No water added</li>
        ) : (
            fullDay.allWaterRecord.map((item) => (
            <li className={styles.item} key={item._id}>
              <WaterItem
                onDelete={handleDelete}
                onEdit={handleEdit}
                amount={item.waterValue}
                id={item._id}
                date={item.localDate}
                time={item.localTime}
                selectedDate={selectedDate}
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default WaterList;
