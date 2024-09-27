
const projectsFilter = function(todos, projectID) {
    const arr = [];
    todos.forEach((todo) => {
        if (todo.project == projectID) {
            arr.push(todo);
        }
    })
    return arr;
}




export {projectsFilter};



