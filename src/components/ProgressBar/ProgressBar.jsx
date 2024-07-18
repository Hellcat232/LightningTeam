import css from './ProgressBar.module.css';

const ProgressBar = ({ percentage }) => {
  return (
    <div className={css.progressBar}>
      <div className={css.progress} style={{ width: `${percentage}%` }}>
        <div className={css.progressIndicator}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
