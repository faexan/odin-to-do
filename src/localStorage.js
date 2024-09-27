

const saveTasksInLocalStorage = function(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const saveProjects = function(projects) {
    localStorage.setItem('projects', JSON.stringify(projects))
}



const localStorageFun = function() {
    localStorage.setItem("item", '[{"key": "value"}, {"key2": "value"}]')
    const arr = localStorage.getItem("item");
    const Array = JSON.parse(arr);
    console.log(Array[0]);
}


export {localStorageFun, saveProjects, saveTasksInLocalStorage}