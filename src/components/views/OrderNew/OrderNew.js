import React from 'react';
import styles from './OrderNew.module.scss';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';

const demoMenu = [
  { id: 'Pizza', price: 10 },
  { id: 'Coffe', price: 5 },
  { id: 'Salad', price: 12 },
];

const demoOptions = [
  { id: 'Standard crust', price: 0 },
  { id: 'Thick crust', price: 2 },
  { id: 'Thin crust', price: 3 },
];

const OrderNew = () => {
  const [table, setTable] = React.useState('');
  const [menu, setMenu] = React.useState([]);
  const [options, setOptions] = React.useState([]);

  const handleChange = (event) => {
    setTable(event.target.value);
  };

  const handleMenu = (event) => {
    setMenu(event.target.value);
  };
  const handleOptions = (event) => {
    setOptions(event.target.value);
  };

  return (
    <Paper className={styles.component} elevation={3}>
      <h2>New order</h2>
      <form className={styles.form}>
        <FormControl >
          <InputLabel id="table">Table</InputLabel>
          <Select
            value={table}
            onChange={handleChange}
            label="Table"
            labelId="table"
            id="table"
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
        <FormControl >
          <InputLabel id="menu">Menu</InputLabel>
          <Select
            labelId="menu"
            id="menu"
            multiple
            value={menu}
            onChange={handleMenu}
            input={<Input />}
            renderValue={(selected) => selected.join(', ')}
          >
            {demoMenu.map(data => (
              <MenuItem key={data.id} value={data.id}>
                <Checkbox checked={menu.indexOf(data.id) > -1} />
                <ListItemText primary={data.id} secondary={data.price + '$'} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl >
          <InputLabel id="options">Options</InputLabel>
          <Select
            labelId="options"
            id="options"
            multiple
            value={options}
            onChange={handleOptions}
            input={<Input />}
            renderValue={(selected) => selected.join(', ')}
          >
            {demoOptions.map(data => (
              <MenuItem key={data.id} value={data.id} >
                <Checkbox checked={options.indexOf(data.id) > -1} />
                <ListItemText primary={data.id} secondary={data.price + '$'} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" color="primary">Confirm order</Button>
      </form>
    </Paper>
  );
};

export default OrderNew;