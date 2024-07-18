import css from './AddWaterBtn.module.css';

const AddWaterBtn = () => {
  return (
    <div className={css.container}>
      {/*  add icon instead of para*/}
      <p>+</p>
      <button className={css.button}>Add water</button>
      {/*TODO: Write modal window for after add water Click    */}
    </div>
  );
};

export default AddWaterBtn;
