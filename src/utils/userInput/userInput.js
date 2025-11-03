import { El } from "../EL/EL";

export function inputDiv() {
	const inputsContainer = El({
		element: "div",
		classList: "flex items-center justify-center static",
		children: [
			El({
				element: "div",
				classList:
					"w-[50%] bg-[#00000088] p-10 shadow-2xl flex flex-col gap-3 items-center rounded-xl",
			}),
		],
		// children: [El(), El(), El()],
	});
	inputsContainer.children[0].innerHTML = `<input type="text" placeholder="Task Title" class="rounded-xl bg-[#ffffff99] border-1 px-2 outline-0"> 
  <div class="flex flex-row gap-2">
    <p>Priority</p>
    <label for="low">low</label>
    <input id="low" name="priority" type="radio">
    <label for="medium">medium</label>
    <input id="medium" name="priority" type="radio">
    <label for="high">high</label>
    <input id="high" name="priority" type="radio">
  </div>
  <div class="flex flex-row gap-2">
    <p>Status</p>
    <label for="todo">todo</label>
    <input id="todo" name="status" type="radio">
    <label for="doing">doing</label>
    <input id="doing" name="status" type="radio">
    <label for="done">done</label>
    <input id="done" name="status" type="radio">
  </div>
  <div class="flex flex-row gap-2">
    <p>Deadline</p>
    <input type="date">
  </div>
  <button id="userInputButton" class=" bg-white rounded-2xl p-2">submit</button>
  `;
	console.log(inputsContainer.children[0]);
	return inputsContainer;
}
