// import React from 'react';
import { useDispatch } from "react-redux";

import css from "./DeleteWaterModal.module.css";
import { deleteWater } from "../../redux/water/operations";
import { toast } from "react-toastify";

export default function DeleteWaterModal(props) {
  const dispatch = useDispatch();

  const handleDelete = () => {
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
          ×
        </button>
        <h2>Delete entry</h2>
        <p>Are you sure you want to delete the entry?</p>
        <div className={css.btn}>
          <button className={css.accept} type="button" onClick={handleDelete}>
            Delete
          </button>
          <button className={css.reject} type="button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
