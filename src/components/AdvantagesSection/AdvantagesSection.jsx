import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import css from "./AdvantagesSection.module.css";
import girl1 from "../../images/girl1.png";
import girl2 from "../../images/girl2.png";
import boy from "../../images/boy.png";
const AdvantagesSection = () => {
 
  return (
    <div className={css.section}>
          
      <div className={css.customersBox}>
        
        <ul className={css.customerImg}>
          <li className={css.item}>
            <img className={css.img} src={girl2} alt="girl1" />
          </li>

          <li className={css.item}>
            <img className={css.img} src={boy} alt="boy" />
          </li>

          <li className={css.item}>
            <img className={css.img} src={girl1} alt="girl2" />
          </li>
        </ul>
        <p className={css.customerTextLiters}>
          Our <span className={css.span}>
             happy </span>customers
        </p>
      </div>

      <div className={css.group}>
        <ul className={css.advantagesGroup}>
          <li className={css.textAdvantage}>
            <div className={css.ellipse}></div>
            <p className={css.text}>Habit drive</p>
          </li>
          <li className={css.textAdvantage}>
            <p className={css.textBlack}>View statistics</p>
          </li>
          <li className={css.textAdvantage}>
            <p className={css.textBlack}>Personal rate setting</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdvantagesSection;
