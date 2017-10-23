import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as s from './film-info.css';
import { FilmCard } from '../film-card/FilmCard';
import { fetchMovie, clearMovies } from '../actions';

class FilmInfo extends React.Component {

  componentWillMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id)
      this.props.fetchMovie(nextProps.match.params.id);
  }

  render() {
    if (!this.props.selectedMovie) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <div className={s.header}>
            <div className={s.row}>
              <h1>netflixroulette</h1>
              <div className={s.button} onClick={this.props.clearMovies}><Link to="/">search</Link></div>
            </div>
            <div className={s.info}>
              {<img src={`https://image.tmdb.org/t/p/w342${this.props.selectedMovie.poster_path}`} alt="no image" />}
              <div className={s.description}>
                <h2>{this.props.selectedMovie.title}</h2>
                <p>{this.props.selectedMovie.genres.map(g => g.name).join(', ')}</p>
                <p>Release year: {this.props.selectedMovie.release_date.slice(0, 4)}<span>Runtime: {this.props.selectedMovie.runtime}</span></p>
                <p><em>{this.props.selectedMovie.tagline}</em></p>
                <p>{this.props.selectedMovie.overview}</p>
                <p>Budget: {this.props.selectedMovie.budget}<span>Rating: {this.props.selectedMovie.vote_average}</span></p>
              </div>
            </div>
          </div>
          {!!this.props.selectedMovie.belongs_to_collection &&
            <div className={s.toolbar}>
              <p>Collection: {this.props.selectedMovie.belongs_to_collection.name}</p>
            </div>
          }
          <div className={s.container}>
            {this.props.movies.filter(movie => movie.id !== this.props.selectedMovie.id).map(item => <Link to={`/film/${item.id}`} key={item.id}><FilmCard key={item.id} movie={item} /></Link>)}
          </div>
        </div >
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovie, clearMovies }, dispatch);
}

function mapStateToProps({ movies, selectedMovie }) {
  return { movies, selectedMovie };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmInfo);