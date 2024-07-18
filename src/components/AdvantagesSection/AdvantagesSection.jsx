import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import css from "./AdvantagesSection.module.css";
import { girl1 } from "../../images/";
import { girl2 } from "../../images/";
import { boy } from "../../images/";
const AdvantagesSection = () => {
  const dispatch = useDispatch();
  const userCount = useSelector((state) => state.user.count);
  const todaySumamryWater = useSelector(
    (state) => state.water.todaySumamryWater
  );

  useEffect(() => {
    const fetchData = async () => {
      if (!userCount) {
        await dispatch(functionAboutFatchUserCount());
      }
      await dispatch(functionAboutTodayWater());
    };

    fetchData();
  }, [dispatch, userCount]);

  return (
    <div className={css.section}>
      <div className={css.totalBox}>
        <p className={css.customerTextLiters}>
          Our <span className={css.span}>{userCount}</span> happy customers
        </p>
      </div>
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
