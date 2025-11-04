import { El } from "../EL/EL";

export function InputDiv() {
	// input box

	const inputsBox = El({
		element: "div",
		classList:
			"w-[50%] bg-[#00000088] backdrop-blur-xl p-10 shadow-2xl flex flex-col gap-3 items-center rounded-xl",
	});
	// input container
	const inputsContainer = El({
		element: "div",
		classList: "flex items-center justify-center absolute w-full top-5",
		children: [inputsBox],
	});
	inputsContainer.children[0].innerHTML = `<input id="userInputForTodo" type="text" placeholder="Task Title" class="rounded-xl bg-[#ffffff99] border-1 px-2 outline-0"> 
  <div class="flex flex-row gap-2">
    <p class="font-bold">Priority : </p>
    <label for="low">low</label>
    <input id="low" class="radio" name="priority" type="radio">
    <label for="medium">medium</label>
    <input id="medium" class="radio" name="priority" type="radio">
    <label for="high">high</label>
    <input id="high" class="radio" name="priority" type="radio">
  </div>
  <div class="flex flex-row gap-2">
    <p class="font-bold">Status : </p>
    <label for="todo">todo</label>
    <input class="status" id="todo" name="status" type="radio">
    <label for="doing">doing</label>
    <input class="status" id="doing" name="status" type="radio">
    <label for="done">done</label>
    <input class="status" id="done" name="status" type="radio">
  </div>
  <div class="flex flex-row gap-2">
    <p class="font-bold">Deadline : </p>
    <input class="inputDate" type="date">
  </div>
  <button id="userInputButton" class=" bg-white rounded-2xl p-2">submit</button>
  `;

	return inputsContainer;
}
