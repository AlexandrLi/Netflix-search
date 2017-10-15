export default function (state = null, action) {
  console.log(action.payload);
  switch (action.type) {
    case 'SELECT_MOVIE':
      return action.payload;
    default:
      return state;
  }
}