import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers'

export default (initialState) => createStore(RootReducer, initialState, applyMiddleware(ReduxThunk));