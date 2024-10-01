import "./styles.css";
import "./header.css";
import "./container.css";
import "./sidebar.css";
import "./task.css";

import { addDays, format } from "date-fns";
import {
  mainScreenDom,
  deleteTodayTask,
  addProjectHandle,
  createTaskOnDom,
  initialProjectHandle,
  deleteTask,
  addProjectToDom,
  addProjectToDropDown,
  clearProjects,
  clearScreen,
} from "./mainScreenDom.js";
import { menuDisplay } from "./menuDiv";
import { logic } from "./logic.js";

import { newTaskData } from "./userInput.js";

import {
  localStorageFun,
  saveProjectsInLocalStorage,
  saveTasksInLocalStorage,
} from "./localStorage.js";

import { checkTaskStatus } from "./taskStatus.js";

import { taskEdit } from "./taskEdit.js";
import { markImpt } from "./markImportant.js";
import { editAndDetailsExpand } from "./editAndDetailsDiv.js";

import { projectsFilter } from "./Project_filter.js";
import { displayHeading } from "./mainScreenHeading.js";

if (JSON.parse(localStorage.getItem("tasks"))) {
  const arr = JSON.parse(localStorage.getItem("tasks"));
  arr.forEach((obj) => {
    createTaskOnDom(
      obj.taskTitle,
      obj.taskDetails,
      obj.taskDate,
      obj.ID,
      obj.status,
      obj.important,
    );
  });
  initialProjectHandle(arr);
  checkTaskStatus(arr);
  editAndDetailsExpand();
  deleteTask(arr);
  taskEdit(arr);
  markImpt(arr);
  saveTasksInLocalStorage(arr);
}

if (JSON.parse(localStorage.getItem("projects"))) {
  const projectsArr = JSON.parse(localStorage.getItem("projects"));
  clearProjects();
  addProjectToDom(projectsArr);
  addProjectToDropDown(projectsArr);
  const projects = document.querySelectorAll(".PMLitems");
  projects.forEach((project) => {
    project.addEventListener("click", () => {
      const todosArr = JSON.parse(localStorage.getItem("tasks"));
      const { id } = project;
      displayHeading(project.innerText);
      clearScreen();
      const filteredProjectTodo = projectsFilter(todosArr, id);
      filteredProjectTodo.forEach((t) => {
        createTaskOnDom(
          t.taskTitle,
          t.taskDetails,
          t.taskDate,
          t.ID,
          t.status,
          t.important,
        );
      });
      editAndDetailsExpand();
      deleteTodayTask(todosArr);
      taskEdit(todosArr);
      checkTaskStatus(todosArr);
      markImpt(todosArr);
      saveTasksInLocalStorage(todosArr);
    });
  });
}

mainScreenDom();

menuDisplay();

localStorageFun();

newTaskData();
