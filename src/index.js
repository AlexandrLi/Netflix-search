import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as s from './styles/style.css';
import { App } from './app/App.jsx';
import { SearchPage } from './search-page/SearchPage.jsx';
import { FilmInfo } from './film-info/FilmInfo.jsx';
import MoviesReducer from './search-page/reducer_movies';
import SearchReducer from './search-page/reducer_search';
import SortReducer from './search-page/reducer_sort';
import MovieReducer from './film-info/reducer_movie';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  selectedMovie: MovieReducer,
  searchBy: SearchReducer,
  sortBy: SortReducer
})

const appStore = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render((
  <Provider store={appStore}>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route path="/search/:query" component={SearchPage} />
          <Route path="/film/:show_title" component={FilmInfo} />
        </Switch>
      </App>
    </Router>
  </Provider>
), document.getElementById('container'));