import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';

const Tables = () => {
  return (
    <div className={styles.component}>
      <h2>Tables view</h2>
      <nav>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/book/123`} >Booking info</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} >New Booking</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/events/event/123`} >Events info</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} >New Event</Link>
      </nav>
    </div>
  );
};

export default Tables;