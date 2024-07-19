import { NavLink } from 'react-router-dom';
import css from './WelcomSection.module.css';


const WelcomeSection = () => {
     return (
    <div className={css.welcomeSection}>
      <p className={css.text}>Record daily water intake and track</p>
         <h1 className={css.mainTitle}>
          <span>Water</span> consumption tracker</h1>
      <div className={css.linkThumb}>
        <NavLink to="/signup" className={css.linkTracker}>
          Try tracker
        </NavLink>
        <NavLink to="/signin" className={css.linkSignIn}>
          Sign In
        </NavLink>
      </div>
    </div>
  );
};

export default WelcomeSection;
