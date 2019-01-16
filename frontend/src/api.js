const api = "http://localhost:3001";

let token = Math.random()
  .toString(36)
  .substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token
};

export const getAllCat = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);

export const getPost = postID =>
  fetch(`${api}/posts/${postID}`, { headers })
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

export const votePost = (id, type) =>
  fetch(`${api}/posts/${id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: {
      option: "upVote"
    }
  })
    .then(res => res.json())
    .then(data => data);
