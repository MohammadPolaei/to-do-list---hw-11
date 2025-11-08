import { El } from "../../utils/EL/EL";
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
			"flex flex-row items-center justify-center border-y-2 border-t-0 border-[#00000015] h-17",
		children: [
			El({
				element: "div",
				classList:
					"items-center p-5 w-500 border-x-2 border-r-0 h-17 border-[#00000015] overflow-hidden",
			}),
			El({
				element: "div",
				classList:
					"text-center flex justify-center items-center p-5 w-[100%] border-x-2 border-r-0 h-17 border-[#00000015] overflow-hidden",
			}),
			El({
				element: "div",
				classList:
					"text-center flex justify-center items-center p-5 w-[100%] border-x-2 border-r-0 h-17 border-[#00000015] overflow-hidden",
			}),
			El({
				element: "div",
				classList:
					"text-center flex justify-center items-center p-5 w-[100%] border-x-2 border-r-0 h-17 text-sm lg:text-md border-[#00000015] overflow-hidden",
			}),
			El({
				element: "div",
				classList:
					"text-center flex justify-center items-center p-5 w-[100%] border-x-2 border-r-0 h-17 border-[#00000015] overflow-hidden",
			}),
		],
	});
	return toDoList;
}
