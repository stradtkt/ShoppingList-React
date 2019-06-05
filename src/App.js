import React, {Fragment} from 'react';
import AppNavbar from './components/layout/AppNavbar';
import ShoppingList from './components/layout/ShoppingList';
import ItemModal from './components/layout/ItemModal';
import {Container} from 'reactstrap';
import {Provider} from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
        <Fragment>
            <AppNavbar/>
            <Container>
                <ShoppingList/>
                <ItemModal/>
            </Container>
        </Fragment>
    </Provider>
  );
}

export default App;
