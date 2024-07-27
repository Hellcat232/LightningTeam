import WaterMainInfo from "../../components/WaterMainInfo/WaterMainInfo.jsx";
import WaterDetailedInfo from "../../components/WaterDetailedInfo/WaterDetailedInfo.jsx";
import css from "./TrackerPage.module.css";
import useWaterItems from "../../hooks/useWaterItems.js";
import DeleteWaterModal from "../../components/DeleteWaterModal/DeleteWaterModal.jsx";

import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";
import { useDispatch /*, useSelector*/ } from "react-redux";
// import { selectUser } from "../../redux/auth/selectors.js";

const TrackerPage = () => {
  const dispatch = useDispatch();
  const { waterItems, addWaterItem } = useWaterItems();
  // TODO: Create state that will be storing query results.
  // TODO: Write write query for water data when the page is being loaded.
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recordId, setRecordId] = useState(null);
  // const user = useSelector(selectUser);
  // console.log(user);

  // useEffect(() => {
  //   dispatch(fetchWaterRecords());
  // }, [dispatch]);

  // const handleDeleteClick = (id) => {
  //   setRecordId(id);
  //   setIsModalOpen(true);
  // };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setRecordId(null);
  };
  return (
    <section className={css.section}>
      <WaterMainInfo addWaterItem={addWaterItem} />
      <WaterDetailedInfo waterItems={waterItems} addWaterItem={addWaterItem} />
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
