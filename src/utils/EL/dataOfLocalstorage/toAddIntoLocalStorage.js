import { main } from "../../../main";
import { InputDiv } from "../../userInput/userInput";
import { ToGetOneItemFromLocalstorage } from "./toGetFromLocalstorage";

export function ToAddIntoLocalstorage() {
	const theInputs = InputDiv();
	const submitButton = theInputs.querySelector("#userInputButton");
	const cancelButton = theInputs.querySelector("#userInputButtonCancel");
	// datas

	submitButton.addEventListener("click", () => {
		// title
		const titleOfInput = theInputs.querySelector("#userInputForTodo");
		// priority
		const priorities = theInputs.getElementsByClassName("radio");
		const resultOfPriority = Array.from(priorities).filter(
			(item) => item.checked
		)[0];
		// status
		const status = theInputs.getElementsByClassName("status");
		const resultOfStatus = Array.from(status).filter((item) => item.checked)[0];
		// date
		const inputDate = theInputs.getElementsByClassName("inputDate")[0];

		// sending data into LOCALSTORAGE
		if (
			titleOfInput == undefined ||
			titleOfInput.value == "" ||
			resultOfPriority == undefined ||
			resultOfStatus == undefined ||
			inputDate.value == ""
		) {
			alert("Inputs must be filled completely !");
		} else {
			localStorage.setItem(
				`list ${titleOfInput.value}`,
				JSON.stringify({
					title: `${titleOfInput.value}`,
					priority: `${resultOfPriority.attributes.id.value}`,
					status: `${resultOfStatus.attributes.id.value}`,
					date: `${inputDate.value}`,
				})
			);
			main.append(ToGetOneItemFromLocalstorage(titleOfInput.value));
			theInputs.remove();
		}
	});

	cancelButton.addEventListener("click", () => theInputs.remove());

	// test

	return theInputs;
}
