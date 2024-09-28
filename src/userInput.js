import { clearScreen, createTaskOnDom, deleteTask, idExists, deleteTodayTask, initialProjectHandle, newProjectFilter } from "./mainScreenDom";
import { editAndDetailsExpand } from "./editAndDetailsDiv";
import { Todo } from "./logic";
import { todayTodos, weekTodos } from "./dates";
import { projectsFilter } from "./Project_filter";
import { taskEdit } from "./taskEdit";
import { addProjectHandle } from "./mainScreenDom";
import { checkTaskStatus } from "./taskStatus";
import { markImpt } from "./markImportant";
import { saveTasksInLocalStorage } from "./localStorage";
import { addTaskUnExpand } from "./form_unexpanded";
import { displayHeading } from "./mainScreenHeading";


const todayTasksBtn = document.querySelector("#todayTasks");
const allTasksBtn = document.querySelector("#allTasks");
const weekyBtn = document.querySelector("#sevenDaysTasks");
const imptortantTasksBtn = document.querySelector("#impTasks");



const todos = JSON.parse(localStorage.getItem('tasks')) || [];


const newTaskData = function () {


    const addTaskBtn = document.querySelector(".addTaskBtn");
    const taskName = document.querySelector("#taskName");
    const taskDetail = document.querySelector("#taskDetails");
    const project = document.querySelector("#projectsDropDown");
    const taskdate = document.querySelector("#taskDate");




    addTaskBtn.addEventListener("click", () => {

        if (taskName.value != "" && taskDetail.value != "" && taskdate.value != "") {

            let sp = project.value + taskName.value + taskdate.value;
            const id = sp.replace(/\s/g, "");
            if (idExists(id, todos)) {
                alert("Todo Already Exist!");
                taskName.value = "";
            } else {
                const newTodo = new Todo(project.value, taskName.value, taskDetail.value, taskdate.value, id, false, false);
                todos.push(newTodo);
                saveTasksInLocalStorage(todos);
                newProjectFilter(todos);
                addTaskUnExpand(taskName, taskDetail);
                clearScreen();
                todos.forEach((todo) => {
                    createTaskOnDom(todo.taskTitle, todo.taskDetails, todo.taskDate, todo.ID, todo.status, todo.important);
                })
                initialProjectHandle(todos);
                checkTaskStatus(todos);
                editAndDetailsExpand();
                deleteTask(todos);
                taskEdit(todos);
                markImpt(todos);
                saveTasksInLocalStorage(todos);
            }

        } else {
            alert("Please Input all the fields!");
        }




    })





}



todayTasksBtn.addEventListener("click", () => {
    clearScreen();
    const filteredTodayTodos = todayTodos(todos);  // Filter todos for today
    displayHeading("Today Tasks")
    filteredTodayTodos.forEach((t) => {
        createTaskOnDom(t.taskTitle, t.taskDetails, t.taskDate, t.ID, t.status, t.important);
    });
    checkTaskStatus(todos)
    editAndDetailsExpand();
    deleteTodayTask(todos);
    taskEdit(todos);
    markImpt(todos);
    saveTasksInLocalStorage(todos);
});



allTasksBtn.addEventListener("click", () => {
    displayHeading("All Tasks");
    clearScreen();
    todos.forEach((t) => {
        createTaskOnDom(t.taskTitle, t.taskDetails, t.taskDate, t.ID, t.status, t.important);
    });
    checkTaskStatus(todos);
    editAndDetailsExpand();
    deleteTask(todos);
    taskEdit(todos);
    markImpt(todos);
    saveTasksInLocalStorage(todos);
});


weekyBtn.addEventListener("click", () => {
    displayHeading("Next 7 Days Tasks")
    clearScreen();
    const weeklyTodos = weekTodos(todos);
    weeklyTodos.forEach((t) => {
        createTaskOnDom(t.taskTitle, t.taskDetails, t.taskDate, t.ID, t.status, t.important)
    })
    checkTaskStatus(todos);
    editAndDetailsExpand();
    deleteTodayTask(todos);
    taskEdit(todos);
    markImpt(todos);
    saveTasksInLocalStorage(todos);
})

imptortantTasksBtn.addEventListener("click", () => {
    displayHeading("Important Tasks")
    clearScreen();
    todos.forEach((obj) => {
        if (obj.important == true) {
            createTaskOnDom(obj.taskTitle, obj.taskDetails, obj.taskDate, obj.ID, obj.status, obj.important)
        }
    })
    checkTaskStatus(todos);
    editAndDetailsExpand();
    deleteTodayTask(todos);
    taskEdit(todos);
    markImpt(todos);
})

addProjectHandle(todos);




export { newTaskData };