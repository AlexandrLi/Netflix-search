import ReducerMovie from '../reducers/reducer_movie';
import ReducerMovies from '../reducers/reducer_movies';
import ReducerSort from '../reducers/reducer_sort';
import { SELECT_MOVIE, CHANGE_SORT_TYPE, CLEAR_MOVIES, FETCH_MOVIES } from '../actions';
import { movie, movies, anotherMovie, FAKE_ACTION } from './mock-data';

describe('Test movie reducer', () => {
  it('reducer for SELECT_MOVIE', () => {
    let state = null;
    state = ReducerMovie(state, { type: SELECT_MOVIE, payload: movie });
    expect(state).toEqual(movie);
  });

  it('reducer default behavior should return current state', () => {
    let state = movie;
    state = ReducerMovie(state, { type: FAKE_ACTION, payload: anotherMovie });
    expect(state).toEqual(movie);
  })
});

describe('Test movies reducer', () => {
  it('reducer for FETCH_MOVIES', () => {
    let state = null;
    state = ReducerMovies(state, { type: FETCH_MOVIES, payload: movies });
    expect(state).toEqual(movies);
  });

  it('reducer for CLEAR_MOVIES', () => {
    let state = movies;
    state = ReducerMovies(state, { type: CLEAR_MOVIES });
    expect(state).toHaveLength(0);
  });

  it('reducer default behavior should return current state', () => {
    let state = movies;
    state = ReducerMovies(state, { type: FAKE_ACTION, payload: movies.slice(0, 2) });
    expect(state).toEqual(movies);
  })
})

describe('Test sort reducer', () => {
  it('reducer for CHANGE_SORT_TYPE', () => {
    let state = 'release';
    state = ReducerSort(state, { type: CHANGE_SORT_TYPE, payload: 'rating' });
    expect(state).toEqual('rating');
  });

  it('reducer default behavior should return current state', () => {
    let state = 'release';
    state = ReducerSort(state, { type: FAKE_ACTION, payload: 'rating' });
    expect(state).toEqual('release');
  })
})