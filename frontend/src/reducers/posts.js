import { RECEIVE_POSTS, ADD_POST, EDIT_POST } from "../actions/posts";

export default function posts(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        ...action.posts
      };
    case ADD_POST:
      const { post } = action;
      return {
        ...state,
        [post.id]: post
      };
    case EDIT_POST:
      const { id, title, body } = action;
      return {
        ...state,
        [id]: {
          ...state[id],
          title,
          body
        }
      };

    default:
      return state;
  }
}
