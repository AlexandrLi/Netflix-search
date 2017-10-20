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

  // componentWillReceiveProps(nextProps) {
  //   let movie = this.state.movies.find(movie => movie.show_title === nextProps.match.params.show_title)
  //   this.setState({ selectedMovie: movie })
  // }

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
                <p>{this.props.selectedMovie.release_date.slice(0, 4)}<span>{this.props.selectedMovie.runtime}</span></p>
                <p>{this.props.selectedMovie.overview}</p>
                <p>Budget: {this.props.selectedMovie.budget}</p>
                <p>Cast: {this.props.selectedMovie.show_cast}</p>
              </div>
            </div>
          </div>
          {!!this.props.selectedMovie.belongs_to_collection &&
            <div className={s.toolbar}>
              <p>Belongs to: {this.props.selectedMovie.belongs_to_collection.name}</p>
            </div>
          }
          <div className={s.container}>
            {/* {this.props.movies.filter(movie => movie.show_id !== this.state.selectedMovie.show_id).map(item => <Link to={`/film/${item.show_title}`} key={item.show_id} ><FilmCard key={item.show_id} movie={item} /></Link>)} */}
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