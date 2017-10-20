import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers'
import * as s from './styles/style.css';
import { App } from './app/App.jsx';
import SearchPage from './search-page/SearchPage.jsx';
import FilmInfo from './film-info/FilmInfo.jsx';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appStore = createStore(RootReducer, composeEnhancers(applyMiddleware(ReduxThunk)));

ReactDOM.render((
  <Provider store={appStore}>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route path="/search/:query" component={SearchPage} />
          <Route path="/film/:id" component={FilmInfo} />
        </Switch>
      </App>
    </Router>
  </Provider>
), document.getElementById('container'));