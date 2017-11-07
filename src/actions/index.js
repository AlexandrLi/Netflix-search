const API_KEY_PARAM = 'api_key=e2c6b28a24bafd10044b1fc5397cc4d2';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';
const MOVIE_URL = 'https://api.themoviedb.org/3/movie';
const COLLECTION_URL = 'https://api.themoviedb.org/3/collection';


export const FETCH_MOVIES = 'FETCH_MOVIES';
export const CLEAR_MOVIES = 'CLEAR_MOVIES';
export const SELECT_MOVIE = 'SELECT_MOVIE';
export const CHANGE_SORT_TYPE = 'CHANGE_SORT_TYPE';

function setMovies(movies) {
  return {
    type: FETCH_MOVIES,
    payload: movies
  }
}

export function clearMovies() {
  return {
    type: CLEAR_MOVIES,
  }
}

export function fetchMovies(query, order) {
  return (dispatch, getState) => {
    const { sortBy } = getState();
    const url = `${SEARCH_URL}?${API_KEY_PARAM}&query=${query}`;
    return fetch(url)
      .then(response => response.json())
      .then(response => dispatch(setMovies(sort(response.results, sortBy, order))));
  }
}

function selectMovie(movie) {
  return {
    type: SELECT_MOVIE,
    payload: movie
  }
}

export function fetchMovie(id) {
  return (dispatch) => {
    const url = `${MOVIE_URL}/${id}?${API_KEY_PARAM}`;
    return fetch(url)
      .then(response => response.json())
      .then(response => {
        dispatch(selectMovie(response));
        if (response.belongs_to_collection) {
          const id = response.belongs_to_collection.id;
          return fetch(`${COLLECTION_URL}/${id}?${API_KEY_PARAM}`)
            .then(response => response.json())
            .then(response => dispatch(setMovies(response.parts)));
        } else {
          dispatch(clearMovies());
        }
      });
  }
}

export function changeSortType(type) {
  return {
    type: CHANGE_SORT_TYPE,
    payload: type
  }
}

function sort(data, type, order) {
  let result = [];
  if (type === 'release') {
    result = data.sort((item1, item2) => {
      if (!item1.release_date) {
        return 1;
      } else {
        return (Date.parse(item2.release_date) - Date.parse(item1.release_date))
      }
    })
  } else {
    result = data.sort((item1, item2) => { return (item2.vote_average - item1.vote_average) })
  }
  return order === 'desc' ? result : result.reverse();
}

export function sortMovies(type, order) {
  return (dispatch) => {
    dispatch(changeSortType(type));
    dispatch(reOrder(order));
  }
}

export function reOrder(order) {
  return (dispatch, getState) => {
    const { movies, sortBy } = getState();
    dispatch(setMovies(sort(movies, sortBy, order)));
  }
}