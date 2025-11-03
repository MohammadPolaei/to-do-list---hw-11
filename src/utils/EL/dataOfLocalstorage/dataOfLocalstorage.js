import { InputDiv } from "../../userInput/userInput";

export function ToAddIntoLocalstorage() {
	const theInputs = InputDiv();

	const submitButton = theInputs.querySelector("#userInputButton");

	submitButton.addEventListener("click", () => {
		console.log("clicked");
	});
	return theInputs;
}
