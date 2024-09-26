import { todayTodos } from "./dates";
import { createTaskOnDom } from "./mainScreenDom";
import { deleteTask } from "./mainScreenDom";
import { taskEdit } from "./taskEdit";



const alltasksDiv = document.querySelector(".allTasksDiv");
const todayTasksDiv = document.querySelector(".todayTasksDiv");
const sevenTasksDiv = document.querySelector(".sevenDaysTasks");
const impTasks = document.querySelector(".impTasks");
const projects = document.querySelectorAll(".PMLitems");

const allTasksBtn = document.querySelector("#allTasks")
const todayTasksBtn = document.querySelector("#todayTasks")
const sevenTasksBtn = document.querySelector("#sevendaysTasks")
const impTasksBtn = document.querySelector("#imptTasks")

const homeMenus = document.querySelectorAll(".homeMenus");




const pageshandle = function(todos) {

    homeMenus.forEach((menu)=> {
        menu.addEventListener("click", () => {
            if(menu.id == "allTasks") {

            } else if (menu.id == "todayTasks") {
                
            } else if (menu.id == "sevendaysTasks") {

            } else if (menu.id == "imptTasks") {

            }
        })
    })




}

export {pageshandle};