import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo.jsx';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo.jsx';

const TrackerPage = () => {
  // TODO: Create state that will be storing query results.
  // TODO: Write write query for water data when the page is being loaded.

  return (
    <>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </>
  );
};

export default TrackerPage;
