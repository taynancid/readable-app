import * as actionTypes from "../actions/actionTypes";

export default function posts(state = {}, action) {
  const { id, title, body, post, voteScore } = action;
  switch (action.type) {
    case actionTypes.RECEIVE_POSTS:
      return {
        ...state,
        ...action.posts
      };
    case actionTypes.ADD_POST:
      return {
        ...state,
        [post.id]: post
      };
    case actionTypes.EDIT_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          title,
          body
        }
      };
    case actionTypes.DELETE_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          deleted: true
        }
      };
    case actionTypes.VOTE_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore
        }
      };
    default:
      return state;
  }
}
