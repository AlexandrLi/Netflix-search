import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as s from './styles/style.css';
import { App } from './app/App.jsx';
import configureStore from './configureStore';

// Grab the state from a global variable injected into the server-generated HTML
const appStore = configureStore(window.PRELOADED_STATE);
// Allow the passed state to be garbage-collected
delete window.PRELOADED_STATE;

ReactDOM.render((
  <Provider store={appStore}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('container'));