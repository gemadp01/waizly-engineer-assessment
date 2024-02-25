const baseUrl = 'http://localhost:3001/tasks';

export const getAllTodos = async () => {
  const res = await fetch(`${baseUrl}`, { cache: 'no-store' });
  const todos = await res.json();
  return todos;
};

export const addTodo = async (todo) => {
  const res = await fetch(`${baseUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};
