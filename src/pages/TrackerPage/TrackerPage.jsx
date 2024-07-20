import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo.jsx';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo.jsx';
import { useState } from 'react';
import Modal from 'react-modal';
import WaterModal from '../../components/WaterModal/WaterModal.jsx';
import UserSettingsModal from '../../components/UserSettingsModal/UserSettingsModal.jsx';
import LogOutModal from '../../components/LogOutModal/LogOutModal.jsx';
import css from './TrackerPage.module.css';

const TrackerPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState();

  const openModal = modalType => {
    setModalIsOpen(true);
    setModalType(modalType);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  // TODO: Create state that will be storing query results.
  // TODO: Write write query for water data when the page is being loaded.

  return (
    <section className={css.section}>
      <WaterMainInfo openModal={openModal} />
      <WaterDetailedInfo openModal={openModal} />
      {/*  TODO: WORK ON MODAL STYLES ONCE MODAL WINDOW MARKUP WILL BE READY*/}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {modalType === 'waterModal' && <WaterModal />}
        {modalType === 'settingsModal' && <UserSettingsModal />}
        {modalType === 'logoutModal' && <LogOutModal />}
      </Modal>
    </section>
  );
};

export default TrackerPage;
