import { normalizeById } from "./helpers";
const api = "http://localhost:3001";

let token = Math.random()
  .toString(36)
  .substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token
};

/* Category Related Call */

export const getAllCat = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

/* Post Related Calls */

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(posts => {
      return normalizeById(posts);
    });

export const getInitialData = () =>
  Promise.all([getAllCat(), getAllPosts()]).then(([categories, posts]) => ({
    categories,
    posts
  }));

export const getPost = postId =>
  fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())
    .then(data => data);

export const getPostsByCat = category =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);

export const addPost = post =>
  fetch(`${api}/posts`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ...post })
  })
    .then(res => res.json())
    .then(data => data);

export const deletePost = postID =>
  fetch(`${api}/posts/${postID}`, {
    method: "DELETE",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => data.id);

export const votePost = (id, type) =>
  fetch(`${api}/posts/${id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option: type })
  })
    .then(res => res.json())
    .then(data => data);

export const editPost = ({ id, title, body }) =>
  fetch(`${api}/posts/${id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, body })
  }).then(res => res.json());

/* Comment Related Calls */

export const getCommentsByPost = postID =>
  fetch(`${api}/posts/${postID}/comments`, { headers })
    .then(res => res.json())
    .then(comments => {
      return normalizeById(comments);
    });

export const addComment = comment =>
  fetch(`${api}/comments`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ...comment })
  })
    .then(res => res.json())
    .then(data => data);

export const getComment = commentId =>
  fetch(`${api}/comments/${commentId}`, { headers })
    .then(res => res.json())
    .then(data => data);

export const voteComment = (id, type) =>
  fetch(`${api}/comments/${id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option: type })
  })
    .then(res => res.json())
    .then(data => data);

export const editComment = comment =>
  fetch(`${api}/comments/${comment.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ...comment })
  }).then(res => res.json());

export const deleteComment = commentId =>
  fetch(`${api}/comments/${commentId}`, {
    method: "DELETE",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => data);
