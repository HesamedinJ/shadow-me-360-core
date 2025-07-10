export const saveData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadData = (key) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};
