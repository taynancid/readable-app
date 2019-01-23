import { getHeaders, getApiUrl } from "./helpers";
import { normalizeById } from "../../utils/helpers";

/* Comment Related Calls */

export const getCommentsByPost = postID => {
  const headers = getHeaders();
  const api = getApiUrl();

  return fetch(`${api}/posts/${postID}/comments`, { headers })
    .then(res => res.json())
    .then(comments => {
      return normalizeById(comments);
    });
};

export const addComment = comment => {
  const headers = getHeaders();
  const api = getApiUrl();

  return fetch(`${api}/comments`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ...comment })
  })
    .then(res => res.json())
    .then(data => data);
};

export const getComment = commentId => {
  const headers = getHeaders();
  const api = getApiUrl();

  return fetch(`${api}/comments/${commentId}`, { headers })
    .then(res => res.json())
    .then(data => data);
};

export const voteComment = (id, type) => {
  const headers = getHeaders();
  const api = getApiUrl();

  return fetch(`${api}/comments/${id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option: type })
  })
    .then(res => res.json())
    .then(data => data);
};

export const editComment = comment => {
  const headers = getHeaders();
  const api = getApiUrl();

  return fetch(`${api}/comments/${comment.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ...comment })
  }).then(res => res.json());
};

export const deleteComment = commentId => {
  const headers = getHeaders();
  const api = getApiUrl();

  return fetch(`${api}/comments/${commentId}`, {
    method: "DELETE",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => data);
};
