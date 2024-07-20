import css from './UserBarPopover.module.css';
import spriteHref from '../../images/icons_sprite_dev.svg';

const UserBarPopover = ({ openModal }) => {
  return (
    <div className={css.container}>
      <button
        className={`${css.button} ${css.settingsBtn}`}
        onClick={() => {
          openModal('settingsModal');
        }}
      >
        <svg className={css.icon}>
          <use href={`${spriteHref}#icon-settings`}></use>
        </svg>
        Settings
      </button>
      <button
        className={`${css.button} ${css.logOutBtn}`}
        onClick={() => {
          openModal('logoutModal');
        }}
      >
        <svg className={css.iconLogOut}>
          <use href={`${spriteHref}#icon-log_out`}></use>
        </svg>
        Log out
      </button>
    </div>
  );
};

export default UserBarPopover;
