// Runs the app, connects everything
import { createTask } from "./task.js";
import { loadTasks, saveTasks } from "./storage.js";
import { renderTasks } from "./dom.js";
import { debounce, throttle } from "./utils.js";

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const searchInput = document.getElementById("search-input");
const taskList = document.getElementById("task-list");
const clearAllBtn = document.getElementById("clear-all");
const backToTop = document.getElementById("back-to-top");

let tasks = loadTasks();
renderTasks(tasks, taskList);

taskForm.addEventListener("submit", e => {
  e.preventDefault();
  const newTask = createTask(taskInput.value.trim());
  tasks.push(newTask);
  saveTasks(tasks);
  renderTasks(tasks, taskList);
  taskInput.value = "";
});

searchInput.addEventListener("input", debounce(() => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = tasks.filter(task => task.text.toLowerCase().includes(keyword));
  renderTasks(filtered, taskList);
}, 300));

clearAllBtn.addEventListener("click", () => {
  tasks = [];
  saveTasks(tasks);
  renderTasks(tasks, taskList);
});

window.addEventListener("scroll", throttle(() => {
  backToTop.style.display = window.scrollY > 100 ? "block" : "none";
}, 200));

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
