/**
 * Created on 17.04.2017.
 */
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '../reducers';

// Load middleware
let middleware = [
  thunk, // Allows action creators to return functions (not just plain objects)
];

let logger = createLogger()

if (__DEV__) {
  // Dev-only middleware
  middleware = [
    ...middleware,
    logger, // Logs state changes to the dev console
  ];
}


export default function configureStore() {
  // Init redux store (using the given redux & middleware)
  return store = compose(
      applyMiddleware(...middleware),
  )(createStore)(rootReducer);
}