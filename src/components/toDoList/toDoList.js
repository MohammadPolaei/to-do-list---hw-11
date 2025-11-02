import { El } from "../../utils/EL";
export function toDoListContainer() {
	El({
		element: "div",
		classList: "flex flex-col",
	});
}
export function ToDoListMaker() {
	const toDoList = El({
		element: "div",
		classList:
			"flex flex-row justify-center border-y-2 border-t-0 border-[#00000015]",
		children: [
			El({
				element: "div",
				classList:
					"items-center p-5 w-500 border-x-2 border-r-0 border-[#00000015]",
			}),
			El({
				element: "div",
				classList:
					"text-center items-center p-5 w-[100%] border-x-2 border-r-0 border-[#00000015]",
			}),
			El({
				element: "div",
				classList:
					"text-center items-center p-5 w-[100%] border-x-2 border-r-0 border-[#00000015]",
			}),
			El({
				element: "div",
				classList:
					"text-center items-center p-5 w-[100%] border-x-2 border-r-0 border-[#00000015]",
			}),
			El({
				element: "div",
				classList:
					"text-center items-center p-5 w-[100%] border-x-2 border-r-0 border-[#00000015]",
			}),
		],
	});
	return toDoList;
}
