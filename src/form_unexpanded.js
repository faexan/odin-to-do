const addTaskUnExpand = function (taskNameInput, taskdetailsInput) {
  const div = document.querySelector(".addTaskForm");
  div.classList.toggle("addTaskFormExpanded");
  taskNameInput.value = "";
  taskdetailsInput.value = "";
};

export { addTaskUnExpand };
