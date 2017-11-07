import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import s from './styles/style.css';
import App from './app/App.jsx';
import configureStore from './configureStore';

const appStore = configureStore();

hydrate((
  <Provider store={appStore}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('container'));