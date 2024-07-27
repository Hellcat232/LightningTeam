import { NavLink } from "react-router-dom";
import css from "./WelcomSection.module.css";
import { useState } from "react";

const WelcomeSection = () => {
  // ================ BUTTON ==================
  const [circlePosition, setCirclePosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (event) => {
    const rect = event.target.getBoundingClientRect();
    const rX = event.clientX - rect.left;
    const rY = event.clientY - rect.top;

    setCirclePosition({ top: rY, left: rX });
  };

  const handleMouseLeave = (event) => {
    const rect = event.target.getBoundingClientRect();
    const rX = event.clientX - rect.left;
    const rY = event.clientY - rect.top;

    setCirclePosition({ top: rY, left: rX });
  };

  return (
    <div className={css.welcomeSection}>
      <h1 className={css.title}>AQUATRACK</h1>
      <p className={css.text}>Record daily water intake and track</p>
      <h1 className={css.mainTitle}>
        <span>Water</span> consumption tracker
      </h1>
      <div className={css.linkThumb}>
        <NavLink
          to="/signup"
          className={css.linkTracker}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className={css.signup_button_circle} style={circlePosition} />
          <span className={css.signup_button_text}> Try tracker</span>
        </NavLink>
        <NavLink
          to="/signin"
          className={css.button}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className={css.button_circle} style={circlePosition} />
          <span className={css.button_text}>Sign in</span>
        </NavLink>
      </div>
    </div>
  );
};

export default WelcomeSection;
