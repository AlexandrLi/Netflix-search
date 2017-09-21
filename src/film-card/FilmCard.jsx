import React from 'react';
import * as s from './film-card.css';

export class FilmCard extends React.Component {

  render() {
    return (
      <div className={s.card}>
        <img src={this.props.movie['poster']} alt="no image" />
        <div className={s.row}>
          <h2>{this.props.movie['show_title']}</h2>
          <div className={s.year}>{this.props.movie['release_year']}</div>
        </div>
        <p>{this.props.movie['category']}</p>
      </div>
    )
  }
}