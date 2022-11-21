// @flow

import Layout from "../model/Layout";
import * as types from "../actionTypes/ActionTypes";

//default layout
const initialState = new Layout();

const LayoutReducer = (layout = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_PAGE: {
      return {
        ...layout,
        currentPage: action.payload,
      };
    }

    case types.SHOW_EXPLORER: {
      return {
        ...layout,
        showExplorer: action.payload,
      };
    }

    default:
      return layout;
  }
};

export default LayoutReducer;
