// Setting Up Variables
let input = document.querySelector(".add-task input");
let addBtn = document.querySelector(".add-task .add-btn");
let tasksContainer = document.querySelector(".task-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");
let tasksCountDiv = document.querySelector(".tasks-count");
let tasksCompletedDiv = document.querySelector(".tasks-completed");

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
    // Get No Tasks Messgae Span
    let noTasksMsg = document.querySelector(".no-tasks-message");
    // Check If Message Span Is Existed
    if (document.body.contains(document.querySelector(".no-tasks-message"))) {
      // Remove No Task Message
      noTasksMsg.remove();
    }
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
    // Calculete Tasks Function
    calculateTasks();
    selectAllTasks();
  }
});

// Delete Tasks And Finish Them By Buttons
document.addEventListener("click", (e) => {
  // [1] Delete A Task
  if (e.target.classList.contains("delete-btn")) {
    // Remove The Parent Of The Parent Of The Button
    e.target.parentNode.parentNode.remove();
    // Calculete Tasks Function
    calculateTasks();
    checkEmptyTasks();
  }
  // [2] Finish A Task
  if (e.target.classList.contains("complete-btn")) {
    // Add A (completed) Class To The Task Span
    e.target.parentNode.parentNode.classList.toggle("completed");
    // Calculete Tasks Function
    calculateTasks();
  }
  // [3] Delete All Tasks
  if (e.target.classList.contains("all-deleted-span-btn")) {
    document.querySelectorAll(".task-box").forEach((task) => task.remove());
    calculateTasks();
    checkEmptyTasks();
  }
  // [4] Delete All Completed Tasks
  if (e.target.classList.contains("all-completed-span-btn")) {
    document.querySelectorAll(".task-box.completed").forEach((task) => task.remove());
    calculateTasks();
    checkEmptyTasks();
  }
});

// Add A No Tasks Message Function
function createNoTasksMsg() {
  let msgSpan = document.createElement("span");
  msgSpan.className = "no-tasks-message";
  msgSpan.textContent = "No Tasks To Show";
  tasksContainer.appendChild(msgSpan);
}
// Check Empty Tasks Function
function checkEmptyTasks() {
  //Check If There Is No Task In Tasks Container
  if (document.querySelectorAll(".task-box").length === 0) {
    deleteSelectAllTasks();
    createNoTasksMsg();
    calculateTasks();
  }
}
// Calculate Tasks Function
function calculateTasks() {
  // Update Count Nums Tasks Span
  tasksCompleted.textContent = document.querySelectorAll(
    ".task-box.completed",
  ).length;
  // Update Completed Nums Tasks Span
  tasksCount.textContent = document.querySelectorAll(".task-box").length;
}

// Buttons Of All Deleted And Finish Tasks
function selectAllTasks() {
  if (document.querySelectorAll(".task-box").length > 0) {
    if (!document.querySelector(".all-deleted-span-btn")) {
      // == [[A]] == All Deleted
      // [1] Create All Deleted Span Button
      let allDeletedSpanBtn = document.createElement("span");
      allDeletedSpanBtn.classList.add("all-deleted-span-btn");
      allDeletedSpanBtn.textContent = "Delete All";
      // [2] Append Elements
      tasksCountDiv.appendChild(allDeletedSpanBtn);
    }
    if (!document.querySelector(".all-completed-span-btn")) {
      // == [[B]] == Finish Tasks
      // [1] Create All Deleted Span Button
      let allCompletedSpanBtn = document.createElement("span");
      allCompletedSpanBtn.classList.add("all-completed-span-btn");
      allCompletedSpanBtn.textContent = "Delete All";
      // [2] Append Elements
      tasksCompletedDiv.appendChild(allCompletedSpanBtn);
    }
  }
}

// Remove Control Buttons Completely
function deleteSelectAllTasks() {
  // Getting Buttons
  let allDeletedSpanBtn = document.querySelector(".all-deleted-span-btn");
  let allCompletedSpanBtn = document.querySelector(".all-completed-span-btn");

  // Check If Buttons Are Existed
  if (
    document.body.contains(document.querySelector(".all-deleted-span-btn")) &&
    document.body.contains(document.querySelector(".all-completed-span-btn"))
  ) {
    // Remove Buttons
    allDeletedSpanBtn.remove();
    allCompletedSpanBtn.remove();
  }
}