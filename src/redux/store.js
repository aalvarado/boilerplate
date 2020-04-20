/* eslint-disable no-underscore-dangle */

import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';

export const history = createBrowserHistory();

const isDevelop = process.env.NODE_ENV !== 'production';
const initialState = window.__INITIAL_STATE__;
const composeEnhancer = (isDevelop && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunkMiddleware)),
);

export default store;