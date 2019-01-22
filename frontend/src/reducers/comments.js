import {
  GET_COMMENTS,
  VOTE_COMMENT,
  DELETE_COMMENT,
  ADD_COMMENT
} from "../actions/comments";

export default function comments(state = {}, action) {
  const { comments, id, voteScore, comment } = action;
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        ...comments
      };
    case VOTE_COMMENT:
      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore
        }
      };
    case DELETE_COMMENT:
      return {
        ...state,
        [id]: {
          ...state[id],
          deleted: true
        }
      };
    case ADD_COMMENT:
      return {
        ...state,
        [comment.id]: comment
      };
    default:
      return state;
  }
}
