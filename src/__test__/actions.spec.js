import * as Action from '../actions';
import { initialState, movie, yodaMovies } from './mock-data';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('test App actions', () => {

  it('action creator clearMovies', () => {
    const action = Action.clearMovies();
    expect(action).toEqual({ type: Action.CLEAR_MOVIES })
  });

  it('action creator changeSortType', () => {
    const action = Action.changeSortType('rating');
    expect(action).toEqual({ type: Action.CHANGE_SORT_TYPE, payload: 'rating' })
  });

  it('action creator fetchMovies', () => {
    let middlewares = [thunk];
    let mockStore = configureStore(middlewares);
    let store = mockStore(initialState);
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve) => {
        resolve({
          json: () => { results: yodaMovies }
        });
      });
    });
    store.dispatch(Action.fetchMovies('the new yoda chronicles', 'desc')).then(() => {
      expect(store.getActions()).toEqual([{ type: Action.FETCH_MOVIES, payload: yodaMovies }]);
    });
  });

  it('action creator fetchMovie', () => {
    let middlewares = [thunk];
    let mockStore = configureStore(middlewares);
    let store = mockStore(initialState);
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve) => {
        resolve({
          json: () => { movie }
        });
      });
    });
    store.dispatch(Action.fetchMovie('671')).then(() => {
      expect(store.getActions()).toEqual([{ type: Action.SELECT_MOVIE, payload: movie }]);
    });
  });
});