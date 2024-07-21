import styles from './WaterItem.module.css';
import { useState } from 'react';
import WaterModalEdit from '../WaterModalEdit/WaterModalEdit';
import DeleteModal from '../DeleteModal/DeleteModal';

import Iconsvg from '../Icon/Icon';



const WaterItem = ({ id, amount, time, onEdit, onDelete }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const handleEdit = (newAmount, newTime) => {
    onEdit(id, newAmount, newTime);
    closeEditModal();
  };

  const handleDelete = () => {
    onDelete(id);
    closeDeleteModal();
  };

  return (
    <div className={styles.waterItem}>

        <Iconsvg
            width="44"
            height="45"
        iconName="mage_water-glass-fill"
        />


      <div className={styles['cont-info-item']}>
        <div className={styles.waterAmount}>{amount} ml</div>
        <div className={styles.waterTime}>{time}</div>
      </div>
      <div className={styles.waterActions}>
        <button className={styles.editButton} onClick={openEditModal}>

          <Iconsvg
            width="16"
            height="16"
            iconName="edit"
            className={styles.iconns}
          />
        </button>
        <button className={styles.deleteButton} onClick={openDeleteModal}>
          <Iconsvg
            width="16"
            height="16"
            iconName="trash"
            className={styles.iconns}
          />
        </button>
        <button className={styles.deleteButton} onClick={openDeleteModal}>
        </button>
      </div>
      <WaterModalEdit
        isOpen={isEditModalOpen}
        closeModal={closeEditModal}
        onEdit={handleEdit}
        initialAmount={amount}
        initialTime={time}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        closeModal={closeDeleteModal}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default WaterItem;
