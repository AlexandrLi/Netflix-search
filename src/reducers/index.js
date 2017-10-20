import { combineReducers } from 'redux';
import MoviesReducer from './reducer_movies';
import SortReducer from './reducer_sort';
import MovieReducer from './reducer_movie';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  selectedMovie: MovieReducer,
  sortBy: SortReducer
})

export default rootReducer;