import "./styles.css";
import "./header.css";
import "./container.css";
import "./sidebar.css";



import { menuDisplay } from "./menuDiv";
import { Todo } from "./hello";


const todo1 = new Todo("Personal", "Do Pushups", "Do twenty pushups", "Today", "Moderate");

const todos =[];

function allTodos(todo) {
    todos.push(todo);
}


menuDisplay();