import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { NavigationPanel } from "../NavigationPanel/NavigationPanel.jsx";
import { Header } from "../Header/Header.jsx";
import { isNavigationPanelOpen} from "@/store.js";

const Layout = () => {
	const { isOpen } = isNavigationPanelOpen();

	return (
		<>
			<NavigationPanel />
			<Header />
			<main
				style={{
					zIndex: "1",
					position: "absolute",
					left: isOpen? "250px": "70px",
					top: "100px",
					width: isOpen? "calc(100vmax - 260px)": "calc(100vmax - 80px)",
					transition:"all 500ms"
				}}
			>
				<Outlet />
			</main>
		</>
	);
};

export { Layout };
