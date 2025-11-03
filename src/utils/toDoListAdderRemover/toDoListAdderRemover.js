import { ToDoListMaker } from "../../components/toDoList/toDoList";
import { El } from "../EL/EL";

export function ToDoListAdderRemover() {
	const toDoItems = ToDoListMaker();

	Array.from(toDoItems.children).forEach((item, index) => {
		switch (index) {
			case 0:
				item.innerHTML = "Hi";
				break;
			case 1:
				const priorityBox = El({
					element: "div",
					classList: "py-1 px-3 w-fit rounded-4xl bg-black text-white",
				});
				priorityBox.innerHTML = "low";
				item.append(priorityBox);
				break;
			case 2:
				const statusBox = El({
					element: "div",
					classList: "py-1 px-3 w-fit rounded-4xl bg-black text-white",
				});

				statusBox.innerHTML = "todo";
				item.append(statusBox);
				break;
			case 3:
				const DeadlineBox = El({
					element: "div",
					classList: "py-1 px-3 w-fit rounded-4xl border-1 border-[#3333ffbb]",
				});
				DeadlineBox.innerHTML = "date";
				item.append(DeadlineBox);
				break;
			case 4:
				const actions = El({
					element: "div",
					classList: "flex flex-row gap-1 justify-center items-center",
					children: [
						El({
							element: "button",

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
						}),
						El({
							element: "button",

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
						}),

						El({
							element: "button",

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
						}),
					],
				});

				item.append(actions);
				break;

			default:
				break;
		}
	});

	return toDoItems;
}
