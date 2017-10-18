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
    fetch(url)
      .then(response => response.json())
      .then(response => {
        if (searchType === 'movie') {
          dispatch(fetchMoviesSuccess(response.results.sort((m1, m2) => { return (new Date(m2.release_date).getTime() - new Date(m1.release_date).getTime()) })));
        } else {
          dispatch(fetchMoviesSuccess(response.results.map(movie => {
            return {
              id: movie.id,
              title: movie.name,
              release_date: movie.first_air_date,
              poster_path: movie.poster_path,
              vote_average: movie.vote_average
            }
          })));
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