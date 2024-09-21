

const mainScreenDom = function () {

    const alltasksDiv = document.querySelector(".allTasksDiv");
    const todayTasksDiv = document.querySelector(".todayTasksDiv");
    const sevenTasksDiv = document.querySelector(".sevenDaysTasks");
    const impTasks = document.querySelector(".imptTasks");

    const allTasksBtn = document.querySelector("#allTasks")
    const todayTasksBtn = document.querySelector("#todayTasks")
    const sevenTasksBtn = document.querySelector("#sevendaysTasks")
    const impTasksBtn = document.querySelector("#imptTasks")

    const sidebarBtns = document.querySelectorAll(".HMLitems");
    sidebarBtns.forEach((btn)=> {
        btn.addEventListener("click", () =>  {
            if (btn.id == "allTasks") {
                alltasksDiv.style.display = "inline";
                todayTasksDiv.style.display = "none";
                sevenTasksDiv.style.display = "none";
                impTasks.style.display = "none";
                  
            } else if (btn.id == "todayTasks") {
                todayTasksDiv.style.display = "inline";
                alltasksDiv.style.display = "none";
                sevenTasksDiv.style.display = "none";
                impTasks.style.display = "none";
            } else if (btn.id == "sevenDaysTasks") {
                sevenTasksDiv.style.display = "inline";
                alltasksDiv.style.display = "none";
                todayTasksBtn.style.display = "none";
                impTasks.style.display = "none";
            } else if (btn.id == "impTasks") {
                impTasks.style.display = "inline";
                alltasksDiv.style.display = "none";
                todayTasksDiv.style.display = "none";
                sevenTasksDiv.style.display = "none";

            }
        })
    })


}


export default mainScreenDom;