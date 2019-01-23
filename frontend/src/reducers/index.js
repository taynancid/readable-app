import { combineReducers } from "redux";
import posts from "./posts";
import comments from "./comments";
import categories from "./categories";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  posts,
  comments,
  categories,
  loadingBar: loadingBarReducer
});
