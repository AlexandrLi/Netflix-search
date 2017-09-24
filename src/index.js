import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import * as s from './styles/style.css';
import { App } from './app/App.jsx';
import { SearchPage } from './search-page/SearchPage.jsx';
import { FilmInfo } from './film-info/FilmInfo.jsx';

ReactDOM.render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route path="/search/:query" component={SearchPage} />
        <Route path="/film/:show_title" component={FilmInfo} />
      </Switch>
    </App> 
  </Router>
), document.getElementById('container'));