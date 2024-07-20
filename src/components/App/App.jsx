import DeleteWaterModal from '../WaterModal/waterDeleteModal/DeleteWaterModal';
import LogOutModal from "../LogOutModal/LogOutModal";
import UserSettingForm from '../UserSettingsForm/UserSettingsForm';
import { useState } from 'react';


const App = () => {
    const [modalState, setModalState] = useState(false);
    const handleSubmit = (data) => {
    console.log(data);
  };
     return <div className="App">
        <DeleteWaterModal call={modalState} onClose={() => setModalState(false)}/>
        <LogOutModal call={modalState} onClose={() => setModalState(false)} /> 
        <UserSettingForm onSubmit={handleSubmit} />
    </div> 

};

export default App;
