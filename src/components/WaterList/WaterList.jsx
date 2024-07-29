import WaterItem from "../WaterItem/WaterItem";
import styles from "./WaterList.module.css";
import { useSelector } from "react-redux";
import { selectFullMonthWaterX } from "../../redux/water/selectors.js";

const WaterList = ({ selectedDate }) => {
  const dailyWaterDataArray = useSelector(selectFullMonthWaterX);
  // console.log(dailyWaterDataArray);

  const filteredArray = dailyWaterDataArray.filter(
    (date) => date.localDate === selectedDate
  );

  const recordsArray = filteredArray.flatMap((item) => item.records);
  // console.log(recordsArray);

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
        recordsArray.length < 3 && styles.waterItemsContainerInvis
      }`}
    >
      <ul className={styles.waterItems}>
        {recordsArray.length === 0 ? (
          <li className={styles.emptyItem}>No water added</li>
        ) : (
          recordsArray.map((item) => (
            <li className={styles.item} key={item._id}>
              <WaterItem
                onDelete={handleDelete}
                onEdit={handleEdit}
                amount={item.waterValue}
                id={item._id}
                time={item.localTime}
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default WaterList;
