import css from './UserBar.module.css';
import spriteHref from '../../images/icons_sprite_dev.svg';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors.js';
import avatarPlaceholder from '../../images/NoAvatar.png';

const UserBar = ({ togglePopover, isPopoverOpen }) => {
  const userName = useSelector(selectUser);
  return (
    <button
      className={css.button}
      type="button"
      onClick={() => togglePopover(event)}
    >
      {userName ? userName.name : userName.email}
      {userName.photo ? (
        <img src={userName.photo} className={css.userImg} alt="Photo of User" />
      ) : (
        <img src={avatarPlaceholder} className={css.userImg} />
      )}
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
