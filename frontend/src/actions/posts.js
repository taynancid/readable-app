import * as API from "../utils/api";
import { formatPost } from "../utils/helpers";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  };
}

function addPost(post) {
  return {
    type: ADD_POST,
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
    type: EDIT_POST,
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
  console.log(id);
  return {
    type: DELETE_POST,
    id
  };
}

export function handleDeletePost(id) {
  return dispatch => {
    return API.deletePost(id).then(id => dispatch(deletePost(id)));
  };
}
