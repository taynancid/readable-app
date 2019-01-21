import {
  RECEIVE_POSTS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  VOTE_POST
} from "../actions/posts";

export default function posts(state = {}, action) {
  const { id, title, body, post, voteScore } = action;
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        ...action.posts
      };
    case ADD_POST:
      return {
        ...state,
        [post.id]: post
      };
    case EDIT_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          title,
          body
        }
      };
    case DELETE_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          deleted: true
        }
      };
    case VOTE_POST:
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
