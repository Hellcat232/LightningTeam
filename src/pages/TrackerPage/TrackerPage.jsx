import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import css from './TrackerPage.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { currentUser } from "../../redux/auth/operations.js";
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo.jsx';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo.jsx';
import DeleteWaterModal from '../../components/DeleteWaterModal/DeleteWaterModal.jsx';
import useWaterItems from '../../hooks/useWaterItems.js';

const TrackerPage = () => {
    const dispatch = useDispatch();
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
        dispatch(currentUser());
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
                    selectedDate={selectedDate}
                    onClose={handleCloseModal}
                    WaterProgressBar={() => {}}
                    WaterList={() => {}}
                    Calendar={() => {}}
                />
            )}
            <ToastContainer />
        </section>
    );
};

export default TrackerPage;
