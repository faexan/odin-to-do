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
addProjectHandle();
menuDisplay();



const date = new Date("2024-02-31");
const date2 = new Date("2025-05-12");

console.log(date > date2)
console.log(date < date2)

const d = new Date();



newTaskData();
