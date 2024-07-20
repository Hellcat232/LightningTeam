
import styles from './WaterItem.module.css';
import React, { useState } from 'react';
import WaterModalEdit from '../WaterModalEdit/WaterModalEdit';
import DeleteModal from '../DeleteModal/DeleteModal';


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
      {/* <svg className={styles.icon}>
        <use href="#icon-water" />
      </svg> */}
      <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M31.9056 2.34867C31.7726 1.89785 31.5482 1.48177 31.2473 1.12836C30.9464 0.774948 30.576 0.492399 30.1611 0.299688C29.749 0.0998095 29.2988 -0.00114355 28.8438 0.00433861H3.22806C2.77332 -0.0221772 2.31966 0.0731813 1.91078 0.281228C1.48682 0.476083 1.10986 0.766102 0.807109 1.13036C0.506355 1.48316 0.281792 1.89854 0.148469 2.34867C0.0105127 2.7953 -0.0320079 3.26773 0.0238616 3.73312L2.94324 29.5762C3.13905 31.3446 3.9579 32.9727 5.23958 34.1541C6.49243 35.334 8.12201 35.9916 9.81446 36H22.2752C23.9732 35.9926 25.6087 35.3353 26.8679 34.1541C28.1328 32.9613 28.9416 31.3363 29.1465 29.5762L30.7307 15.0487V14.8272L31.959 3.75158C32.0279 3.28471 32.0098 2.80846 31.9056 2.34867ZM13.9265 30.6837H12.1464C10.9933 30.6172 9.89561 30.1489 9.03121 29.3546C8.1699 28.5498 7.60381 27.4605 7.42912 26.2719L7.00189 23.0969C6.94705 22.6129 7.07714 22.1259 7.36429 21.7402C7.65144 21.3544 8.07284 21.1006 8.53824 21.033C9.00364 20.9654 9.47606 21.0895 9.85433 21.3787C10.2326 21.6678 10.4867 22.0991 10.5621 22.5801L10.9893 25.7182C11.0372 26.0612 11.2013 26.3753 11.4522 26.6042C11.7009 26.8409 12.0227 26.9783 12.36 26.9919H14.1401C14.6122 26.9919 15.065 27.1863 15.3989 27.5325C15.7327 27.8787 15.9202 28.3482 15.9202 28.8378C15.9202 29.3274 15.7327 29.7969 15.3989 30.1431C15.065 30.4892 14.6122 30.6837 14.1401 30.6837H13.9265ZM28.1674 13.6458C24.4114 14.4026 21.2072 14.5503 17.8072 11.7998C13.5883 8.34795 8.47938 9.45551 3.56628 11.2645L2.67622 3.43777C2.65871 3.35881 2.65871 3.27676 2.67622 3.1978C2.70045 3.12024 2.74334 3.05036 2.80083 2.99475C2.84296 2.92662 2.9055 2.87474 2.97884 2.84707C3.04867 2.82655 3.12263 2.82655 3.19246 2.84707H29.0396C29.1064 2.88579 29.1666 2.93569 29.2177 2.99475C29.2711 3.05013 29.3067 3.12212 29.3245 3.1978C29.3516 3.28165 29.3516 3.37238 29.3245 3.45623L28.1674 13.6458Z" fill="#9BE1A0" />
      </svg>
      <div className={styles['cont-info-item']}>
      <div className={styles.waterAmount}>{amount} ml</div>
        <div className={styles.waterTime}>{time}</div>
        </div>
      <div className={styles.waterActions}>
        <button className={styles.editButton} onClick={openEditModal}>
          {/* <svg className={styles.icon}>
            <use href="#icon-edit" />
          </svg> */}

       <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_54_1062)">
    <path d="M11.3335 2.00004C11.5086 1.82494 11.7165 1.68605 11.9452 1.59129C12.174 1.49653 12.4192 1.44775 12.6668 1.44775C12.9145 1.44775 13.1596 1.49653 13.3884 1.59129C13.6172 1.68605 13.8251 1.82494 14.0002 2.00004C14.1753 2.17513 14.3142 2.383 14.4089 2.61178C14.5037 2.84055 14.5524 3.08575 14.5524 3.33337C14.5524 3.58099 14.5037 3.82619 14.4089 4.05497C14.3142 4.28374 14.1753 4.49161 14.0002 4.6667L5.00016 13.6667L1.3335 14.6667L2.3335 11L11.3335 2.00004Z" stroke="#323F47" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_54_1062">
      <rect width="16" height="16" fill="white" />
    </clipPath>
  </defs>
</svg>
        </button>
        <button className={styles.deleteButton} onClick={openDeleteModal}>
          {/* <svg className={styles.icon}>
            <use href="#icon-delete" />
          </svg> */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 2H10" stroke="#323F47" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4" stroke="#323F47" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
</svg>
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
