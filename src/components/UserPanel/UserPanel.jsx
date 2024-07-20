import { useEffect, useRef, useState } from 'react';
import UserBar from '../UserBar/UserBar.jsx';
import UserBarPopover from '../UserBarPopover/UserBarPopover.jsx';
import css from './UserPanel.module.css';

const UserPanel = ({ userData, openModal }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);
  const buttonRef = useRef(null);

  const togglePopover = event => {
    event.stopPropagation();
    setIsPopoverOpen(prev => !prev);
  };

  const handleClickOutside = event => {
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
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={css.userPanelContainer}>
      <p className={css.greeting}>
        Hello<span className={css.userName}>, {userData}!</span>
      </p>
      <div className={css.userBarContainer}>
        <div ref={buttonRef}>
          <UserBar
            isPopoverOpen={isPopoverOpen}
            togglePopover={togglePopover}
            userData={userData}
          />
        </div>

        {isPopoverOpen && (
          <div ref={popoverRef}>
            <UserBarPopover openModal={openModal} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserPanel;
