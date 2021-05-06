import React from 'react';
import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../src/components/views/Login/Login';
import Homepage from '../src/components/views/Homepage/Homepage';
import Kitchen from './components/views/Kitchen/Kitchen';
import Waiter from './components/views/Waiter/Waiter';
import Tables from './components/views/Tables/Tables';
import BookingInfo from './components/views/BookingInfo/BookingInfo';
import BookingNew from './components/views/BookingNew/BookingNew';
import EventsInfo from './components/views/EventsInfo/EventsInfo';
import EventsNew from './components/views/EventsNew/EventsNew';
import OrderInfo from './components/views/OrderInfo/OrderInfo';
import OrderNew from './components/views/OrderNew/OrderNew';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
});

function App() {
  return (

    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + '/'} component={Homepage} />
              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
              <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/book/:id'} component={BookingInfo} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={BookingNew} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/event/:id'} component={EventsInfo} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={EventsNew} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter/ordering/order/:id'} component={OrderInfo} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={OrderNew} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
              <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
