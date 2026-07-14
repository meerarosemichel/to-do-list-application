// =============================
// Get HTML Elements
// =============================

const addTaskBtn = document.getElementById("addTask");
const taskTable = document.getElementById("taskTable");

// Load tasks from Local Storage
let tasks = JSON.parse(localStorage.getItem("dailyTasks")) || [];

// Display saved tasks
displayTasks();

// =============================
// Add New Task
// =============================

addTaskBtn.addEventListener("click", function(){

    let time = prompt("Enter Time (Example: 08:00 AM)");

    if(time === null || time.trim() === ""){
        return;
    }

    let task = prompt("Enter Task Name");

    if(task === null || task.trim() === ""){
        return;
    }

    let priority = prompt("Enter Priority (High, Medium, Low)");

    if(priority === null || priority.trim() === ""){
        priority = "Low";
    }

    const newTask = {

        time: time,
        task: task,
        priority: priority,
        completed: false

    };

    tasks.push(newTask);

    saveTasks();

    displayTasks();

});

// =============================
// Display Tasks
// =============================

function displayTasks(){

    taskTable.innerHTML = "";

    tasks.forEach(function(item,index){

        let priorityClass = item.priority.toLowerCase();

        let status = item.completed ? "Completed" : "Pending";

        let statusClass = item.completed ? "completed" : "pending";

        taskTable.innerHTML += `

        <tr>

            <td>

                <input
                type="checkbox"
                ${item.completed ? "checked" : ""}
                onchange="toggleTask(${index})">

            </td>

            <td>${item.time}</td>

            <td>${item.task}</td>

            <td>

                <span class="${priorityClass}">

                    ${item.priority}

                </span>

            </td>

            <td>

                <span class="${statusClass}">

                    ${status}

                </span>

            </td>

            <td>

                <button
                class="delete"
                onclick="deleteTask(${index})">

                <i class="fa-solid fa-trash"></i>

                </button>

            </td>

        </tr>

        `;

    });

}

// =============================
// Checkbox Complete
// =============================

function toggleTask(index){

    tasks[index].completed = !tasks[index].completed;

    saveTasks();

    displayTasks();

}

// =============================
// Delete Task
// =============================

function deleteTask(index){

    if(confirm("Delete this task?")){

        tasks.splice(index,1);

        saveTasks();

        displayTasks();

    }

}

// =============================
// Save Local Storage
// =============================

function saveTasks(){

    localStorage.setItem("dailyTasks", JSON.stringify(tasks));

}