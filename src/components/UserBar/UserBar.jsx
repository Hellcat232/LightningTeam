import css from './UserBar.module.css';
import spriteHref from '../../images/icons_sprite_dev.svg';

const UserBar = ({ userData, togglePopover, isPopoverOpen }) => {
  return (
    <button
      className={css.button}
      type="button"
      onClick={() => togglePopover(event)}
    >
      {userData}
      <img
        className={css.userImg}
        src="https://thumbs.dreamstime.com/b/people-person-fun-joy-funny-facial-expression-concept-close-up-phoyo-portrait-charming-glad-gorgeous-nice-cute-lovely-lady-272795823.jpg"
        alt="userPhoto"
      />
      {isPopoverOpen ? (
        <svg className={css.icon}>
          <use href={`${spriteHref}#icon-hide_burger`}></use>
        </svg>
      ) : (
        <svg className={css.icon}>
          <use href={`${spriteHref}#icon-show_burger`}></use>
        </svg>
      )}
    </button>
  );
};

export default UserBar;
