import "./styles.css";
import "./header.css";
import "./container.css";
import "./sidebar.css";
import "./task.css";



import { menuDisplay } from "./menuDiv";
import { logic } from "./logic.js";
import mainScreenDom from "./mainScreenDom.js";
import { newTaskData } from "./userInput.js";
import { addProjectHandle } from "./mainScreenDom.js";
import { addDays, format } from 'date-fns';
import { localStorageFun } from "./localStorage.js";
import { createTaskOnDom } from "./mainScreenDom.js";
import { checkTaskStatus } from "./taskStatus.js";
import { initialProjectHandle } from "./mainScreenDom.js";
import { deleteTask } from "./mainScreenDom.js";
import { taskEdit } from "./taskEdit.js";
import { markImpt } from "./markImportant.js";
import { editAndDetailsExpand } from "./editAndDetailsDiv.js";
import { saveTasksInLocalStorage } from "./localStorage.js";


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








mainScreenDom();

menuDisplay();

localStorageFun();



newTaskData();


