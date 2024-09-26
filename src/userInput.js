import { clearScreen, createTaskOnDom, deleteTask, idExists } from "./mainScreenDom";
import { editAndDetailsExpand } from "./editAndDetailsDiv";
import { Todo } from "./logic";
import { todayTodos, todayTodos } from "./dates";

import { taskEdit } from "./taskEdit";


const todayTasksBtn = document.querySelector("#todayTasks")

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

                const newTodo = new Todo(project.value, taskName.value, taskDetail.value, taskdate.value, id);
                todos.push(newTodo);
                clearScreen();
                todos.forEach((todo) => {
                    createTaskOnDom(todo.taskTitle, todo.taskDetails, todo.taskDate, todo.ID);
                })
                editAndDetailsExpand();
                deleteTask(todos);
                taskEdit(todos);

            }

        } else {
            alert("Please Input all the fields!");
        }




    })





}


export { newTaskData };