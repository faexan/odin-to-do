import "./styles.css";
import "./header.css";
import "./container.css";
import "./sidebar.css";
import "./task.css";



import { menuDisplay } from "./menuDiv";
import { logic } from "./logic.js";
import mainScreenDom from "./mainScreenDom.js";
import { newTaskData } from "./userInput.js";
import { addProjectHandle } from "./mainScreenDom.js";


mainScreenDom();

menuDisplay();



const date = new Date("2024-02-31");
const date2 = new Date("2025-05-12");



const d = new Date();



newTaskData();




const today = new Date();
const todayMonth = Number(today.getMonth()) + 1;
const todayDate = today.getDate();
const afterWeekDate = todayDate + 7;
const todayYear = today.getFullYear();
let sMonth = todayMonth.toString();
if (todayMonth < 10) {
    sMonth = "0" + todayMonth;
}


const todayFullDate = todayYear + "-" + sMonth + "-" + todayDate;
const afterWeekFullDate = todayYear + "-" + sMonth + "-" + afterWeekDate;

// console.log(afterWeekFullDate);

const todayFullDateObj = new Date(todayFullDate);
const afterWeekFullDateObj = new Date(afterWeekFullDate);
// console.log(afterWeekFullDateObj);
const taskD = "2024-12-26";
const taskDateObj = new Date(taskD);




// console.log("cbx stuff:")
const str = "Hello-bashir-walid-nazeer";
const chotiStr = str.substr(5, str.length)
// console.log(chotiStr);



// console.log(todayFullDateObj, taskDateObj);