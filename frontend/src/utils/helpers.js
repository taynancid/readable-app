export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export const normalizeById = arr => {
  const obj = Object.assign({}, arr);

  let normalized = {};

  for (const child in obj) {
    normalized = { ...normalized, [obj[child].id]: obj[child] };
  }

  return normalized;
};

function generateUID() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}

export function formatPost(post) {
  const { author, body, title, category } = post;
  return {
    id: generateUID(),
    timestamp: Date.now(),
    title,
    body,
    author,
    category,
    voteScore: 0,
    deleted: false,
    commentCount: 0
  };
}
