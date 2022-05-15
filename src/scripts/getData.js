export const getData = async () => {
  let response;

  await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((res) => (response = res));

  return response;
};
