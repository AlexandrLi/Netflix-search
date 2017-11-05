import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers'

const composeEnhancers =  compose;

export default (initialState) => createStore(RootReducer, initialState, composeEnhancers(applyMiddleware(ReduxThunk)));