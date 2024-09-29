import { addDays } from "date-fns";

const date = function () {
  // const newDate = new Date();
  // console.log(newDate.getFullYear());
  // console.log(newDate.getFullYear() < 2020)
  // const str = "2024-12-24";
  // const year = Number(str.substr(0, 4));
  // console.log(year);
  // const month = Number(str.substr(5,2));
  // console.log(month);
  // const date = Number(str.substr(8,2));
  // console.log(date);
};

const todayTodos = function (todos) {
  const arr = [];
  todos.forEach((todo) => {
    const today = new Date();
    const todayMonth = today.getMonth() + 1;
    const todayDate = today.getDate();
    const todayYear = today.getFullYear();
    const taskD = todo.taskDate;
    const taskDate = Number(taskD.substr(8, 2));
    const taskMonth = Number(taskD.substr(5, 2));
    const taskYear = Number(taskD.substr(0, 4));

    if (
      taskDate == todayDate &&
      taskMonth == todayMonth &&
      taskYear == todayYear
    ) {
      arr.push(todo);
    }
  });

  return arr;
};

const weekTodos = function (todos) {
  const arr = [];

  todos.forEach((todo) => {
    const todayDate = new Date();

    const afterWeekDate = addDays(todayDate, 7);

    const todoDate = new Date(todo.taskDate);

    if (todoDate >= todayDate && todoDate <= afterWeekDate) {
      arr.push(todo);
    }
  });

  return arr;
};

export { date, todayTodos, weekTodos };
