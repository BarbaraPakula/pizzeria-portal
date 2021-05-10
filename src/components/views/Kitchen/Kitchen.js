import React from 'react';
import styles from './Kitchen.module.scss';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



const demoOrders = [
  { id: 1, order: 'Salad', options: ['Tuna', 'Tomato sauce', 'Basil'], tableId: '3', drinks: ['Water', 'Orange Juice'], time: '11:00', status: 'new' },
  { id: 2, order: 'Pizza', options: ['Thick crust', 'Tomato sauce', 'Basil'], tableId: '3', drinks: [], time: '12:40', status: 'in progress' },
  { id: 3, order: '', options: ['Thick crust', 'Tomato sauce', 'Basil'], tableId: '2', drinks: ['cola', 'orange'], time: '15:00', status: 'new' },
];

const renderActions = status => {
  switch (status) {
    case 'in progress':
      return (
        <FormControlLabel control={<Checkbox checked={true} name="checkedB" />} label="in progress" />
      );
    case 'new':
      return (
        <FormControlLabel control={<Checkbox checked={false} name="checkedA" />} label="new" />
      );
    default:
      return null;
  }
};

const Kitchen = () => (
  <div className={styles.component}>

    {demoOrders.map(data => (
      <Card key={data.id}>
        <CardContent>
          <Typography>
            Order: {data.order}
          </Typography>
          <Typography>
            Options: {data.options.map(option => (
              option + ', '
            ))}
          </Typography>
          <Typography>
            Drinks: {data.drinks.map(drinks => (
              drinks + ', '
            ))}
          </Typography>
          <Typography>
            Table: {data.tableId}
          </Typography>
          <Typography>
            Time: {data.time}
          </Typography>
          <Typography>
            Status: {renderActions(data.status)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained" size="small">Order done</Button>
        </CardActions>
      </Card>
    ))}
  </div>
);
export default Kitchen;