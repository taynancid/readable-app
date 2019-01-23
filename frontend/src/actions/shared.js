import { getInitialData } from "../utils/api";
import { receivePosts } from "./posts";
import { receiveCats } from "./categories";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ categories, posts }) => {
      dispatch(receivePosts(posts));
      dispatch(receiveCats(categories));
      dispatch(hideLoading());
    });
  };
}
