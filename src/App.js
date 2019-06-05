import React, {Fragment} from 'react';
import AppNavbar from './components/layout/AppNavbar';
import ShoppingList from './components/layout/ShoppingList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Fragment>
        <AppNavbar/>
        <ShoppingList/>
    </Fragment>
  );
}

export default App;
