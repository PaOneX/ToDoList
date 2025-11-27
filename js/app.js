let taskList = [];
loadFromLocalStorage();

function addTask() {
  console.log("Task Added");

  let txtName = document.getElementById("txtName").value;
  let txtTask = document.getElementById("txtTask").value;
  let txtDate = document.getElementById("txtDate").value;
  let txtDescription = document.getElementById("txtDescription").value;
  let txtStatus = document.getElementById("txtStatus").value;

  let task = {
    id: generateRandomId(),
    name: txtName,
    task: txtTask,
    date: txtDate,
    description: txtDescription,
    status: txtStatus,
  };

  taskList.push(task);

  updateLocalSttorage();
  updateAssignedTaskTable();
}

function updateAssignedTaskTable() {
  let assignedList = document.getElementById("assignedList");
   const hasCompleted = taskList.some((t) => t.status === "Assigned");
  assignedList.classList.toggle("d-none", !hasCompleted);

  if (assignedList.length == 0) return;
  let tblbody = `
        <tr>
            <th>Name</th>
            <th>Task</th>
            <th>Date</th>
            <th>Description</th>
            <th>Status</th>
        </tr>
   `;

  taskList.forEach((task) => {
    if (task.status == "Assigned") {
      tblbody += `
        <tr>
            <td>${task.name}</td>
            <td>${task.task}</td>
            <td>${task.date}</td>
            <td>${task.description}</td>
            <td>${task.status}</td>
            <td><button class="btn btn-outline-success" onclick="completeTask('${task.id}')">Complete Task</button></td>
        </tr>
        `;
    }
  });
  assignedList.innerHTML = tblbody;
}

function completeTask(id) {
  taskList.forEach((task) => {
    if (task.id == id) {
      task.status = "Completed";
    }
  });

  console.log(taskList);

  updateLocalSttorage();
  updateCompletedTaskTable();
  updateAssignedTaskTable();
}

function updateCompletedTaskTable() {
  let completedList = document.getElementById("completedList");

  const hasCompleted = taskList.some((t) => t.status === "Completed");
  completedList.classList.toggle("d-none", !hasCompleted);

  let tblbody = `
        <tr>
            <th>Name</th>
            <th>Task</th>
            <th>Date</th>
            <th>Description</th>
            <th>Status</th>
        </tr>
   `;

  taskList.forEach((task) => {
    if (task.status == "Completed") {
      tblbody += `
        <tr>
            <td>${task.name}</td>
            <td>${task.task}</td>
            <td>${task.date}</td>
            <td>${task.description}</td>
            <td>${task.status}</td>
        </tr>
        `;
    }
  });

  completedList.innerHTML = tblbody;
}

function updateLocalSttorage() {
  localStorage.setItem("task", JSON.stringify(taskList));
}

function loadFromLocalStorage() {
  taskList = JSON.parse(localStorage.getItem("task")) || [];
  updateAssignedTaskTable();
  updateCompletedTaskTable();
}

function generateRandomId(length = 10) {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
}
