import React from 'react';
import './App.css';
import './App.scss';
import { Provider } from 'react-redux';
import Router from './Component/Redux/Router';
import store from './Component/Redux/Store';

function App() {
  return (
      <Provider store={store}>
        <Router/>
      </Provider>    
  );
}

export default App;
