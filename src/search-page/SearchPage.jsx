import React from 'react';
import { FilmCard } from '../film-card/FilmCard'
import { Toolbar } from '../toolbar/toolbar'
import * as s from './search-page.css';

export class SearchPage extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [
        {
          "unit": 84,
          "show_id": 60032563,
          "show_title": "Kill Bill: Vol. 2",
          "release_year": "2004",
          "rating": "3.8",
          "category": "Action & Adventure",
          "show_cast": "Uma Thurman, David Carradine, Michael Madsen, Daryl Hannah, Gordon Liu, Michael Parks, Perla Haney-Jardine, Helen Kim, Claire Smithies, Clark Middleton",
          "director": "Quentin Tarantino",
          "summary": "The Bride has three left on her rampage list: Budd, Elle Driver and Bill himself. But when she arrives at Bill's house, she's in for a surprise.",
          "poster": "http://netflixroulette.net/api/posters/60032563.jpg",
          "mediatype": 0,
          "runtime": "137 min"
        },
        {
          "unit": 87,
          "show_id": 60031236,
          "show_title": "Kill Bill: Vol. 1",
          "release_year": "2003",
          "rating": "3.8",
          "category": "Action & Adventure",
          "show_cast": "Uma Thurman, Lucy Liu, Vivica A. Fox, Daryl Hannah, David Carradine, Michael Madsen, Julie Dreyfus, Chiaki Kuriyama, Sonny Chiba, Gordon Liu",
          "director": "Quentin Tarantino",
          "summary": "An assassin is shot by her ruthless employer, Bill, and other members of their assassination circle. But she lives -- and plots her vengeance.",
          "poster": "http://netflixroulette.net/api/posters/60031236.jpg",
          "mediatype": 0,
          "runtime": "111 min"
        },
        {
          "unit": 914,
          "show_id": 880640,
          "show_title": "Pulp Fiction",
          "release_year": "1994",
          "rating": "4.1",
          "category": "Oscar-winning Movies",
          "show_cast": "John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis, Harvey Keitel, Tim Roth, Amanda Plummer, Ving Rhames, Eric Stoltz, Maria de Medeiros",
          "director": "Quentin Tarantino",
          "summary": "Weaving together three stories featuring a burger-loving hit man, his philosophical partner and a washed-up boxer, Quentin Tarantino influenced a generation of filmmakers with this crime caper's stylized, over-the-top violence and dark comic spirit.",
          "poster": "http://netflixroulette.net/api/posters/880640.jpg",
          "mediatype": 0,
          "runtime": "154 min"
        },
        {
          "unit": 943,
          "show_id": 60010514,
          "show_title": "Jackie Brown",
          "release_year": "1997",
          "rating": "3.7",
          "category": "Dramas",
          "show_cast": "Pam Grier, Samuel L. Jackson, Robert Forster, Bridget Fonda, Michael Keaton, Robert De Niro, Michael Bowen, Chris Tucker, Lisa Gay Hamilton, Tommy 'Tiny' Lister",
          "director": "Quentin Tarantino",
          "summary": "Jackie Brown is an aging flight attendant who smuggles cash on the side. But when she's busted and pressured to help with an investigation, she plans to play the opposing forces against each other and walk away with the dough.",
          "poster": "http://netflixroulette.net/api/posters/60010514.jpg",
          "mediatype": 0,
          "runtime": "154 min"
        },
        {
          "unit": 1151,
          "show_id": 902003,
          "show_title": "Reservoir Dogs",
          "release_year": "1992",
          "rating": "4.0",
          "category": "Independent Movies",
          "show_cast": "Harvey Keitel, Tim Roth, Michael Madsen, Steve Buscemi, Chris Penn, Lawrence Tierney, Edward Bunker, Quentin Tarantino, Randy Brooks, Kirk Baltz",
          "director": "Quentin Tarantino",
          "summary": "Quentin Tarantino's directorial debut is raw, violent, often mimicked -- and unforgettable. A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors unravel.",
          "poster": "http://netflixroulette.net/api/posters/902003.jpg",
          "mediatype": 0,
          "runtime": "99 min"
        },
        {
          "unit": 17300,
          "show_id": 70230640,
          "show_title": "Django Unchained",
          "release_year": "2012",
          "rating": "4.0",
          "category": "Dramas",
          "show_cast": "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington, Samuel L. Jackson, Walton Goggins, Dennis Christopher, James Remar, Michael Parks, Don Johnson",
          "director": "Quentin Tarantino",
          "summary": "Accompanied by a German bounty hunter, a freed slave named Django travels across America to free his wife from a sadistic plantation owner.",
          "poster": "http://netflixroulette.net/api/posters/70230640.jpg",
          "mediatype": 0,
          "runtime": "N/A"
        },
        {
          "unit": 1463,
          "show_id": 520179,
          "show_title": "Four Rooms",
          "release_year": "1995",
          "rating": "3.6",
          "category": "Comedies",
          "show_cast": "Tim Roth, Antonio Banderas, Jennifer Beals, Bruce Willis, Paul Calderon, Madonna, Marisa Tomei, Quentin Tarantino, Ione Skye, Lili Taylor",
          "director": "Quentin Tarantino, Robert Rodriguez, Allison Anders, Alexandre Rockwell",
          "summary": "One mad New Year's Eve, an overwhelmed bellboy copes with witches and diabolical children, gets caught in the middle of a sour relationship and settles a bloody bet for members of a superstar's entourage.",
          "poster": "http://netflixroulette.net/api/posters/520179.jpg",
          "mediatype": 0,
          "runtime": "98 min"
        }
      ],
      searchBy: 'title',
      sortBy: 'release'
    }
  }

  toggleSearchBy(type) {
    this.setState({ searchBy: type })
  }

  toggleSortingOrder(order) {
    this.setState({ sortBy: order })
  }

  render() {
    return (
      <div>
        <header>
          <h1>netflixroulette</h1>
          <label htmlFor="search">find your movie</label>
          <input id="search" type="text" />
          <div className={s.row}>
            <p>search by</p>
            <div className={`${s.button} ${s.buttonSmall} ${this.state.searchBy === 'title' ? s.selected : ''}`} onClick={() => this.toggleSearchBy('title')}>title</div>
            <div className={`${s.button} ${s.buttonSmall} ${this.state.searchBy === 'director' ? s.selected : ''}`} onClick={() => this.toggleSearchBy('director')}>director</div>
            <div className={`${s.button} ${s.searchButton}`}>search</div>
          </div>
        </header>
        <div className={s.toolbar}>
          {!!this.state.movies.length && <Toolbar count={this.state.movies.length} sortBy={this.state.sortBy} onSortClick={this.toggleSortingOrder.bind(this)} />}
        </div>
        {this.state.movies.length ?
          <div className={s.container}>
            {this.state.movies.map(item => <FilmCard key={item.show_id} movie={item} />)}
          </div> :
          <div className={s.noContent}>
            <p>No films found</p>
          </div>}
      </div >
    )
  }
}