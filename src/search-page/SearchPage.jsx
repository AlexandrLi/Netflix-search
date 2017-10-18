import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies, changeSearchType } from './actions';

import { FilmCard } from '../film-card/FilmCard'
import { Toolbar } from '../toolbar/toolbar'
import * as s from './search-page.css';

class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'release',
      query: this.props.match.params.query || ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  toggleSearchBy(type) {
    this.props.changeSearchType(type);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  toggleSortingOrder(order) {
    this.setState({ sortBy: order })
    if (order === 'release') {
      this.props.movies.sort((m1, m2) => m2.release_date - m1.release_date)
    } else {
      this.props.movies.sort((m1, m2) => m2.popularity - m1.popularity)
    }
  }

  componentWillMount() {
    if (this.state.query) {
      this.props.fetchMovies(this.state.query);
    }
    this.props.movies.sort((m1, m2) => m2.release_year - m1.release_year)
  }

  onSearch(event) {
    event.preventDefault();
    if (!this.state.query.trim()) {
      return;
    } else {
      this.props.history.push(`/search/${this.state.query}`);
      this.props.fetchMovies(this.state.query);
    }

  }

  render() {
    return (
      <div>
        <header>
          <h1>netflixroulette</h1>
          <form onSubmit={this.onSearch.bind(this)}>
            <label htmlFor="search">find your movie</label>
            <input id="search" type="text" value={this.state.query} onChange={this.handleChange} />
            <div className={s.row}>
              <p>search</p>
              <div className={`${s.button} ${s.buttonSmall} ${this.props.searchType === 'movie' ? s.selected : ''}`} onClick={() => this.toggleSearchBy('movie')}>movie</div>
              <div className={`${s.button} ${s.buttonSmall} ${this.props.searchType === 'tv' ? s.selected : ''}`} onClick={() => this.toggleSearchBy('tv')}>tv show</div>
              <button className={`${s.button} ${s.searchButton}`}>search</button>
            </div>
          </form>
        </header>
        <div className={s.toolbar}>
          {!!this.props.movies.length && <Toolbar count={this.props.movies.length} sortBy={this.state.sortBy} onSortClick={this.toggleSortingOrder.bind(this)} />}
        </div>
        {this.props.movies.length ?
          <div className={s.container}>
            {this.props.movies.map(item => <Link to={`/film/${item.title}`} key={item.id}><FilmCard key={item.id} movie={item} /></Link>)}
          </div> :
          <div className={s.noContent}>
            <p>No films found</p>
          </div>}
      </div >
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies, changeSearchType }, dispatch);
}

function mapStateToProps({ movies, searchType }) {
  return { movies, searchType };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);