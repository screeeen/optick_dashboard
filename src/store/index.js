import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
// import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers/index';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeWithDevTools;
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware, socketIOMiddleware))); // uncomment for development
// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware)); // 
const store = createStore(rootReducer, applyMiddleware(loggerMiddleware)); // uncomment for production

export default store;