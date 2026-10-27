// Setting Up Variables
let input = document.querySelector(".add-task input");
let addBtn = document.querySelector(".add-task .add-btn");
let tasksContainer = document.querySelector(".task-content");
let noTasksMsg = document.querySelector(".no-tasks-message");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");
let countTasksNum = 0;
let completedTasksNum = 0;

// Focus On Input Field
window.onload = function () {
  input.focus();
};

// Adding A Task
addBtn.addEventListener("click", function () {
  // Check If Input Is Empty
  if (input.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Enter A Task",
      confirmButtonColor: "#009688",
    });
  } else {
    // Remove No Task Message
    noTasksMsg.remove();
    // Create A Task Box
    let mainSpan = document.createElement("span");
    mainSpan.className = "task-box";
    // Create Paraghraph
    let para = document.createElement("p");
    para.textContent = input.value;
    // Create Buttons Span
    let btnsSpan = document.createElement("span");
    btnsSpan.className = "buttons";
    // Create Complete Button
    let taskCompleteBtn = document.createElement("i");
    taskCompleteBtn.className = "complete-btn fa-solid fa-square-check";
    // Create Delete Button
    let taskDeleteBtn = document.createElement("i");
    taskDeleteBtn.className = "delete-btn fa-solid fa-trash-can";
    // Append Elements
    btnsSpan.appendChild(taskCompleteBtn);
    btnsSpan.appendChild(taskDeleteBtn);
    mainSpan.appendChild(para);
    mainSpan.appendChild(btnsSpan);
    tasksContainer.appendChild(mainSpan);
    // Empty The Input Field
    input.value = "";
    // Increase The Count Tasks Var
    tasksCount.textContent = ++countTasksNum;
  };
});

// Delete Tasks And Finish Them
document.addEventListener("click", (e) => {
  // Delete A Task
  if (e.target.classList.contains("delete-btn")) e.target.parentNode.parentNode.remove();
  // Finish A Task
  if (e.target.classList.contains("complete-btn")) e.target.parentNode.parentNode.classList.toggle("completed");
});