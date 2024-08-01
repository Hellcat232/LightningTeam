import { useEffect, useRef, useState } from "react";
import UserBar from "../UserBar/UserBar.jsx";
import UserBarPopover from "../UserBarPopover/UserBarPopover.jsx";
import css from "./UserPanel.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors.js";

const UserPanel = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);
  const buttonRef = useRef(null);
  const userName = useSelector(selectUser) || "Guest";

  const togglePopover = (event) => {
    event.stopPropagation();
    setIsPopoverOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsPopoverOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={css.userPanelContainer}>
      <p className={css.greeting}>
        Hello
        <span className={css.userName}>
          , {userName && (userName.name || userName.email)}!
        </span>
      </p>
      <div className={css.userBarContainer}>
        <div ref={buttonRef}>
          <UserBar
            isPopoverOpen={isPopoverOpen}
            togglePopover={togglePopover}
          />
        </div>

        {isPopoverOpen && (
          <div ref={popoverRef}>
            <UserBarPopover />
          </div>
        )}
      </div>
    </header>
  );
};

export default UserPanel;
