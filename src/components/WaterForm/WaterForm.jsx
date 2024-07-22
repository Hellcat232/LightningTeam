import { useState } from "react";
import css from "./WaterForm.module.css";
// import sprite from "../../images/icons_sprite_dev.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    time: yup.string().required(),
    qtyWater: yup.number().positive().integer().required(),
  })
  .required();

const WaterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
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

  const onSubmit = () => {
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
      <form
        className={css.form}
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <label className={css.labelTime}>
          Recording time:
          <input
            {...register("time")}
            className={css.inputTime}
            type="time"
            name="time"
            value={inputTime}
            onChange={handleChangeTime}
          />
          <p>{errors.time?.message}</p>
        </label>
        <label className={css.labelWAter}>
          Enter the value of the water used:
          <input
            {...register("qtyWater")}
            className={css.inputWAter}
            type="text"
            name="qtyWater"
            value={volume}
            onChange={handleChangeVolume}
          />
          <p>{errors.qtyWater?.message}</p>
        </label>
        <button className={css.btnsubmit} type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default WaterForm;
