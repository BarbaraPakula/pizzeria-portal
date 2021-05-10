import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';
import { Button } from '@material-ui/core';

const Tables = () => {
  return (
    <div className={styles.component}>
      <h2>Tables view</h2>
      <nav>
        <Button className={styles.btn} color="primary" size="small" variant="contained" component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/book/123`} >Booking info</Button>
        <Button className={styles.btn} color="primary" size="small" variant="contained" component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`} >New Booking</Button>
        <Button className={styles.btn} color="primary" size="small" variant="contained" component={Link} to={`${process.env.PUBLIC_URL}/tables/events/event/123`} >Events info</Button>
        <Button className={styles.btn} color="primary" size="small" variant="contained" component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`} >New Event</Button>
      </nav>
    </div>
  );
};

export default Tables;