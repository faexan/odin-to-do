import { clearScreen, createTaskOnDom } from "./mainScreenDom";
import { editAndDetailsExpand } from "./editAndDetailsDiv";
import { deleteTask } from "./mainScreenDom";
import { saveTasksInLocalStorage } from "./localStorage";

const taskEdit = function (todosArr) {
    const editTaskConfirmBtns = document.querySelectorAll(".editTaskConfirm");
    editTaskConfirmBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const btnID = btn.id;
            const taskID = btnID.slice(0, -14);
            const editTaskNameID = taskID + "EditTaskName";
            const editTaskDetailsID = taskID + "EditTaskDetails";
            const editTaskDateID = taskID + "EditTaskDate";

            const editTaskName = document.getElementById(editTaskNameID);
            const editTaskDetails = document.getElementById(editTaskDetailsID);
            const editTaskDate = document.getElementById(editTaskDateID);


            if (editTaskName.value != "" && editTaskDetails.value != "" && editTaskDate.value != "") {
                todosArr.forEach((todo) => {
                    let sp = todo.project + editTaskName.value + editTaskDate.value;
                    const id = sp.replace(/\s/g, "");
                    if (todo.ID == taskID) {
                        todo.taskTitle = editTaskName.value;
                        todo.taskDetails = editTaskDetails.value;
                        todo.taskDate = editTaskDate.value;
                        todo.ID = id;
                    }
                })
                saveTasksInLocalStorage(todosArr);
                clearScreen();
                todosArr.forEach((t) => {
                    createTaskOnDom(t.taskTitle, t.taskDetails, t.taskDate, t.ID, t.status, t.important);
                })
                editAndDetailsExpand();
                deleteTask(todosArr);
                taskEdit(todosArr);
            } else {
                alert("Please Input all the fields!")
            }






        })
    })
}


export { taskEdit };