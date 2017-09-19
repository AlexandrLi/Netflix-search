import React from 'react';
import * as s from './film-info.css';
import { FilmCard } from '../film-card/FilmCard';
import { Toolbar } from '../toolbar/toolbar'

export class FilmInfo extends React.Component {
  render() {
    return (
      <div>
        <div className={s.header}>
          <div className={s.row}>
            <h1>netflixroulette</h1>
            <div className={s.button}>search</div>
          </div>
          <div className={s.info}>
            <img src="http:\/\/netflixroulette.net\/api\/posters\/880640.jpg" alt="no image" />
            <div className={s.description}>
              <h2>Pulp Fiction</h2>
              <p>Oscar-winning Movies</p>
              <p>1994<span>154 min</span></p>
              <p>Weaving together three stories featuring a burger-loving hit man, his philosophical partner and a washed-up boxer, Quentin Tarantino influenced a generation of filmmakers with this crime caper's stylized, over-the-top violence and dark comic spirit.</p>
              <p>Director: Quentin Tarantino</p>
              <p>Cast: John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis, Harvey Keitel, Tim Roth, Amanda Plummer, Ving Rhames, Eric Stoltz, Maria de Medeiros</p>
            </div>
          </div>
        </div>
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