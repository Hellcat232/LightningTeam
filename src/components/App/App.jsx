
import { useState } from 'react';
import UserSettingsModal from "./components/ModalUserSetting/ModalUserSetting";
import UserSettingForm from './components/Modal/UserSettingForm';

const App = () => {
   const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };


  const handleCloseModal = () => {
    setShowModal(false);
  };
 

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <UserSettingsModal showModal={showModal} handleClose={handleCloseModal}>
        <UserSettingForm />
      </UserSettingsModal>
      
    </div>
  );
};

export default App;