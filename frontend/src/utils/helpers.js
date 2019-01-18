export const normalizeById = arr => {
  const obj = Object.assign({}, arr);

  let normalized = {};

  for (const child in obj) {
    normalized = { ...normalized, [obj[child].id]: obj[child] };
  }

  return normalized;
};
