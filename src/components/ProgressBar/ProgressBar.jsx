import css from "./ProgressBar.module.css";

const ProgressBar = ({ percentage }) => {
  if (percentage > 100) {
    percentage = 100;
  }

  return (
    <div className={css.progressBar}>
      <div className={css.progress} style={{ width: `${percentage}%` }}>
        <div className={css.progressIndicator}></div>
      </div>
      {percentage === "30" || percentage === "70" ? (
        <div
          className={`${css.milestone}`}
          style={{ left: `${percentage - 3}%` }}
        >
          {percentage}%
        </div>
      ) : (
        []
      )}
    </div>
  );
};

export default ProgressBar;
