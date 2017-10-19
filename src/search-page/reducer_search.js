export default function (state = 'movie', action) {
  switch (action.type) {
    case 'CHANGE_SEARCH_TYPE':
      return action.payload;
    default:
      return state;
  }
}