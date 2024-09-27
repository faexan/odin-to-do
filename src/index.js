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
import { addDays, format } from 'date-fns';
import { localStorageFun } from "./localStorage.js";


mainScreenDom();

menuDisplay();

localStorageFun();



newTaskData();


