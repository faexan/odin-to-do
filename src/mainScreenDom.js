import { createNewCheckboxElement } from "./createNewCheckBoxElement";
import { taskDetailDiv } from "./taskDetailsDiv";

const mainScreenDom = function () {

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





const createTaskOnDom = function (taskN, taskDt, dueDa, ID) {
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





    createNewCheckboxElement(div, taskN);



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
    taskDetails.id = ID + "DetailsBtn"









    div2.appendChild(taskDetails);
    div2.appendChild(dueDate);
    div2.appendChild(editTask);
    div2.appendChild(deleteTask);


    mainDiv.appendChild(div);
    mainDiv.appendChild(div2);
    parentDiv.appendChild(mainDiv);




    const tDetailsDiv = document.createElement("div", ID);
    tDetailsDiv.id = ID + "DetailsDiv";
    taskDetailDiv(tDetailsDiv, ID);


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

const editAndDetailsExpand = function () {
    const editTriggers = document.querySelectorAll(".editTaskIcon");
    const editTriggers2 = document.querySelectorAll(".editTaskCancel");

    const detailsTriggers = document.querySelectorAll(".taskDetailsBtn");
    const detailsTriggers2 = document.querySelectorAll(".taskDetailsCancelBtn"); // Fixed typo

    // For expanding edit task div
    editTriggers.forEach((t) => {
        t.addEventListener("click", () => {
            const tId = t.id;
            const eDivID = tId.slice(0, -8) + "EditDiv";
            const eD = document.getElementById(eDivID);
            eD.classList.toggle("editTaskDivExpanded");

            const dDivID = tId.slice(0, -8) + "DetailsDiv";
            const dD = document.getElementById(dDivID);

            if (dD.classList.contains("taskDetailsDivExpanded")) {
                dD.classList.remove("taskDetailsDivExpanded");
            }
        });
    });

    // For canceling edit task div expansion
    editTriggers2.forEach((t) => {
        t.addEventListener("click", () => {
            const tId = t.id;
            const eDivID = tId.slice(0, -13) + "EditDiv";
            const eD = document.getElementById(eDivID);

            eD.classList.toggle("editTaskDivExpanded");
        });
    });

    // For expanding task details div
    detailsTriggers.forEach((t) => {
        t.addEventListener("click", () => {
            const tId = t.id;
            const dDivID = tId.slice(0, -10) + "DetailsDiv";
            const dD = document.getElementById(dDivID);
            dD.classList.toggle("taskDetailsDivExpanded");

            const edDivId = tId.slice(0, -10) + "EditDiv";
            const eDiv = document.getElementById(edDivId);

            if (eDiv.classList.contains("editTaskDivExpanded")) {
                eDiv.classList.remove("editTaskDivExpanded");
            }
        });
    });

    // For canceling task details div expansion
    detailsTriggers2.forEach((t) => {
        t.addEventListener("click", () => { // Move event listener inside forEach
            const tId = t.id;
            const dDivID = tId.slice(0, -16) + "DetailsDiv";
            const dDiv = document.getElementById(dDivID);

            dDiv.classList.toggle("taskDetailsDivExpanded");
        });
    });
}





newTaskFormExpand();








const clearScreen = function () {
    const parentDiv = document.querySelectorAll(".taskParentDiv");

    parentDiv.forEach((div) => {
        div.remove();
    })
}












export { createTaskOnDom, clearScreen, editAndDetailsExpand };
export default mainScreenDom;




