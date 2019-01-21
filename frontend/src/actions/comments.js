import * as API from "../utils/api";
export const GET_COMMENTS = "GET_COMMENTS";

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
