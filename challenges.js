let taskInput = document.querySelector("input");
let addBtn = document.querySelector(".add");
let taskForm = document.querySelector(".tasks");
let getTasks = JSON.parse(localStorage.getItem("tasks")) || [];

//#region Add New Task
function addNew(task) {
  let tnText = document.createTextNode(task);
  let taskName = document.createElement("span");
  let deleteBtn = document.createElement("button");
  taskName.appendChild(tnText);
  taskName.className = "task_name";
  taskForm.appendChild(taskName);

  deleteBtn.className = "delete";
  deleteBtn.textContent = "delete";
  deleteBtn.style.cssText =
    "background-color:red;color:white;text-transform:uppercase;font-weight:600";
  taskName.appendChild(deleteBtn);
  taskName.style.cssText =
    'display:flex;align-items:center;margin-bottom:1rem;justify-content:space-between;padding:1rem;font-size:1.4rem;color:orangered;background-color:white;width:auto;border-radius:7px;font-weight:600;text-transform:uppercase;font-family: "Asmaa Font",sans-serif;';
}
//#endregion

//#region load  Data
window.onload = () => {
  getTasks.forEach((t) => {
    addNew(t.name);
  });
};

//#endregion

//#region Button Add Task
addBtn.addEventListener("click", (e) => {
  if (taskInput.value.length === 0 || taskInput.value.length < 5) {
    alert("Please type a Task with at least 5 characters");
    e.preventDefault();
  } else {
    check();
    taskInput.value = "";
  }
});

//#endregion

//#region Add Tasks to LocalStorage
const addToLs = () => {
  const list = {
    id: Math.floor(Math.random() * (100 - 10) + 10),
    name: taskInput.value,
  };
  getTasks.push(list);
  localStorage.setItem("tasks", JSON.stringify(getTasks));
};

//#endregion

//#region Checking
const check = () => {
  const taskExists = getTasks.some((task) => task.name === taskInput.value); //here we check if the task name is exists or not
  if (taskExists) {
    alert("this task is Already Exists");
  } else {
    addNew(taskInput.value);
    addToLs();
  }
};
//#endregion

//#region Delete Task
document.addEventListener('click', (e) => {
  if (e.target.className === "delete") {
    const parentTaskItem = e.target.parentElement;
    parentTaskItem.remove();
    let nameOfTask = parentTaskItem.innerHTML;
    let indexOfObj = getTasks.findIndex(o=>{return o.name === nameOfTask;});
    getTasks.splice(indexOfObj,1);
    localStorage.setItem('tasks',JSON.stringify(getTasks));
  }
});

//#endregion