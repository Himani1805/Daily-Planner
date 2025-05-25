// Handles HTML elements
import { saveTasks } from "./storage.js";

export function renderTasks(tasks, container) {
  container.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "task-item";
    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button class="complete-btn">✅</button>
        <button class="delete-btn">🗑️</button>
      </div>
    `;

    li.querySelector(".complete-btn").addEventListener("click", () => {
      task.completed = !task.completed;
      saveTasks(tasks);
      renderTasks(tasks, container);
    });

    li.querySelector(".delete-btn").addEventListener("click", () => {
      const index = tasks.indexOf(task);
      tasks.splice(index, 1);
      saveTasks(tasks);
      renderTasks(tasks, container);
    });

    container.appendChild(li);
  });
}
