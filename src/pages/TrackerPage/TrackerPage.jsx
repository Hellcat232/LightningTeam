import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo.jsx';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo.jsx';
import css from './TrackerPage.module.css';
import useWaterItems from '../../hooks/useWaterItems.js';

const TrackerPage = () => {
  const { waterItems, addWaterItem } = useWaterItems();
  // TODO: Create state that will be storing query results.
  // TODO: Write write query for water data when the page is being loaded.

  return (
    <section className={css.section}>
      <WaterMainInfo addWaterItem={addWaterItem} />
      <WaterDetailedInfo waterItems={waterItems} addWaterItem={addWaterItem} />
    </section>
  );
};

export default TrackerPage;
