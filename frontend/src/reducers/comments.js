import * as actionTypes from "../actions/actionTypes";

export default function comments(state = {}, action) {
  const { comments, id, voteScore, comment, author, body } = action;
  switch (action.type) {
    case actionTypes.GET_COMMENTS:
      return {
        ...comments
      };
    case actionTypes.VOTE_COMMENT:
      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore
        }
      };
    case actionTypes.DELETE_COMMENT:
      return {
        ...state,
        [id]: {
          ...state[id],
          deleted: true
        }
      };
    case actionTypes.ADD_COMMENT:
      return {
        ...state,
        [comment.id]: comment
      };
    case actionTypes.EDIT_COMMENT:
      return {
        ...state,
        [id]: {
          ...state[id],
          author,
          body
        }
      };
    default:
      return state;
  }
}
