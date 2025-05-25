import { saveTasks } from "./storage.js";

export function renderTasks(tasks, container) {
  container.innerHTML = "";
  
  if (tasks.length === 0) {
    container.innerHTML = '<p class="empty-message">No tasks yet. Add one above!</p>';
    return;
  }

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = `task-item ${task.completed ? 'completed' : ''}`;
    li.dataset.id = task.id;

    li.innerHTML = `
      <span class="task-text">${task.text}</span>
      <div class="task-actions">
        <button class="complete-btn" aria-label="Complete task">${task.completed ? '↩' : '✓'}</button>
        <button class="delete-btn" aria-label="Delete task">🗑️</button>
      </div>
    `;

    const completeBtn = li.querySelector(".complete-btn");
    const deleteBtn = li.querySelector(".delete-btn");

    completeBtn.addEventListener("click", () => {
      task.completed = !task.completed;
      saveTasks(tasks);
      li.classList.toggle("completed");
      completeBtn.textContent = task.completed ? '↩' : '✓';
    });

    deleteBtn.addEventListener("click", () => {
      li.classList.add("fade-out");
      setTimeout(() => {
        tasks = tasks.filter(t => t.id !== task.id);
        saveTasks(tasks);
        renderTasks(tasks, container);
      }, 300);
    });

    container.appendChild(li);
  });
}