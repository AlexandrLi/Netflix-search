import React from 'react';
import * as s from './film-card.css';

export class FilmCard extends React.Component {

  render() {
    return (
      <div className={s.card}>
        <img src={`https://image.tmdb.org/t/p/w342${this.props.movie.poster_path}`} alt="no image" />
        <div className={s.row}>
          <h2>{this.props.movie.title}</h2>
          <div className={s.year}>{this.props.movie.release_date.slice(0, 4)}</div>
        </div>
      </div>
    )
  }
}