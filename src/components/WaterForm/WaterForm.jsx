import css from "./WaterForm.module.css";
const WaterForm = () => {
  const handleSubmit = () => {};

  return (
    <div className={css.gendiv}>
      <button className={css.btnSign}>-</button>
      <p>{}</p>
      <button className={css.btnSign}>+</button>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.labelTime}>
          Recording time:
          <input type="time" name="time" />
        </label>
        <label className={css.labelWAter}>
          Enter the value of the water used:
          <input type="number" name="qtyWater" />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default WaterForm;
