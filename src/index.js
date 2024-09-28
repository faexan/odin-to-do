import "./styles.css";
import "./header.css";
import "./container.css";
import "./sidebar.css";
import "./task.css";


import { mainScreenDom } from "./mainScreenDom.js";
import { menuDisplay } from "./menuDiv";
import { logic } from "./logic.js";
import {  deleteTodayTask } from "./mainScreenDom.js";
import { newTaskData } from "./userInput.js";
import { addProjectHandle } from "./mainScreenDom.js";
import { addDays, format } from 'date-fns';
import { localStorageFun, saveProjectsInLocalStorage } from "./localStorage.js";
import { createTaskOnDom } from "./mainScreenDom.js";
import { checkTaskStatus } from "./taskStatus.js";
import { initialProjectHandle } from "./mainScreenDom.js";
import { deleteTask } from "./mainScreenDom.js";
import { taskEdit } from "./taskEdit.js";
import { markImpt } from "./markImportant.js";
import { editAndDetailsExpand } from "./editAndDetailsDiv.js";
import { saveTasksInLocalStorage } from "./localStorage.js";
import { addProjectToDom, addProjectToDropDown, clearProjects } from "./mainScreenDom.js";
import { projectsFilter } from "./Project_filter.js";
import { clearScreen } from "./mainScreenDom.js";


if (JSON.parse(localStorage.getItem('tasks'))) {
    const arr = JSON.parse(localStorage.getItem('tasks'));
    arr.forEach((obj) => {
        createTaskOnDom(obj.taskTitle, obj.taskDetails, obj.taskDate, obj.ID, obj.status, obj.important);
    })
    initialProjectHandle(arr);
    checkTaskStatus(arr);
    editAndDetailsExpand();
    deleteTask(arr);
    taskEdit(arr);
    markImpt(arr);
    saveTasksInLocalStorage(arr);
}


if (JSON.parse(localStorage.getItem('projects'))) {
    const projectsArr = JSON.parse(localStorage.getItem('projects'));
    clearProjects();
    addProjectToDom(projectsArr);
    addProjectToDropDown(projectsArr);
    const projects = document.querySelectorAll(".PMLitems");
    const todosArr = JSON.parse(localStorage.getItem('tasks'));
    projects.forEach((project) => {
        project.addEventListener("click", () => {
            const id = project.id;
            clearScreen();
            const filteredProjectTodo = projectsFilter(todosArr, id);
            filteredProjectTodo.forEach((t) => {
                createTaskOnDom(t.taskTitle, t.taskDetails, t.taskDate, t.ID, t.status, t.important);
            });
            editAndDetailsExpand();
            deleteTodayTask(todosArr);
            taskEdit(todosArr);
            checkTaskStatus(todosArr);
            markImpt(todosArr);
        })
    })
}








mainScreenDom();

menuDisplay();

localStorageFun();



newTaskData();


