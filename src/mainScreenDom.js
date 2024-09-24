

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





const createTaskOnDom = function (taskN, taskDt, dueD) {
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





    div.innerHTML = '<div class="checkbox-wrapper-52"><label for="todo-52" class="item"><input type="checkbox" id="todo-52" class="hidden"/><label for="todo-52" class="cbx"><svg width="14px" height="12px" viewBox="0 0 14 12"><polyline points="1 7.6 5 11 13 1"></polyline></svg></label><label for="todo-52" class="cbx-lbl">To-do</label></label></div>';




    taskDetails.type = "button";
    taskDetails.innerHTML = "Details";
    dueDate.innerHTML = dueD;
    editTask.innerHTML = "<i class='fas fa-edit'></i>";
    deleteTask.innerHTML = "<i class='fa-solid fa-trash'></i>";



    mainDiv.classList.add("tasks");


    taskDetails.classList.add("taskDetailsBtn");
    dueDate.classList.add("dueDate");
    editTask.classList.add("editTaskIcon");
    deleteTask.classList.add("deleteTaskIcon");










    div2.appendChild(taskDetails);
    div2.appendChild(dueDate);
    div2.appendChild(editTask);
    div2.appendChild(deleteTask);


    mainDiv.appendChild(div);
    mainDiv.appendChild(div2);
    parentDiv.appendChild(mainDiv);




    taskDetailsDiv(parentDiv);






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






    editTaskDate.type = "date";
    editTaskName.type = "text";
    editTaskCancel.innerText = "Cancel";
    editTaskConfirm.innerHTML = "Confirm Edit";





    editTaskDiv.appendChild(editTaskName);
    editTaskDiv.appendChild(editTaskDetails);
    editTaskDiv.appendChild(editTaskChildDiv);
    editTaskChildDiv.appendChild(editTaskDate);
    editTaskChildDiv.appendChild(editTaskCancel);
    editTaskChildDiv.appendChild(editTaskConfirm);










    
    tasksDiv.appendChild(parentDiv);
    parentDiv.appendChild(editTaskDiv);

    const taskName = document.querySelector(".cbx-lbl");
    taskName.innerText = taskN;
    editTaskName.value = taskN;
    editTaskDetails.value = taskDt;


    editAndDetailsExpand();

}



const newTaskFormExpand = function () {
    const trigger = document.querySelector(".addTaskRow");
    const trigger2 = document.querySelector(".cancelTaskForm");
    const form = document.querySelector(".addTaskForm");

    trigger.addEventListener("click", () => {
        form.classList.toggle("addTaskFormExpanded");
    })


    trigger2.addEventListener("click", () => {
        form.classList.toggle("addTaskFormExpanded");
    })



}


const editAndDetailsExpand = function() {
    const editTrigger = document.querySelector(".editTaskIcon");
    const editTrigger2 = document.querySelector(".editTaskCancel");
    const editDiv = document.querySelector(".editTaskDiv");



    const detailsTrigger = document.querySelector(".taskDetailsBtn");
    const detalisTrigger2 = document.querySelector(".taskDetailsCancelBtn");

    const detailsDiv = document.querySelector(".taskDetailsDiv");



    editTrigger.addEventListener("click", () => {
        editDiv.classList.toggle("editTaskDivExpanded");
        
        if (detailsDiv.className == "taskDetailsDiv taskDetailsDivExpanded") {
            detailsDiv.classList.remove("taskDetailsDivExpanded");
        }
    });
    editTrigger2.addEventListener("click", () => {
        editDiv.classList.toggle("editTaskDivExpanded");
    })


    detailsTrigger.addEventListener("click", () => {
        detailsDiv.classList.toggle("taskDetailsDivExpanded");
        if (editDiv.className == "editTaskDiv editTaskDivExpanded") {
            editDiv.classList.remove("editTaskDivExpanded");
        }
    })
    detalisTrigger2.addEventListener("click", () => {
        detailsDiv.classList.toggle("taskDetailsDivExpanded");
    })
}





const taskDetailsDiv = function (div) {

    const parentDiv = document.createElement("div");

    


    parentDiv.innerHTML = '<div class="taskDetailsNameDiv"><span class="taskDetailsNameLabel">Name</span>&nbsp;<span class="taskDetailsName"></span></div><div class="taskDetailsdetailDiv"><span class="taskDetailsdetailLabel">Details:</span>&nbsp;<span class="taskDetailsdetail"></span></div><div class="taskDetailsDueDiv"><span class="taskDetailsDueLabel">Due Date:</span>&nbsp;<span class="taskDetailsDue"></span></div><div class="taskDetailsCancelDiv"><button class="taskDetailsCancelBtn" type="button">Cancel</button></div>';


    parentDiv.classList.add("taskDetailsDiv");





    div.appendChild(parentDiv);





}






newTaskFormExpand();


createTaskOnDom("Some Stuff I have to do", "Do the stuff before it's too late!", "10-12-2025");

export {createTaskOnDom};
export default mainScreenDom;




