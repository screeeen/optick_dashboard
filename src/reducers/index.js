import { combineReducers } from 'redux';


import LayoutReducer from './LayoutReducer';

const rootReducer = combineReducers({

  layout: LayoutReducer,

});

export default rootReducer;