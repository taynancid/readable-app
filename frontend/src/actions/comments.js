import * as API from "../utils/api";
import { handleInitialData } from "./shared";
import { formatComment } from "../utils/helpers";
export const GET_COMMENTS = "GET_COMMENTS";
export const VOTE_COMMENT = "VOTE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";

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

function deleteComment(id) {
  return {
    type: DELETE_COMMENT,
    id
  };
}

export function handleDeleteComment(id) {
  return dispatch => {
    API.deleteComment(id)
      .then(({ id }) => dispatch(deleteComment(id)))
      .then(() => dispatch(handleInitialData()));
  };
}

function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
  };
}

export function handleAddComment(comment) {
  return dispatch => {
    const formatedCom = formatComment(comment);
    API.addComment(formatedCom)
      .then(comment => dispatch(addComment(comment)))
      .then(() => dispatch(handleInitialData()));
  };
}
