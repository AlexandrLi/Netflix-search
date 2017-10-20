import { FETCH_MOVIES, CLEAR_MOVIES } from '../actions'

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.payload;
    case CLEAR_MOVIES:
      return [];
    default:
      return state;
  }
}