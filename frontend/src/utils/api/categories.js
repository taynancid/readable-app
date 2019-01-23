import { getHeaders, getApiUrl } from "./helpers";
/* Category Related Call */

export const getAllCat = () => {
  const headers = getHeaders();
  const api = getApiUrl();

  return fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);
};
