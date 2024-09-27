import { clearScreen, createTaskOnDom, deleteTask, idExists, deleteTodayTask } from "./mainScreenDom";
import { editAndDetailsExpand } from "./editAndDetailsDiv";
import { Todo } from "./logic";
import { todayTodos } from "./dates";
import { projectsFilter } from "./Project_filter";
import { taskEdit } from "./taskEdit";
import { addProjectHandle } from "./mainScreenDom";
import { checkTaskStatus } from "./taskStatus";

const todayTasksBtn = document.querySelector("#todayTasks");
const allTasksBtn = document.querySelector("#allTasks")

const todos = [];


const newTaskData = function () {


    const addTaskBtn = document.querySelector(".addTaskBtn");
    const taskName = document.querySelector("#taskName");
    const taskDetail = document.querySelector("#taskDetails");
    const project = document.querySelector("#project");
    const taskdate = document.querySelector("#taskDate");




    addTaskBtn.addEventListener("click", () => {

        if (taskName.value != "" && taskDetail.value != "" && taskdate.value != "") {

            let sp = project.value + taskName.value + taskdate.value;
            const id = sp.replace(/\s/g, "");
            if (idExists(id, todos)) {
                alert("Todo Already Exist!");
            } else {

                const newTodo = new Todo(project.value, taskName.value, taskDetail.value, taskdate.value, id, false);
                todos.push(newTodo);
                clearScreen();
                todos.forEach((todo) => {
                    createTaskOnDom(todo.taskTitle, todo.taskDetails, todo.taskDate, todo.ID, todo.status);
                })
                checkTaskStatus(todos);
                editAndDetailsExpand();
                deleteTask(todos);
                taskEdit(todos);

            }

        } else {
            alert("Please Input all the fields!");
        }




    })





}


// Event listener for showing today's tasks
todayTasksBtn.addEventListener("click", () => {
    clearScreen();
    const filteredTodayTodos = todayTodos(todos);  // Filter todos for today

    filteredTodayTodos.forEach((t) => {
        createTaskOnDom(t.taskTitle, t.taskDetails, t.taskDate, t.ID, t.status);
    });

    editAndDetailsExpand();
    deleteTodayTask(todos);
    taskEdit(todos);


});

// Event listener for showing all tasks
allTasksBtn.addEventListener("click", () => {
    clearScreen();
    todos.forEach((t) => {
        createTaskOnDom(t.taskTitle, t.taskDetails, t.taskDate, t.ID, t.status);
    });

    editAndDetailsExpand();
    deleteTask(todos);
    taskEdit(todos);
});




addProjectHandle(todos);




export { newTaskData };