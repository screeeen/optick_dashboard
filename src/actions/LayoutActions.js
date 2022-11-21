import * as types from "../actionTypes/ActionTypes";

const changePage = (payload) => ({
  type: types.CHANGE_PAGE,
  payload,
});

const showExplorer = (payload) => ({
  type: types.SHOW_EXPLORER,
  payload,
});

export { changePage, showExplorer };
