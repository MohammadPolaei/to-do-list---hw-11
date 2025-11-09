import { ToDoListMaker } from "../../components/toDoList/toDoList";
import { main } from "../../main";
import { ToAddIntoLocalstorage } from "../EL/dataOfLocalstorage/toAddIntoLocalStorage";
import { El } from "../EL/EL";

export function ToDoListAdderRemover(dataObjectFromLocalstorage) {
	// exporting data into variables
	const { title, priority, status, date } = dataObjectFromLocalstorage;

	// to do maker
	const toDoItems = ToDoListMaker();

	Array.from(toDoItems.children).forEach((item, index) => {
		// remove button
		const removeButton = El({
			element: "button",
			id: "removeButton",
			children: [
				El({
					element: "div",
					classList: "bg-[#ff0000] p-1 rounded-[5px] items-center",
					children: [
						El({
							element: "img",
							classList: "w-5",
							src: "/images/delete.svg",
						}),
					],
				}),
			],
		});

		removeButton.addEventListener("click", () => {
			toDoItems.remove();
			localStorage.removeItem(`list ${title}`);
		});

		// edit button
		const editButton = El({
			element: "button",
			id: "editButton",

			children: [
				El({
					element: "div",
					classList: "bg-[#0000ff] p-1 rounded-[5px] items-center",
					children: [
						El({
							element: "img",
							classList: "w-5",
							src: "/images/edit.svg",
						}),
					],
				}),
			],
		});

		editButton.addEventListener("click", () => {
			main.append(ToAddIntoLocalstorage());
			document.getElementById("userInputForTodo").value = title;
		});
		// showHide button

		const showHideButton = El({
			element: "button",
			id: "showHideButton",

			children: [
				El({
					element: "div",
					classList: "bg-[#555555] p-1 rounded-[5px] items-center",
					children: [
						El({
							element: "img",
							classList: "w-5",
							src: "/images/showHide.svg",
						}),
					],
				}),
			],
		});
		showHideButton.addEventListener("click", () => {});

		// item adder

		switch (index) {
			case 0:
				item.innerHTML = `${title}`;
				break;
			case 1:
				// choosing bg by priority
				let priorityBox = El({
					element: "div",
				});
				switch (priority) {
					case "low":
						priorityBox = El({
							classList:
								"py-1 px-3 w-fit rounded-4xl bg-gray-300 text-black font-bold text-sm capitalize",
						});

						break;
					case "medium":
						priorityBox = El({
							classList:
								"py-1 px-3 w-fit rounded-4xl bg-[#ffc107] text-black font-bold text-sm capitalize",
						});

						break;
					case "high":
						priorityBox = El({
							classList:
								"py-1 px-3 w-fit rounded-4xl bg-[#dc3545] text-white font-bold text-sm capitalize",
						});

						break;

					default:
						break;
				}

				priorityBox.innerHTML = `${priority}`;
				item.append(priorityBox);
				break;
			case 2:
				let statusBox = El({
					element: "div",
				});
				switch (status) {
					case "doing":
						statusBox = El({
							element: "div",
							classList:
								"py-1 px-3 w-fit rounded-4xl bg-[#ffc107] text-black font-bold text-sm capitalize",
						});

						break;
					case "todo":
						statusBox = El({
							element: "div",
							classList:
								"py-1 px-3 w-fit rounded-4xl bg-[#dc3545] text-white font-bold text-sm capitalize",
						});

						break;
					case "done":
						statusBox = El({
							element: "div",
							classList:
								"py-1 px-3 w-fit rounded-4xl bg-[#2e7d32] text-white font-bold text-sm capitalize",
						});

						break;

					default:
						break;
				}

				statusBox.innerHTML = `${status}`;
				item.append(statusBox);
				break;
			case 3:
				const DeadlineBox = El({
					element: "div",
					classList: "py-1 px-3 w-fit rounded-4xl border-1 border-[#3333ffbb]",
				});
				DeadlineBox.innerHTML = `${date}`;
				item.append(DeadlineBox);
				break;
			case 4:
				const actions = El({
					element: "div",
					classList: "flex flex-row gap-1 justify-center items-center",
					children: [removeButton, editButton, showHideButton],
				});

				item.append(actions);
				break;

			default:
				break;
		}
	});

	return toDoItems;
}
