import { clearScreen, createTaskOnDom } from "./mainScreenDom";



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
    const taskDetail = document.querySelector("#taskDetails");
    const project = document.querySelector("#project");
    const taskdate = document.querySelector("#taskDate");


const todos = [];

    addTaskBtn.addEventListener("click", () => {

        if (taskName.value != "" && taskDetail.value != "" && taskdate.value != "") {
            const newTodo = new Todo(project.value, taskName.value, taskDetail.value, taskdate.value);
            todos.push(newTodo);
            clearScreen();
            todos.forEach((todo) => {
                createTaskOnDom(todo.taskTitle, todo.taskDetails, todo.taskDate);
            })

        } else {
            alert("Please Input all the fields");
        }




    })





}


export { newTaskData };