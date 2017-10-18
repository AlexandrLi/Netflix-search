const API_KEY_PARAM = 'api_key=e2c6b28a24bafd10044b1fc5397cc4d2';
const ROOT_URL = `https://api.themoviedb.org/3/search`;

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const CHANGE_SEARCH_TYPE = 'CHANGE_SEARCH_TYPE';

function fetchMoviesSuccess(movies) {
  return {
    type: FETCH_MOVIES,
    payload: movies
  }
}

export function fetchMovies(query) {
  return (dispatch, getState) => {
    const { searchType } = getState();
    const url = `${ROOT_URL}/${searchType}?${API_KEY_PARAM}&query=${query}`;
    let request = fetch(url)
      .then(response => response.json())
      .then(response => dispatch(fetchMoviesSuccess(response.results)));
  }
}

export function changeSearchType(type) {
  return {
    type: CHANGE_SEARCH_TYPE,
    payload: type
  }
}