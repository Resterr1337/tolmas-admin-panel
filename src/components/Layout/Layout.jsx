import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { NavigationPanel } from "../NavigationPanel/NavigationPanel.jsx";
import { Header } from "../Header/Header.jsx";

const Layout = () => {
	return (
		<>
			<NavigationPanel />
			<Header />
			<main
				style={{
					zIndex: "1",
					position: "absolute",
					left: "250px",
					top: "100px",
					width: "calc(100vmax - 260px)",
				}}
			>
				<Outlet />
			</main>
		</>
	);
};

export { Layout };
