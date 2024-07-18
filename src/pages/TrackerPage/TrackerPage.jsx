import WaterMainInfo from "../../components/WaterMainInfo/WaterMainInfo.jsx";
import WaterDetailedInfo from "../../components/WaterDetailedInfo/WaterDetailedInfo.jsx";
import { useState } from "react";
import Modal from "react-modal";
import WaterModal from "../../components/WaterModal/WaterModal.jsx";

export default function TrackerPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  // TODO: Create state that will be storing query results.
  // TODO: Write write query for water data when the page is being loaded.

  return (
    <>
      <WaterMainInfo openModal={openModal} />
      <WaterDetailedInfo />
      {/*  TODO: WORK ON MODAL STYLES ONCE MODAL WINDOW MARKUP WILL BE READY*/}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        Hello World
        <WaterModal />
      </Modal>
    </>
  );
}
