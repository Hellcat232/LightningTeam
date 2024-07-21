import WaterForm from "../WaterForm/WaterForm";
import css from "./WaterModal.module.css";

const WaterModal = ({ bigTitle, smallTitle }) => {
  return (
    <div className={css.gendiv}>
      <div className={css.titleDiv}>
        <h2 className={css.firstH}>{bigTitle}</h2>
        <h3 className={css.secondH}>{smallTitle}</h3>
        <p className={css.p}>Amount of water:</p>
      </div>

      <WaterForm />
    </div>
  );
};

export default WaterModal;
