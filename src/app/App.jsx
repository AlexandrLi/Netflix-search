import React from 'react';
import { SearchPage } from '../search-page/SearchPage'
import { FilmInfo } from '../film-info/FilmInfo'
import * as s from './app.css';

export class App extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
        <footer>
          netflixroulette
        </footer>
      </div>
    )
  }
}