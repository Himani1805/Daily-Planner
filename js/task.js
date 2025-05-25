// Create, complete, delete tasks
export function createTask(text) {
  return {
    id: Date.now(),
    text,
    completed: false
  };
}
