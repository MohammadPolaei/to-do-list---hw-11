import { ToDoListAdderRemover } from "../../toDoListAdderRemover/toDoListAdderRemover";
import { El } from "../EL";

const listContainer = El({
	element: "div",
});

// whole items reload

export function ToGetFromLocalstorage() {
	for (let index = 0; index < localStorage.length; index++) {
		const keysOfLocal = Object.keys(localStorage);

		listContainer.append(
			ToDoListAdderRemover(JSON.parse(localStorage.getItem(keysOfLocal[index])))
		);
	}
	return listContainer;
}

//  one item from localstorage

export function ToGetOneItemFromLocalstorage(theTitle) {
	console.log(`list ${theTitle}`);

	return ToDoListAdderRemover(
		JSON.parse(localStorage.getItem(`list ${theTitle}`))
	);
}
