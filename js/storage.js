export function loadTasks() {
  const savedTasks = localStorage.getItem('dailyPlannerTasks');
  return savedTasks ? JSON.parse(savedTasks) : [];
}

export function saveTasks(tasks) {
  localStorage.setItem('dailyPlannerTasks', JSON.stringify(tasks));
}