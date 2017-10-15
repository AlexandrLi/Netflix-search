export default function (state = 'RELEASE_DATE', action) {
  console.log(action.payload);
  switch (action.type) {
    case 'CHANGE_SORT_TYPE':
      return action.payload;
    default:
      return state;
  }
}