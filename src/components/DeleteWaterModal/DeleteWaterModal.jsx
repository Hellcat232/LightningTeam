// import React from 'react';
import { useDispatch } from "react-redux";

import css from "./DeleteWaterModal.module.css";
import { deleteWater } from "../../redux/water/operations";
import { toast } from "react-toastify";
import {useMonthQuery} from "../../hooks/useMonthQuery.js";

export default function DeleteWaterModal(props) {
  const dispatch = useDispatch();
    const { dispatchDate } = useMonthQuery();

    const handleDelete = (event) => {
        event.preventDefault();
    dispatch(deleteWater({ waterId: props.recordId }))
      .unwrap()
      .then(() => {
        props.onClose();
        props.WaterProgressBar();
        props.WaterList();
        props.Calendar();
      })
      .catch((error) => {
        toast.error("Could not delete record: " + error.message);
      });
        dispatchDate()
  };

  if (!props.call) {
    return null;
  }

  return (
    
      <div className={css.modal} onClick={props.onClose}>
        <div
          className={css["modal-content"]}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <button className={css.close} onClick={props.onClose}>
          <svg className={css.icon} width="28" height="28">
            <use href={`${icons}#icon-x`}></use>
          </svg>
          </button>
          <h2>Delete entry</h2>
          <p>Are you sure you want to delete the entry?</p>
            <form onSubmit={handleDelete}>   
              <div className={css.btn}>
              <button className={css.accept} type="submit">
                  Delete
              </button>
              <button className={css.reject} type="button" onClick={props.onClose}>
                  Cancel
              </button>
              </div>
            </form> 
        </div>
      </div>
   
  );
}
