import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies, reOrder, sortMovies } from '../actions';

import { FilmCard } from '../film-card/FilmCard'
import { Toolbar } from '../toolbar/toolbar'
import s from './search-page.css';

export class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: this.props.match.params.query || '',
      order: 'desc'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  toggleOrder(order) {
    this.setState({ order });
    if (this.props.movies.length) {
      this.props.reOrder(order);
    }
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  toggleSortingType(type) {
    this.props.sortMovies(type, this.state.order);
  }

  static fetchData(dispatch, match) {
    if (match.params.query) {
      dispatch(fetchMovies(match.params.query, 'desc'));
    }
  }

  componentDidMount() {
    if (this.state.query) {
      this.props.fetchMovies(this.state.query, this.state.order);
    }
  }

  onSearch(event) {
    event.preventDefault();
    if (!this.state.query.trim()) {
      return;
    } else {
      this.props.history.push(`/search/${this.state.query}`);
      this.props.fetchMovies(this.state.query, this.state.order);
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
              <p>order:</p>
              <div className={`${s.button} ${s.buttonSmall} ${this.state.order === 'asc' ? s.selected : ''}`} onClick={() => this.toggleOrder('asc')}>asc</div>
              <div className={`${s.button} ${s.buttonSmall} ${this.state.order === 'desc' ? s.selected : ''}`} onClick={() => this.toggleOrder('desc')}>desc</div>
              <button className={`${s.button} ${s.searchButton}`}>search</button>
            </div>
          </form>
        </header>
        <div className={s.toolbar}>
          {!!this.props.movies.length && <Toolbar count={this.props.movies.length} sortBy={this.props.sortBy} onSortClick={this.toggleSortingType.bind(this)} />}
        </div>
        {this.props.movies.length ?
          <div className={s.container}>
            {this.props.movies.map(item => <Link to={`/film/${item.id}`} key={item.id}><FilmCard key={item.id} movie={item} /></Link>)}
          </div> :
          <div className={s.noContent}>
            <p>No films found</p>
          </div>}
      </div >
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies, reOrder, sortMovies }, dispatch);
}

function mapStateToProps({ movies, searchType, sortBy }) {
  return { movies, searchType, sortBy };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);