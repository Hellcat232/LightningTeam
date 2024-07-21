import { useState } from "react";
import css from "./WaterForm.module.css";
// import { useForm } from "react-hook-form"
// import sprite from "../../images/icons_sprite_dev.svg";

const WaterForm = () => {
  // const iconMinus = `${sprite}#icon-minus_water`;
  // const iconPlus = `${sprite}#icon-plus_water`;

  const [volume, setVolume] = useState(250);

  const [inputTime, setInputTime] = useState(
    `${String(new Date().getHours()).padStart(2, "0")}:${String(
      new Date().getMinutes()
    ).padStart(2, "0")}`
  );

  const handleClickMinus = () => {
    if (volume > 0) {
      setVolume(Number(volume) - 50);
    }
  };
  const handleClickPlus = () => {
    if (volume < 5000) {
      setVolume(Number(volume) + 50);
    }
  };

  const handleChangeTime = (event) => {
    setInputTime(event.target.value);
  };

  const handleChangeVolume = (event) => {
    setVolume(event.target.value);
  };

  const handleSubmit = () => {
    //dispatch or post or patch
  };

  return (
    <div className={css.gendiv}>
      <div className={css.btndiv}>
        <button onClick={handleClickMinus} className={css.btnSign}>
          {/* <svg className={css.icon} width="18" height="18">
            <use href={iconMinus}></use>
          </svg> */}
          -
        </button>
        <p>{volume}ml</p>
        <button onClick={handleClickPlus} className={css.btnSign}>
          {/* <svg className={css.icon} width="18" height="18">
            <use href={iconPlus}></use>
          </svg> */}
          +
        </button>
      </div>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.labelTime}>
          Recording time:
          <input
            className={css.inputTime}
            type="time"
            name="time"
            value={inputTime}
            onChange={handleChangeTime}
          />
        </label>
        <label className={css.labelWAter}>
          Enter the value of the water used:
          <input
            className={css.inputWAter}
            type="number"
            name="qtyWater"
            value={volume}
            onChange={handleChangeVolume}
          />
        </label>
        <button className={css.btnsubmit} type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default WaterForm;
