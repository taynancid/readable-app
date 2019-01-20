import { getInitialData } from "../utils/api";
import { receivePosts } from "./posts";
import { receiveCats } from "./categories";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ categories, posts }) => {
      dispatch(receivePosts(posts));
      dispatch(receiveCats(categories));
    });
  };
}
