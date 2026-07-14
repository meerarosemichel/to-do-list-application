// =======================================
// Load Tasks from Local Storage
// =======================================

let tasks = JSON.parse(localStorage.getItem("dailyTasks")) || [];

// =======================================
// Get HTML Elements
// =======================================

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");
const progressFill = document.getElementById("progressFill");
const statusMessage = document.getElementById("statusMessage");
const taskSummary = document.getElementById("taskSummary");

// =======================================
// Calculate Values
// =======================================

let total = tasks.length;

let completed = tasks.filter(task => task.completed).length;

let pending = total - completed;

let percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

// =======================================
// Display Dashboard
// =======================================

totalTasks.textContent = total;
completedTasks.textContent = completed;
pendingTasks.textContent = pending;

// =======================================
// Progress Bar
// =======================================

progressFill.style.width = percentage + "%";
progressFill.textContent = percentage + "%";

// =======================================
// Motivation Message
// =======================================

if (percentage === 100 && total > 0) {

    statusMessage.textContent = "🎉 Excellent! All Tasks Completed";

}
else if (percentage >= 75) {

    statusMessage.textContent = "👏 Great Work! Almost Finished";

}
else if (percentage >= 50) {

    statusMessage.textContent = "💪 Keep Going! You're Halfway There";

}
else if (percentage > 0) {

    statusMessage.textContent = "🚀 Good Start! Keep Working";

}
else {

    statusMessage.textContent = "📅 Start Planning Your Day";

}

// =======================================
// Display Task Summary
// =======================================

taskSummary.innerHTML = "";

tasks.forEach(function(task){

    let priorityClass = task.priority.toLowerCase();

    let statusClass = task.completed ? "completed" : "pending";

    let statusText = task.completed ? "Completed" : "Pending";

    taskSummary.innerHTML += `

    <tr>

        <td>${task.task}</td>

        <td>${task.time}</td>

        <td>

            <span class="${priorityClass}">
                ${task.priority}
            </span>

        </td>

        <td>

            <span class="${statusClass}">
                ${statusText}
            </span>

        </td>

    </tr>

    `;

});