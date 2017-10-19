export default function (state = 'release', action) {
  switch (action.type) {
    case 'CHANGE_SORT_TYPE':
      return action.payload;
    default:
      return state;
  }
}