import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './AddUser';
import CustomerList from './CustomerList';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddUser />
        <CustomerList/>
      </div>
    </Provider>
  );
}

export default App;
