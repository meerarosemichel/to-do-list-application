// ===============================
// Get Reminder Container
// ===============================

const reminderContainer = document.getElementById("reminderContainer");

// ===============================
// Load Tasks
// ===============================

let tasks = JSON.parse(localStorage.getItem("dailyTasks")) || [];

// Display Pending Tasks
displayReminders();

// ===============================
// Display Reminder Cards
// ===============================

function displayReminders() {

    reminderContainer.innerHTML = "";

    // Show only pending tasks
    const pendingTasks = tasks.filter(task => !task.completed);

    if (pendingTasks.length === 0) {

        reminderContainer.innerHTML = `

        <div class="no-task">

            <i class="fa-solid fa-circle-check"></i>

            <h2>No Pending Tasks</h2>

            <p>Great! You have completed all your tasks.</p>

        </div>

        `;

        return;
    }

    pendingTasks.forEach(function(task) {

        // Find original index in tasks array
        const originalIndex = tasks.indexOf(task);

        reminderContainer.innerHTML += `

        <div class="reminder-card">

            <h3>${task.task}</h3>

            <p><strong>Time :</strong> ${task.time}</p>

            <p><strong>Priority :</strong> ${task.priority}</p>

            <span class="pending">Pending</span>

            <br><br>

            <button onclick="completeTask(${originalIndex})">

                ✔ Completed

            </button>

            <button onclick="deleteTask(${originalIndex})">

                🗑 Delete

            </button>

        </div>

        `;
    });

}

// ===============================
// Complete Task
// ===============================

function completeTask(index) {

    tasks[index].completed = true;

    localStorage.setItem("dailyTasks", JSON.stringify(tasks));

    displayReminders();

}

// ===============================
// Delete Task
// ===============================

function deleteTask(index) {

    if (confirm("Delete this reminder?")) {

        tasks.splice(index, 1);

        localStorage.setItem("dailyTasks", JSON.stringify(tasks));

        displayReminders();

    }

}