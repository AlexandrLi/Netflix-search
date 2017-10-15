export default function (state = [], action) {
  console.log(action.payload);
  switch (action.type) {
    case 'FETCH_MOVIES':
      return [...state, action.payload];
    default:
      return state;
  }
}