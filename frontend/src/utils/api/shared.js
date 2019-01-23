import { getAllCat } from "./categories";
import { getAllPosts } from "./posts";

export const getInitialData = () => {
  return Promise.all([getAllCat(), getAllPosts()]).then(
    ([categories, posts]) => ({
      categories,
      posts
    })
  );
};
