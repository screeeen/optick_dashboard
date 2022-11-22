import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers/index';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});

const store = createStore(rootReducer); // uncomment for production
// const store = createStore(rootReducer, applyMiddleware(loggerMiddleware)); // uncomment for production

export default store;