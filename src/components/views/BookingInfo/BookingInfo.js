import React from 'react';
import styles from './BookingInfo.module.scss';
import { useParams } from 'react-router-dom';

const BookingInfo = () => {
  const { id } = useParams();
  return (
    <div className={styles.component}>
      <h2>BookingInfo view </h2>
      {id}
    </div>
  );
};

export default BookingInfo;
