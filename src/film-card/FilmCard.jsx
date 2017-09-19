import React from 'react';
import * as s from './film-card.css';

export class FilmCard extends React.Component {

  render() {
    return (
      <div className={s.card}>
        <img src="http://netflixroulette.net/api/posters/80012535.jpg" alt="no image" />
        <div className={s.row}>
          <h2>test</h2>
          <div className={s.year}>2004</div>
        </div>
        <p>Comedy</p>
      </div>
    )
  }
}