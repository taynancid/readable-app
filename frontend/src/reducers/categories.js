import * as actionTypes from "../actions/actionTypes";

export default function categories(state = [], action) {
  switch (action.type) {
    case actionTypes.RECEIVE_CATEGORIES:
      return {
        ...state,
        ...action.categories
      };
    default:
      return state;
  }
}
