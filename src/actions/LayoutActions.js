import * as types from '../constants/ActionTypes';


const changePage = (payload) => ({
    type: types.CHANGE_PAGE,
    payload,
  });

const showExplorer = (payload) => ({
    type: types.SHOW_EXPLORER,
    payload,
  });
  
  
  export default {
    changePage,
    showExplorer
  };