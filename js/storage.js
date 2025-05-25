export function loadTasks() {
  const savedTasks = localStorage.getItem('dailyPlannerTasks');
  return savedTasks ? JSON.parse(savedTasks) : [];
}

export function saveTasks(tasks) {
  // const savedTasks = localStorage.getItem('dailyPlannerTasks');
  // const data = savedTasks ? JSON.parse(savedTasks) : [];
  // console.log(tasks)
   localStorage.setItem('dailyPlannerTasks', JSON.stringify(tasks));
  
}

