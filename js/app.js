let taskList = [];
function addTask() {
  console.log("Task Added");

  let txtName = document.getElementById("txtName").value;
  let txtTask = document.getElementById("txtTask").value;
  let txtDate = document.getElementById("txtDate").value;
  let txtDescription = document.getElementById("txtDescription").value;

  let task = {
    name: txtName,
    task: txtTask,
    date: txtDate,
    description: txtDescription,
  };

  taskList.push(task);
  console.log(taskList);

    localStorage.setItem("task", JSON.stringify(taskList));
    loadAssignTask();
}

function loadAssignTask(){
   let assignedList = document.getElementById("assignedList")

   let tblbody = `
        <tr>
            <th>Name</th>
            <th>Task</th>
            <th>Date</th>
            <th>Description</th>
        </tr>
   `;

  let localStorageAssignedList = localStorage.getItem("task");
    let localTasks = JSON.parse(localStorageAssignedList);

    localTasks.forEach(task => {
        tblbody += `
        <tr>
            <td>${task.name}</td>
            <td>${task.task}</td>
            <td>${task.date}</td>
            <td>${task.description}</td>
        </tr>
        `
    })
    assignedList.innerHTML = tblbody;
}



