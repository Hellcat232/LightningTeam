// import React from 'react';
import { useDispatch } from 'react-redux';

import './DeleteWaterModal.module.css';
import { deleteWater } from "../../redux/water/operations";
import { toast } from 'react-toastify';


export default function DeleteWaterModal(props) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteWater(props.recordId))
            .unwrap()
            .then(() => { 
                props.onClose()
                props.WaterProgressBar()
                props.WaterList()
                props.Calendar()
    })
            .catch((error) => {
                toast.error('Could not delete record: ' + error.message);
            });
    };

     
    if (!props.call) {
        return null;
    }

    
    return (
        
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={(e) => {e.stopPropagation()}}>
                <button className="close" onClick={props.onClose} >×</button>
                <h2>Delete entry</h2>
                <p>Are you sure you want to delete the entry?</p>
                <div className='btn'>
                    <button className="accept" type="button" onClick={handleDelete}>Delete</button>
                    <button className="reject" type="button" >Cancel</button> 
                </div>    
            </div>
        </div>
        
    )
}
