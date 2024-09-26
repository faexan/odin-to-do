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

}




const todayTodos = function (todos) {
    let arr = [];
    todos.forEach((todo) => {
        const today = new Date();
        const todayMonth = today.getMonth() + 1;
        const todayDate = today.getDate();
        const todayYear = today.getFullYear();
        console.log(todayMonth, todayDate, todayYear);
        const taskD = todo.taskDate;
        console.log("Task full Date: ", taskD);
        const taskDate = Number(taskD.substr(8,2));
        console.log("Task Date: ", taskDate);
        const taskMonth = Number(taskD.substr(5,2));
        console.log("Task Month: ", taskMonth);
        const taskYear = Number(taskD.substr(0,4));
        console.log("Task Year: ", taskYear)



        if(taskDate == todayDate && taskMonth == todayMonth && taskYear == todayYear) {
            arr.push(todo);
        }

        
    })



    console.log(arr);


    return arr;
}








export {date, todayTodos};