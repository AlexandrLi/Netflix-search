const API_KEY = 'e2c6b28a24bafd10044b1fc5397cc4d2';
const ROOT_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;

export const FETCH_MOVIES = 'FETCH_MOVIES';

export function fetchMovies(query) {
  const url = `${ROOT_URL}&query=${query}`;
  let request = fetch(url).then(response => response.json());
  return {
    type: FETCH_MOVIES,
    payload: request
  }
}