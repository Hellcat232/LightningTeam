import css from './ChooseDate.module.css';

const ChooseDate = ({ selectedDate }) => {
  // TODO: get chosen data from mouth info

  return <h2 className={css.header}>{selectedDate}</h2>;
};

export default ChooseDate;
