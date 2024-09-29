class Todo {
  constructor(
    projectTitle,
    taskTitle,
    taskDetails,
    taskDate,
    taskID,
    status,
    important,
  ) {
    this.project = projectTitle;
    this.taskTitle = taskTitle;
    this.taskDetails = taskDetails;
    this.taskDate = taskDate;
    this.ID = taskID;
    this.status = status;
    this.important = important;
  }
}

class Project {
  constructor(name, id) {
    this.name = name;
    this.ID = id;
  }
}

const todos = [];

function allTodos(todo) {
  todos.push(todo);
}

const logic = function () {
  const todo1 = new Todo(
    "Personal",
    "Do Pushups",
    "Do twenty pushups",
    "Today",
    "Moderate",
  );
};

export { logic };

export { Todo, Project };
