import React from 'react';
import styles from './EventsInfo.module.scss';
import { useParams } from 'react-router-dom';

const EventsInfo = () => {
  const { id } = useParams();
  return (
    <div className={styles.component}>
      <h2>EventsInfo view</h2>
      {id}
    </div>
  );
};

export default EventsInfo;