import { header } from "./components/header/header";
import { ToDoListMaker } from "./components/toDoList/toDoList";
import "./style.css";
import { ToDoListAdderRemover } from "./utils/toDoListAdderRemover/toDoListAdderRemover";
export const main = document.getElementById("app");
main.classList.add("relative");

// to do title

const toDoListTitle = ToDoListMaker();

Array.from(toDoListTitle.children).forEach((item, index) => {
	switch (index) {
		case 0:
			item.innerHTML = "Task Name";
			item.classList.add("font-bold");
			break;
		case 1:
			item.innerHTML = "Priority";
			item.classList.add("font-bold");
			break;
		case 2:
			item.innerHTML = "Status";
			item.classList.add("font-bold");
			break;
		case 3:
			item.innerHTML = "Deadline";
			item.classList.add("font-bold");
			break;
		case 4:
			item.innerHTML = "Actions";
			item.classList.add("font-bold");
			break;

		default:
			break;
	}
});

// title code end

main.append(header, toDoListTitle, ToDoListAdderRemover());
