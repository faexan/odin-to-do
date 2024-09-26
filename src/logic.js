
class Todo {
    constructor(projectTitle, taskTitle, taskDetails, taskDate, taskID) {
        this.project = projectTitle;
        this.taskTitle = taskTitle;
        this.taskDetails = taskDetails;
        this.taskDate = taskDate;
        this.ID = taskID;
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

    const todo1 = new Todo("Personal", "Do Pushups", "Do twenty pushups", "Today", "Moderate");

}

export { logic };



export { Todo, Project };