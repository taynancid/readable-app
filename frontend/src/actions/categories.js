export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

export function receiveCats(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  };
}
