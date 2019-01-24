import * as actionTypes from "../actions/actionTypes";

export function receiveCats(categories) {
  return {
    type: actionTypes.RECEIVE_CATEGORIES,
    categories
  };
}
