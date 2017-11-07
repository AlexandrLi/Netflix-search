import React from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../routes';
import 'isomorphic-fetch';
import s from './app.css';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          {renderRoutes(routes)}
        </Switch>
        <footer>
          netflixroulette
        </footer>
      </div>
    )
  }
}