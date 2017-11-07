import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers'

export default (initialState) => {
  const store = createStore(RootReducer, initialState, composeWithDevTools(applyMiddleware(ReduxThunk)));
  return store;
}