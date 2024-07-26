import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo.jsx';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo.jsx';
import css from './TrackerPage.module.css';
import useWaterItems from '../../hooks/useWaterItems.js';
import DeleteWaterModal from '../../components/DeleteWaterModal/DeleteWaterModal.jsx';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors.js';

const TrackerPage = () => {
  const { waterItems, addWaterItem } = useWaterItems();
  // TODO: Create state that will be storing query results.
  // TODO: Write write query for water data when the page is being loaded.
  const [deleteWatModal, setDeleteWatModal] = useState(false);
  // const user = useSelector(selectUser);
  return (
    <section className={css.section}>
      <WaterMainInfo addWaterItem={addWaterItem} />
      <WaterDetailedInfo waterItems={waterItems} addWaterItem={addWaterItem} />
      <DeleteWaterModal
        call={deleteWatModal}
        onClose={() => setDeleteWatModal(false)}
      ></DeleteWaterModal>
      <ToastContainer />
    </section>
  );
};

export default TrackerPage;
