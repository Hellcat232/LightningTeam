import WaterItem from "../WaterItem/WaterItem";
import styles from "./WaterList.module.css";
import { useSelector } from "react-redux";
import { selectFullDayWater } from "../../redux/water/selectors.js";

const WaterList = () => {
  const dailyWaterDataArray = useSelector(selectFullDayWater);
  console.log(dailyWaterDataArray);

  const handleDelete = (waterId) => {
    const id = waterId;

    return id;
  };

  const handleEdit = (waterId) => {
    const id = waterId;

    return id;
  };

  return (
    <div className={styles.waterItemsContainer}>
      <ul className={styles.waterItems}>
        {dailyWaterDataArray.waterRecord?.length === 0 ? (
          <li className={styles.emptyItem}>No water added</li>
        ) : (
          dailyWaterDataArray.waterRecord?.map((item) => (
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
{
  /*<AddWaterBtn onAddWater={addWaterItem} />*/
}
