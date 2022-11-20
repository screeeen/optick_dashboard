// @flow

import Layout from '../model/Layout';
import * as types from '../constants/ActionTypes';

//default layout
const initialState = new Layout();

export default (layout = initialState, action) => {
  switch (action.type) {
 
    case types.CHANGE_PAGE: {
      return {
        ...layout,
        currentPage: action.page,
      };
    }

    case types.SHOW_EXPLORER: {
      return {
        ...layout,
        showExplorer: action.show,
      };
    }


    default:
      return layout;
  }
};
