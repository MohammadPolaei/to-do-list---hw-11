import { El } from "../../utils/EL/EL";

export function PagesNumber() {
	const pageNum = El({
		element: "div",
		classList: "flex flex-row justify-end mx-5 my-10",
		children: [
			El({
				element: "div",
				classList: "flex flex-row gap-10",
				children: [
					El({
						element: "div",
						classList: "",
						innerText: "Rows per page:",
					}),
					El({
						element: "select",
						classList: "outline-0",
						children: [
							El({
								element: "option",
								value: "All",
								innerText: "All",
							}),
							El({
								element: "option",
								value: "To Do",
								innerText: "To Do",
							}),
							El({
								element: "option",
								value: "Doing",
								innerText: "Doing",
							}),
							El({
								element: "option",
								value: "Done",
								innerText: "Done",
							}),
						],
					}),
					El({
						element: "div",
						innerText: "1-3 of 3",
					}),
				],
			}),
		],
	});
	return pageNum;
}
