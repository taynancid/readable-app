import * as API from "../utils/api/posts";
import { formatPost } from "../utils/helpers";
import * as actionTypes from "../actions/actionTypes";

export function receivePosts(posts) {
  return {
    type: actionTypes.RECEIVE_POSTS,
    posts
  };
}

function addPost(post) {
  return {
    type: actionTypes.ADD_POST,
    post
  };
}

export function handleAddPost(post) {
  return dispatch => {
    const formatedPost = formatPost(post);
    return API.addPost(formatedPost).then(post => dispatch(addPost(post)));
  };
}

function editPost({ id, title, body }) {
  return {
    type: actionTypes.EDIT_POST,
    id,
    title,
    body
  };
}

export function handleEditPost(post) {
  return dispatch => {
    return API.editPost(post).then(post => dispatch(editPost(post)));
  };
}

function deletePost(id) {
  return {
    type: actionTypes.DELETE_POST,
    id
  };
}

export function handleDeletePost(id) {
  return dispatch => {
    return API.deletePost(id).then(id => dispatch(deletePost(id)));
  };
}

function votePost(id, voteScore) {
  return {
    type: actionTypes.VOTE_POST,
    id,
    voteScore
  };
}

export function handleVotePost(id, voteType) {
  return dispatch => {
    return API.votePost(id, voteType).then(({ id, voteScore }) =>
      dispatch(votePost(id, voteScore))
    );
  };
}
