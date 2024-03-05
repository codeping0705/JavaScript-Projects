
function addTask(){
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if(taskText === ""){
        alert("Please enter Task!");
        return;
    }
    
    const taskList = document.getElementById("taskList");
    const listItem = document.createElement("li");
    listItem.innerHTML = `${taskText}
    <button class="delete-btn" onclick="removeTask(this)">Delete </button>`;
    taskList.appendChild(listItem);
    taskInput.value = "";
}

function removeTask(button){
    const listItem = button.parentNode;
    const taskList = listItem.parentNode;
    taskList.removeChild(listItem);
}