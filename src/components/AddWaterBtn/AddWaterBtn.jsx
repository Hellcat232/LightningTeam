import css from './AddWaterBtn.module.css';

const AddWaterBtn = ({ openModal }) => {
  return (
    <div className={css.container}>
      {/*  add icon instead of para*/}
      <p>+</p>
      <button
        type="button"
        onClick={() => openModal('waterModal')}
        className={css.button}
      >
        Add water
      </button>
      {/*TODO: Write modal window for after add water Click    */}
    </div>
  );
};

export default AddWaterBtn;
