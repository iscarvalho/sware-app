"use server";

export const get = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
  const tasks = await response.json();
  return tasks;
};
