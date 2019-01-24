import * as API from "../utils/api/comments";
import { handleInitialData } from "./shared";
import { formatComment } from "../utils/helpers";
import * as actionTypes from "../actions/actionTypes";

function getComments(comments) {
  return {
    type: actionTypes.GET_COMMENTS,
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
    type: actionTypes.VOTE_COMMENT,
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
    type: actionTypes.DELETE_COMMENT,
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
    type: actionTypes.ADD_COMMENT,
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

function editComment({ id, author, body }) {
  return {
    type: actionTypes.EDIT_COMMENT,
    id,
    author,
    body
  };
}

export function handleEditComment(comment) {
  return dispatch => {
    API.editComment(comment).then(comment => dispatch(editComment(comment)));
  };
}
