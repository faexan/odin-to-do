
class Todo {
    constructor(projectTitle, taskTitle, taskDetails, taskDate, taskID) {
        this.project = projectTitle;
        this.taskTitle = taskTitle;
        this.taskDetails = taskDetails;
        this.taskDate = taskDate;
        this.ID = taskID;
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



export { Todo };