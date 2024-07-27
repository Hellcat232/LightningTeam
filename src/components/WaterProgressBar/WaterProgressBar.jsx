import ProgressBar from "../ProgressBar/ProgressBar.jsx";
import css from "./WaterProgressBar.module.css";
import { calculateWaterProgress } from "../../js/calculateWaterProgress.js";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors.js";
import { selectFullDayWater } from "../../redux/water/selectors.js";

const WaterProgressBar = () => {
  // TODO: get the variable value from back-end;
  const waterPercentage = "70";
  const userSelector = useSelector(selectUser);
  console.log("USERSELECTOR", userSelector);
  const selectWaterData = useSelector(selectFullDayWater);
  console.log(selectWaterData, userSelector);
  const waterProgress = calculateWaterProgress(
    selectWaterData.waterRecord,
    userSelector.waterRate
  );

  return (
    <div className={css.container}>
      <h3 className={css.header}>Today</h3>
      <ProgressBar percentage={waterProgress} />
      <ul className={css.progressPercentList}>
        <li className={css.progressPercentItem}>0%</li>
        <li className={css.progressPercentItem}>50%</li>
        <li className={css.progressPercentItem}>100%</li>
      </ul>
    </div>
  );
};

export default WaterProgressBar;
