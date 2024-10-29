const taskInput = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const taskList = document.getElementById("task-list");
const addTaskBtn = document.getElementById("add-task-btn");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value;
    const taskDateTime = dateInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <div class="task-text">
            <strong>${taskText}</strong>
            <small>${taskDateTime ? ` (Due: ${taskDateTime})` : ""}</small>
        </div>
        <div class="task-actions">
            <button class="edit-btn">Edit</button>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    taskList.appendChild(li);

    const editBtn = li.querySelector(".edit-btn");
    const completeBtn = li.querySelector(".complete-btn");
    const deleteBtn = li.querySelector(".delete-btn");

    editBtn.addEventListener("click", () => editTask(li));
    completeBtn.addEventListener("click", () => toggleCompleteTask(li));
    deleteBtn.addEventListener("click", () => deleteTask(li));

    taskInput.value = "";
    dateInput.value = "";
}

function editTask(taskItem) {
    const taskTextElement = taskItem.querySelector(".task-text strong");
    const taskText = taskTextElement.textContent;
    const newTaskText = prompt("Edit Task:", taskText);

    if (newTaskText !== null && newTaskText !== "") {
        taskTextElement.textContent = newTaskText;
    }
}

function toggleCompleteTask(taskItem) {
    taskItem.classList.toggle("completed");
}

function deleteTask(taskItem) {
    taskList.removeChild(taskItem);
}
