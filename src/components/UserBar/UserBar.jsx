import css from "./UserBar.module.css";
import spriteHref from "../../images/icons_sprite_dev.svg";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors.js";
import avatarPlaceholder from "../../images/NoAvatar.jpg";

const UserBar = ({ togglePopover, isPopoverOpen }) => {
  const userName = useSelector(selectUser);
  // console.log(userName);

  const displayName = userName?.name || userName?.email || "Guest";
  const userPhoto = userName?.avatar || avatarPlaceholder;

  return (
    <button className={css.button} type="button" onClick={togglePopover}>
      {displayName}
      <img src={userPhoto} loading="lazy" className={css.userImg} alt="User" />
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
