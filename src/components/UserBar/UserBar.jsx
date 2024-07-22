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
      {/*<img*/}
      {/*  className={css.userImg}*/}
      {/*  src="https://thumbs.dreamstime.com/b/people-person-fun-joy-funny-facial-expression-concept-close-up-phoyo-portrait-charming-glad-gorgeous-nice-cute-lovely-lady-272795823.jpg"*/}
      {/*  alt="userPhoto"*/}
      {/*/>*/}
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
