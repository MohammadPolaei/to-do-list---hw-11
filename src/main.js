import { header } from "./components/header/header";
import { ToDoListMaker } from "./components/toDoList/toDoList";
import "./style.css";
const main = document.getElementById("app");

const toDoListTitle = ToDoListMaker();

Array.from(toDoListTitle.children).forEach((item, index) => {
	switch (index) {
		case 0:
			item.innerHTML = "Hi";
			break;
		case 1:
			break;
		case 2:
			break;
		case 3:
			break;
		case 4:
			break;

		default:
			break;
	}
});

main.append(header, toDoListTitle);
