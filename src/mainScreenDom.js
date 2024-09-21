

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
    sidebarBtns.forEach((btn)=> {
        btn.addEventListener("click", () =>  {
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





const createTaskOnDom = function() {
    const tasksDiv = document.querySelector(".tasksDiv");


    const mainDiv = document.createElement("div");
    const div = document.createElement("div");
    const div2 = document.createElement("div");
    const checkBox = document.createElement("input");
    const taskName = document.createElement("span");
    const taskDetails = document.createElement("button");


    checkBox.type = "checkbox";
    taskDetails.type = "button";
    taskDetails.innerHTML = "Details";
    taskName.innerHTML = "Some Stuff I have to do";



    mainDiv.classList.add("tasks");
    checkBox.classList.add("TaskCheckBox");
    taskName.classList.add("taskName");
    taskDetails.classList.add("taskDetailsBtn");








    div.appendChild(checkBox);
    div.appendChild(taskName);
    div2.appendChild(taskDetails);


    mainDiv.appendChild(div);
    mainDiv.appendChild(div2);



    tasksDiv.appendChild(mainDiv);


    
}





createTaskOnDom();


export default mainScreenDom;