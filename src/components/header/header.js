import { main } from "../../main";
import { ToAddIntoLocalstorage } from "../../utils/EL/dataOfLocalstorage/dataOfLocalstorage";
import { El } from "../../utils/EL/EL";

// add new list button
const addNewListButton = El({
	element: "button",
	children: [
		El({
			element: "img",
			src: "/images/addButton.svg",
			classList: "w-8",
		}),
	],
});

addNewListButton.addEventListener("click", () => {
	main.append(ToAddIntoLocalstorage());
});

// header

export const header = El({
	element: "header",
	classList:
		"bg-[#6200ea] h-15 flex flex-row justify-between items-center px-3",
	children: [
		El({
			element: "div",
			children: [
				El({
					element: "img",
					src: "/images/burgerMenu.svg",
					classList: "w-8",
				}),
				El({
					element: "div",
					classList: "text-white",
				}),
			],
		}),
		El({
			element: "div",
			classList: "flex flex-row gap-5",
			children: [
				El({
					element: "input",
					placeholder: "Search",
					classList:
						"bg-[#ffffff22] rounded-[5px] h-10 px-3 text-[#ffffffbb] placeholder:text-[#ffffff55] outline-0",
				}),
				El({
					element: "img",
					src: "/images/filterIcon.svg",
					classList: "w-8",
				}),
				addNewListButton,
			],
		}),
	],
});
