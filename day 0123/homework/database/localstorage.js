export function store(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function get(key) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}