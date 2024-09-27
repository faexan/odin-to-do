


const checkTaskStatus = function (todosArr) {
    const cbxs = document.querySelectorAll(".taskcbxs");
    cbxs.forEach((cbx) => {
        cbx.addEventListener("click", () => {
            const cbxID = cbx.id;
            const taskID = cbxID.substr(4, cbxID.length);
            if (cbx.checked == true) {
                todosArr.forEach((todo) => {
                    if (todo.ID == taskID) {
                        todo.status = true;
                    }
                })
            } else {
                todosArr.forEach((todo) => {
                    if (todo.ID == taskID) {
                        todo.status = false;
                    }
                })
            }
        })
    })

}


export { checkTaskStatus };
