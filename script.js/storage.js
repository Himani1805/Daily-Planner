function saveTasks() {
    const tasks = [];
    document.querySelectorAll('.task-item').forEach(task => {
        tasks.push({
            text: task.querySelector('.task-text').textContent,
            completed: task.querySelector('.task-checkbox').checked
        });
    });
    
    localStorage.setItem('dailyPlannerTasks', JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('dailyPlannerTasks')) || [];
    const taskList = document.getElementById('task-list');
    
    // Clear existing tasks (but keep in DOM for animation)
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    
    // Add saved tasks
    savedTasks.forEach(task => {
        addTask(task.text, task.completed);
    });
}