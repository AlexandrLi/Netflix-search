export default function (state = 'TITLE', action) {
  console.log(action.payload);
  switch (action.type) {
    case 'CHANGE_SEARCH_TYPE':
      return action.payload;
    default:
      return state;
  }
}