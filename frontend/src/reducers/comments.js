import {
  GET_COMMENTS,
  VOTE_COMMENT,
  DELETE_COMMENT
} from "../actions/comments";

export default function comments(state = {}, action) {
  const { comments, id, voteScore } = action;
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
    default:
      return state;
  }
}
