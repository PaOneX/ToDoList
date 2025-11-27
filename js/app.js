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
}

function loadAssignTask(){
    
}


