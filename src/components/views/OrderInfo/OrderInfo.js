import React from 'react';
import styles from './OrderInfo.module.scss';
import { useParams } from 'react-router-dom';

const OrderInfo = () => {
  const { id } = useParams();

  return (
    <div className={styles.component}>
      <h2>OrderInfo view</h2>
      {id}
    </div>
  );
};

export default OrderInfo;