import css from './AddWaterBtn.module.css';
import spriteHref from '../../images/icons_sprite_dev.svg';

const AddWaterBtn = ({ openModal, className }) => {
  return (
    // <div className={css.container}>
    //   {/*  add icon instead of para*/}
    //   <p>+</p>
    //   <button
    //     type="button"
    //     onClick={() => openModal('waterModal')}
    //     className={css.button}
    //   >
    //     Add water
    //   </button>
    //   {/*TODO: Write modal window for after add water Click    */}
    // </div>
    <button
      type="button"
      onClick={() => openModal('waterModal')}
      className={`${css.button} ${className === 'waterDailyBtn' ? css.waterDailyBtn : css.waterMainBtn}`}
    >
      <svg className={css.icon}>
        <use href={`${spriteHref}#icon-plus_water`}></use>
      </svg>
      Add water
    </button>
  );
};

export default AddWaterBtn;
