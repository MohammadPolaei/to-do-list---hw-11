import { ToDoListAdderRemover } from "../../toDoListAdderRemover/toDoListAdderRemover";

const localStorageDatas = localStorage;

export function ToGetFromLocalstorage() {
	for (let items in localStorageDatas) {
		try {
			let dataGet = JSON.parse(localStorageDatas[items]);
			console.log(dataGet);

			ToDoListAdderRemover(dataGet);
		} catch {
			return;
		}
	}
}
