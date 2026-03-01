const initialTasks = [
  {
    id: 1,
    title: "GymWork",
    description: "Work those muscles",
    status: "todo",
  },
  {
    id: 2,
    title: "Study",
    description: "Work those brains",
    status: "doing",
  },
  {
    id: 3,
    title: "Sleep",
    description:
      "Rest that body",
    status: "done",
  },
];

//function to add tasks
function addTasks() {
 // Ask the user for the title and description of task 
const taskTitle = prompt("Enter task title:");
const taskDescription = prompt("Enter task description:");

// Ask for the status of task and convert it to lowercase
let taskStatus = prompt(
  "Enter task status (todo, doing, done):"
).toLowerCase();

// Keep asking until the user enters a valid status for task
while (
  taskStatus !== "todo" &&
  taskStatus !== "doing" &&
  taskStatus !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  taskStatus = prompt(
    "Enter task status (todo, doing, done):"
  ).toLowerCase();
}

// Create a new task object with a unique id
const newTask = {
  id: initialTasks.length + 1,
  title: taskTitle,
  description: taskDescription,
  status: taskStatus,
}

// Add the new task to the initialTasks array
initialTasks.push(newTask);
}

//Keep adding task until user has 6 in total
while (initialTasks.length < 6) {
  addTasks();
}

if (initialTasks.length === 6) {
  alert("There are enough tasks on your board, please check them in the console");
}

// Log all tasks to the console
console.log("All Tasks:", initialTasks);

//filter function for all done tasks
 const getDoneTasks = initialTasks.filter((task) => task.status === "done");

 // Log done tasks to the console
 console.log("Completed Tasks:", getDoneTasks);