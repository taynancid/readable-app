import * as API from "../utils/api";
export const GET_COMMENTS = "GET_COMMENTS";
export const VOTE_COMMENT = "VOTE_COMMENT";

function getComments(comments) {
  return {
    type: GET_COMMENTS,
    comments
  };
}

export function handleGetComments(postId) {
  return dispatch => {
    return API.getCommentsByPost(postId).then(comments =>
      dispatch(getComments(comments))
    );
  };
}

function voteComment(id, voteScore) {
  return {
    type: VOTE_COMMENT,
    id,
    voteScore
  };
}

export function handleVoteComment(id, voteType) {
  return dispatch => {
    return API.voteComment(id, voteType).then(({ id, voteScore }) =>
      dispatch(voteComment(id, voteScore))
    );
  };
}
