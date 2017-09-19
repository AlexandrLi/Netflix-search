import React from 'react';
import { FilmCard } from '../film-card/FilmCard'
import { Toolbar } from '../toolbar/toolbar'
import * as s from './search-page.css';

export class SearchPage extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>netflixroulette</h1>
          <label htmlFor="search">find your movie</label>
          <input id="search" type="text" />
          <div className={s.row}>
            <p>search by</p>
            <div className={`${s.button} ${s.buttonSmall}`}>title</div>
            <div className={`${s.button} ${s.buttonSmall}`}>director</div>
            <div className={`${s.button} ${s.searchButton}`}>search</div>
          </div>
        </header>
        <Toolbar />
        <div className={s.container}>
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
        </div>
      </div >
    )
  }
}