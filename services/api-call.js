export const apiCall = (url, method) => {
  return fetch(url, method)
    .then(res => res.json)
    .then(data => data);
};
