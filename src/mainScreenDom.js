import { createNewCheckboxElement } from "./createNewCheckBoxElement";
import { taskDetailDiv } from "./taskDetailsDiv";
import { projectsFilter } from "./Project_filter";
import { editAndDetailsExpand } from "./editAndDetailsDiv";
import { taskEdit } from "./taskEdit";
import { Project } from "./logic";

const mainScreenDom = function () {


    const taskDateInput = document.querySelector("#taskDate");
    const tDay = new Date();
    const date = Number(tDay.getDate());
    let s1Month = Number(tDay.getUTCMonth())
    s1Month += 1;
    const year = tDay.getFullYear();
    let month = s1Month.toString();
    if (s1Month < 10) {
        month = "0" + s1Month;
    }

    const fullDate = year + "-" + month + "-" + date;
    taskDateInput.setAttribute("min", fullDate);
    taskDateInput.value = fullDate;


    const alltasksDiv = document.querySelector(".allTasksDiv");
    const todayTasksDiv = document.querySelector(".todayTasksDiv");
    const sevenTasksDiv = document.querySelector(".sevenDaysTasks");
    const impTasks = document.querySelector(".impTasks");
    const projects = document.querySelectorAll(".PMLitems");

    const allTasksBtn = document.querySelector("#allTasks")
    const todayTasksBtn = document.querySelector("#todayTasks")
    const sevenTasksBtn = document.querySelector("#sevendaysTasks")
    const impTasksBtn = document.querySelector("#imptTasks")


    const mainScreeHeading = document.querySelector(".mainScreenheading");





    const sidebarBtns = document.querySelectorAll(".HMLitems");
    sidebarBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.id == "allTasks") {
                mainScreeHeading.innerHTML = "All Tasks"
            } else if (btn.id == "todayTasks") {
                mainScreeHeading.innerHTML = "Today Tasks"
            } else if (btn.id == "sevenDaysTasks") {
                mainScreeHeading.innerHTML = "Next 7 days Tasks"
            } else if (btn.id == "impTasks") {
                mainScreeHeading.innerHTML = "Important Tasks"
            } else if (btn.id == "defaultProject") {
                mainScreeHeading.innerHTML = "Default Project"
            }
        })
    })




}





const createTaskOnDom = function (taskN, taskDt, dueDa, ID, status) {
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

    trigger.addEventListener("click", () => {
        form.classList.toggle("addTaskFormExpanded");
    });

    trigger2.addEventListener("click", () => {
        form.classList.toggle("addTaskFormExpanded");
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

const ProjectsArr = [new Project("Default", "defaultProject")];

const addProjectHandle = function (todosArr) {



    const addProjectBtn = document.querySelector(".APFbtn1");
    addProjectBtn.addEventListener("click", () => {

        const newProject = document.querySelector("#newProject");
        const nP = newProject.value;
        const newProjectR = nP.replace(/\s/g, "");


        if (newProjectR != "") {
            if (projIDExists(newProjectR, ProjectsArr)) {
                alert("Project Already Exists")
            } else {
                const newProj = new Project(newProject.value, newProjectR)
                ProjectsArr.push(newProj);
                clearProjects();
                addProjectToDropDown(ProjectsArr);
                addProjectToDom(ProjectsArr, newProject.value);


                const projects = document.querySelectorAll(".PMLitems");

                projects.forEach((project) => {
                    project.addEventListener("click", () => {
                        const id = project.id;
                        clearScreen();
                        const filteredProjectTodo = projectsFilter(todosArr, id);
                        filteredProjectTodo.forEach((t) => {
                            createTaskOnDom(t.taskTitle, t.taskDetails, t.taskDate, t.ID, t.status);
                        });
                        editAndDetailsExpand();
                        deleteTodayTask(todosArr);
                        taskEdit(todosArr);
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


const projectsHeading = function () {
    const btns = document.querySelectorAll(".PMLitems");


}



const clearProjects = function () {
    const btns = document.querySelectorAll(".PMLitems");
    btns.forEach((btn) => {
        btn.remove();
    })
}



const addProjectToDropDown = function (objArr) {
    const projectDropDown = document.querySelector("#project");
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



export { createTaskOnDom, clearScreen, deleteTask, idExists, deleteTodayTask };
export { addProjectHandle };
export default mainScreenDom;




