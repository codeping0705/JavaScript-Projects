function addTask() {

    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Enter 'Task' before adding it to-do list!");
        return;
    }
    console.log(taskText);

    const taskList = document.getElementById("taskList");
    const listItem = document.createElement('li');
    listItem.innerHTML = `${taskText}\t \t \t
    <button class="btn-rvm" onclick="removeTask(this)">Delete </button>
    <button class="btn-cp" onclick="toggleTask(this)">Compeleted </button>
    <hr>`;
    taskList.appendChild(listItem);
    taskInput.value = "";
}

function removeTask(button) {
    const listItem = button.parentNode;
    const taskList = listItem.parentNode;
    taskList.removeChild(listItem);
}

function toggleTask(button) {
    const listItem = button.parentNode;
    listItem.classList.toggle("completed");
}

// Live Date and Time Function
function updateDateTime() {
    const dateTimeElement = document.getElementById("datetime");
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    dateTimeElement.textContent = "Date:" + date + " Time:"+time;
}

updateDateTime(); // Initial call to update date and time

// Update date and time every second
setInterval(updateDateTime, 1000);