import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo.jsx';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo.jsx';
import css from './TrackerPage.module.css';
import useWaterItems from '../../hooks/useWaterItems.js';
import DeleteWaterModal from '../../components/DeleteWaterModal/DeleteWaterModal.jsx';

import {useEffect, useState} from 'react';
import { ToastContainer } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';
import {useDispatch} from "react-redux";
import {currentUser} from "../../redux/auth/operations.js";

const TrackerPage = () => {
    const dispatch = useDispatch()
  const { waterItems, addWaterItem } = useWaterItems();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recordId, setRecordId] = useState(null);
    const dateParam = `${new Date().getDate().toString().padStart(2, '0')}.${(new Date().getMonth() + 1).toString().padStart(2, '0')}.${new Date().getFullYear()}`;
    const [selectedDate, setSelectedDate] = useState(dateParam);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setRecordId(null);
  };
    useEffect(() => {
        dispatch(currentUser())
    }, [dispatch]);

  return (
    <section className={css.section}>
      <WaterMainInfo addWaterItem={addWaterItem} selectedDate={selectedDate}/>
      <WaterDetailedInfo
        waterItems={waterItems}
        addWaterItem={addWaterItem}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      />
      {isModalOpen && (
        <DeleteWaterModal
          call={isModalOpen}
          recordId={recordId}
          onClose={() => dispatch(handleCloseModal())}
        ></DeleteWaterModal>
      )}
      <ToastContainer />
    </section>
  );
};

export default TrackerPage;
