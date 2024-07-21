

import sprite from "../../images/symbol-icons.svg";

const Iconsvg = ({ width, height, iconName, className }) => {
  return (
    <svg width={width} height={height} className={className}>
      <use href={`${sprite}#${iconName}`}></use>
    </svg>
  );
};

export default Iconsvg;
