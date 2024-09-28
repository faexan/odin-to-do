import { createNewCheckboxElement } from "./createNewCheckBoxElement";
import { taskDetailDiv } from "./taskDetailsDiv";
import { projectsFilter } from "./Project_filter";
import { editAndDetailsExpand } from "./editAndDetailsDiv";
import { taskEdit } from "./taskEdit";
import { Project } from "./logic";
import { add, addDays, format } from 'date-fns';
import { checkTaskStatus } from "./taskStatus";
import { markImpt } from "./markImportant";
import { saveTasksInLocalStorage, saveProjectsInLocalStorage } from "./localStorage";
import { addTaskUnExpand } from "./form_unexpanded";
import { displayHeading } from "./mainScreenHeading";


const mainScreenDom = function () {


    const taskDateInput = document.querySelector("#taskDate");
    const tDay = new Date();
    const formattedDate = format(tDay, "yyyy-MM-dd");
    taskDateInput.value = formattedDate;
    taskDateInput.setAttribute("min", formattedDate);

}





const createTaskOnDom = function (taskN, taskDt, dueDa, ID, status, imp) {
    const tasksDiv = document.querySelector(".tasksDiv");


    const parentDiv = document.createElement("div");
    const mainDiv = document.createElement("div");
    const div = document.createElement("div");
    const div2 = document.createElement("div");
    const taskDetails = document.createElement("button");
    const dueDate = document.createElement("span");
    const editTask = document.createElement("span");
    const deleteTask = document.createElement("span");
    const editTaskChildDiv = document.createElement("div");





    createNewCheckboxElement(div, taskN, ID, status);



    taskDetails.type = "button";
    taskDetails.innerHTML = "Details";
    dueDate.innerHTML = dueDa;
    editTask.innerHTML = "<i class='fas fa-edit'></i>";
    deleteTask.innerHTML = "<i class='fa-solid fa-trash'></i>";

    const star = document.createElement("span");
    star.setAttribute('class', 'star');
    star.setAttribute('type', 'checkbox');
    star.setAttribute('title', 'Mark Important');
    star.id = ID + "star";
    star.innerHTML = '<i class="fa-solid fa-star"></i>';

    if (imp == true) {
        star.style.color = "gold"
    } else if (imp == false) {
        star.style.color = "white";
    }

    mainDiv.classList.add("tasks");


    taskDetails.classList.add("taskDetailsBtn");
    dueDate.classList.add("dueDate");
    editTask.classList.add("editTaskIcon");
    deleteTask.classList.add("deleteTaskIcon");
    parentDiv.classList.add("taskParentDiv");

    parentDiv.id = ID;

    editTask.id = ID + "EditIcon";
    taskDetails.id = ID + "DetailsBtn";

    deleteTask.id = ID + "DeleteIcon";









    div2.appendChild(taskDetails);
    div2.appendChild(dueDate);
    div2.appendChild(star);
    div2.appendChild(editTask);
    div2.appendChild(deleteTask);


    mainDiv.appendChild(div);
    mainDiv.appendChild(div2);
    parentDiv.appendChild(mainDiv);




    const tDetailsDiv = document.createElement("div", ID);
    tDetailsDiv.id = ID + "DetailsDiv";
    taskDetailDiv(tDetailsDiv, ID, taskN, taskDt, dueDa);


    tDetailsDiv.classList.add("taskDetailsDiv");

    parentDiv.appendChild(tDetailsDiv);






    const editTaskDiv = document.createElement("div");
    const editTaskName = document.createElement("input");
    const editTaskDetails = document.createElement("textarea");
    const editTaskDate = document.createElement("input");
    const editTaskCancel = document.createElement("button");
    const editTaskConfirm = document.createElement("button");





    editTaskDiv.classList.add("editTaskDiv");
    editTaskChildDiv.classList.add("editTaskChildDiv")
    editTaskName.classList.add("editTaskName");
    editTaskDetails.classList.add("editTaskDetails");
    editTaskDate.classList.add("editTaskDate");
    editTaskCancel.classList.add("editTaskCancel");
    editTaskConfirm.classList.add("editTaskConfirm");





    editTaskDiv.id = ID + "EditDiv";
    editTaskName.id = ID + "EditTaskName";
    editTaskDetails.id = ID + "EditTaskDetails";
    editTaskDate.id = ID + "EditTaskDate";




    editTaskDate.type = "date";
    editTaskName.type = "text";
    editTaskCancel.innerText = "Cancel";
    editTaskConfirm.innerHTML = "Confirm Edit";


    editTaskCancel.id = ID + "EditCancelBtn";
    editTaskConfirm.id = ID + "EditConfirmBtn";





    editTaskDiv.appendChild(editTaskName);
    editTaskDiv.appendChild(editTaskDetails);
    editTaskDiv.appendChild(editTaskChildDiv);
    editTaskChildDiv.appendChild(editTaskDate);
    editTaskChildDiv.appendChild(editTaskCancel);
    editTaskChildDiv.appendChild(editTaskConfirm);











    tasksDiv.appendChild(parentDiv);
    parentDiv.appendChild(editTaskDiv);



    editTaskName.value = taskN;
    editTaskDetails.value = taskDt;
    editTaskDate.value = dueDa;



}


