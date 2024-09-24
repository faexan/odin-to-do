class Todo {
    constructor(projectTitle, taskTitle, taskDetails, taskDate) {
        this.project = projectTitle;
        this.taskTitle = taskTitle;
        this.taskDetails = taskDetails;
        this.taskDate = taskDate;
        this.status = false;
    }
}



const newTaskData = function () {


    const addTaskBtn = document.querySelector(".addTaskBtn");
    const taskName = document.querySelector("#taskName");
    const taskDetails = document.querySelector("#taskDetails");
    const project = document.querySelector("#project");
    const taskDate = document.querySelector("#taskDate");


const todos = [];

    addTaskBtn.addEventListener("click", () => {

        if (taskName.value != "" && taskDetails.value != "" && taskDate.value != "") {
            const todo = new Todo(project.value, taskName.value, taskDetails.value, taskDate.value);
            todos.push(todo);
        } else {
            alert("Please Input all the fields");
        }




    })





}


export { newTaskData };