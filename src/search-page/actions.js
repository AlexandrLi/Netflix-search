const API_KEY_PARAM = 'api_key=e2c6b28a24bafd10044b1fc5397cc4d2';
const ROOT_URL = `https://api.themoviedb.org/3/search`;

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const CHANGE_SEARCH_TYPE = 'CHANGE_SEARCH_TYPE';
export const CHANGE_SORT_TYPE = 'CHANGE_SORT_TYPE';

function fetchMoviesSuccess(movies) {
  return {
    type: FETCH_MOVIES,
    payload: movies
  }
}

export function fetchMovies(query) {
  return (dispatch, getState) => {
    const { searchType, sortBy } = getState();
    const url = `${ROOT_URL}/${searchType}?${API_KEY_PARAM}&query=${query}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        if (searchType === 'movie') {
          dispatch(fetchMoviesSuccess(sort(sortBy, response.results)));
        } else {
          dispatch(fetchMoviesSuccess(sort(sortBy, response.results.map(movie => {
            return {
              id: movie.id,
              title: movie.name,
              release_date: movie.first_air_date,
              poster_path: movie.poster_path,
              vote_average: movie.vote_average
            }
          }))));
        }
      });
  }
}

export function changeSearchType(type) {
  return {
    type: CHANGE_SEARCH_TYPE,
    payload: type
  }
}

export function changeSortType(type) {
  return {
    type: CHANGE_SORT_TYPE,
    payload: type
  }
}

function sort(type, data) {
  if (type === 'release') {
    return data.sort((item1, item2) => {
      if (!item1.release_date) {
        return 1;
      } else {
        return (Date.parse(item2.release_date) - Date.parse(item1.release_date))
      }
    })
  } else {
    return data.sort((item1, item2) => { return (item2.vote_average - item1.vote_average) })
  }
}

export function sortMovies(type) {
  return (dispatch, getState) => {
    const { movies } = getState();
    dispatch(changeSortType(type));
    dispatch(fetchMoviesSuccess(sort(type, movies)));
  }
}