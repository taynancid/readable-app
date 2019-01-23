import { getHeaders, getApiUrl } from "./helpers";
import { normalizeById } from "../../utils/helpers";
/* Post Related Calls */

export const getAllPosts = () => {
  const headers = getHeaders();
  const api = getApiUrl();

  return fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(posts => {
      return normalizeById(posts);
    });
};

export const getPost = postId => {
  const headers = getHeaders();
  const api = getApiUrl();

  return fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())
    .then(data => data);
};

export const getPostsByCat = category => {
  const headers = getHeaders();
  const api = getApiUrl();

  return fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);
};

export const addPost = post => {
  const headers = getHeaders();
  const api = getApiUrl();

  return fetch(`${api}/posts`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ...post })
  })
    .then(res => res.json())
    .then(data => data);
};

export const deletePost = postID => {
  const headers = getHeaders();
  const api = getApiUrl();

  return fetch(`${api}/posts/${postID}`, {
    method: "DELETE",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => data.id);
};

export const votePost = (id, type) => {
  const headers = getHeaders();
  const api = getApiUrl();

  return fetch(`${api}/posts/${id}`, {
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

export const editPost = ({ id, title, body }) => {
  const headers = getHeaders();
  const api = getApiUrl();

  return fetch(`${api}/posts/${id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, body })
  }).then(res => res.json());
};
