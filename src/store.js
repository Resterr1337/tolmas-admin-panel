import { create } from "zustand";

const isNavigationPanelOpen = create((set, get) => ({
	isOpen: true,
	setIsOpen: () => {
		const { isOpen } = get();
        console.log(isOpen)
		set({
			isOpen: !isOpen,
		});
	},
}));

export { isNavigationPanelOpen };
