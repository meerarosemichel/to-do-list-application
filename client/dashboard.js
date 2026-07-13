// ====================================
// Load Tasks from Local Storage
// ====================================

let tasks = JSON.parse(localStorage.getItem("dailyTasks")) || [];

// ====================================
// Get HTML Elements
// ====================================

const totalTask = document.getElementById("totalTask");
const completedTask = document.getElementById("completedTask");
const pendingTask = document.getElementById("pendingTask");
const productivity = document.getElementById("productivity");

const todayTasks = document.getElementById("todayTasks");
const todayReminder = document.getElementById("todayReminder");

const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

// ====================================
// Calculate Statistics
// ====================================

const total = tasks.length;

const completed = tasks.filter(task => task.completed).length;

const pending = total - completed;

const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

// ====================================
// Display Statistics
// ====================================

totalTask.textContent = total;

completedTask.textContent = completed;

pendingTask.textContent = pending;

productivity.textContent = percentage + "%";

// ====================================
// Progress Bar
// ====================================

progressBar.style.width = percentage + "%";

progressText.textContent = percentage + "% Completed";

// ====================================
// Today's Tasks
// ====================================

todayTasks.innerHTML = "";

if(tasks.length === 0){

    todayTasks.innerHTML = "<p>No tasks available.</p>";

}else{

    tasks.forEach(function(task){

        todayTasks.innerHTML += `

        <div class="task-item">

            <input type="checkbox"
            ${task.completed ? "checked" : ""}
            disabled>

            <span>

                ${task.task}

            </span>

        </div>

        `;

    });

}

// ====================================
// Pending Reminders
// ====================================

todayReminder.innerHTML = "";

const pendingTasks = tasks.filter(task => !task.completed);

if(pendingTasks.length === 0){

    todayReminder.innerHTML = "<p>🎉 No Pending Reminders</p>";

}else{

    pendingTasks.forEach(function(task){

        todayReminder.innerHTML += `

        <div class="reminder-item">

            🔔 <strong>${task.task}</strong><br>

            <small>

                ${task.time} | ${task.priority} Priority

            </small>

        </div>

        `;

    });

}