const newTaskFormExpand = function () {
    const trigger = document.querySelector(".addTaskRow");
    const trigger2 = document.querySelector(".cancelTaskForm");
    const form = document.querySelector(".addTaskForm");
    const nameInput = document.querySelector("#taskName");
    const detailsInput = document.querySelector("#taskDetails");
    trigger.addEventListener("click", () => {
        addTaskUnExpand(nameInput, detailsInput);
    });

    trigger2.addEventListener("click", () => {
        addTaskUnExpand(nameInput, detailsInput);
    });
}




newTaskFormExpand();








const clearScreen = function () {
    const parentDiv = document.querySelectorAll(".taskParentDiv");

    parentDiv.forEach((div) => {
        div.remove();
    })
}




const deleteTask = function (objArr) {

    const deleteIcons = document.querySelectorAll(".deleteTaskIcon");

    deleteIcons.forEach((icon) => {
        icon.addEventListener("click", () => {
            let iconID = icon.id;
            let taskID = iconID.slice(0, -10);
            const task = document.getElementById(taskID);
            task.remove();
            for (let i = 0; i < objArr.length; i++) {
                if (objArr[i].ID == taskID) {
                    objArr.splice(i, 1);
                    saveTasksInLocalStorage(objArr);
                }
            }
        })
    })

}


const deleteTodayTask = function (objArr) {

    const deleteIcons = document.querySelectorAll(".deleteTaskIcon");
    let arr = [];

    for (let i = 0; i < deleteIcons.length; i++) {
        deleteIcons[i].addEventListener("click", () => {
            let iconID = deleteIcons[i].id;
            let taskID = iconID.slice(0, -10);
            const task = document.getElementById(taskID);
            task.remove();
            arr.push(taskID);

            for (let i = 0; i < objArr.length; i++) {
                if (objArr[i].ID == taskID) {
                    objArr.splice(i, 1);
                    saveTasksInLocalStorage(objArr);
                }
            }
            return arr;
        })
    }
}



const idExists = function (id, objArr) {
    return objArr.some((obj) => obj.ID === id);
};


const projIDExists = function (j, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].ID === j) {
            return true;
        }
    }

    return false;
};

const ProjectsArr = JSON.parse(localStorage.getItem('projects')) || [new Project("Default", "default")];

const initialProjectHandle = function (todosArr) {
    const initialDefaultProject = document.querySelector("#defaultProject");
    if (initialDefaultProject) {

        initialDefaultProject.addEventListener("click", () => {
            displayHeading("Default");
            clearScreen();
            const filteredProjectTodo = projectsFilter(todosArr, "default");
            filteredProjectTodo.forEach((t) => {
                createTaskOnDom(t.taskTitle, t.taskDetails, t.taskDate, t.ID, t.status, t.important);
            });
            editAndDetailsExpand();
            deleteTodayTask(todosArr);
            taskEdit(todosArr);
            checkTaskStatus(todosArr);
            markImpt(todosArr);
        })

    }

}


const addProjectHandle = function (todosArr) {
    const addProjectBtn = document.querySelector(".APFbtn1");
    addProjectBtn.addEventListener("click", () => {
        const form = document.querySelector(".addProjectForm");
        const newProject = document.querySelector("#newProject");

        const nP = newProject.value;
        const newProjectR = nP.replace(/\s/g, "");

        if (newProjectR != "") {
            if (projIDExists(newProjectR, ProjectsArr)) {
                alert("Project Already Exists")
            } else {
                const newProj = new Project(newProject.value, newProjectR)
                ProjectsArr.push(newProj);
                saveProjectsInLocalStorage(ProjectsArr);
                clearProjects();
                addProjectToDropDown(ProjectsArr);
                addProjectToDom(ProjectsArr, newProject.value);
                newProject.value = "";
                form.classList.toggle("formExpanded");
            


                const projects = document.querySelectorAll(".PMLitems");

                projects.forEach((project) => {
                    project.addEventListener("click", () => {
                        displayHeading(project.innerText);
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

        } else {
            alert("Please Add a Project Name");
        }
    })



}



const addProjectToDom = function (objArr) {

    const projectsList = document.querySelector(".projectsList");



    objArr.forEach((obj) => {
        const li = document.createElement("li");
        li.classList.add("HMLitems");
        li.classList.add("PMLitems");
        li.id = obj.ID;
        li.innerText = obj.name;
        projectsList.appendChild(li);
    })
}






const clearProjects = function () {
    const btns = document.querySelectorAll(".PMLitems");
    btns.forEach((btn) => {
        btn.remove();
    })
}



const addProjectToDropDown = function (objArr) {
    const projectDropDown = document.querySelector("#projectsDropDown");
    prjoctsDropDownClr();
    objArr.forEach((obj) => {
        const option = document.createElement("option");
        option.value = obj.ID;
        option.innerText = obj.name;
        projectDropDown.appendChild(option);
    })

}


const prjoctsDropDownClr = function () {
    const options = document.querySelectorAll("option");
    options.forEach((o) => {
        o.remove();
    })
}



export { createTaskOnDom, clearScreen, deleteTask, idExists, deleteTodayTask, initialProjectHandle };
export { addProjectHandle };
export {mainScreenDom} 
export {addProjectToDom, addProjectToDropDown, clearProjects}



