import { Box, Button, Typography, IconButton } from "@mui/material";

import LogoSVG from "@/assets/NavigationPanel/Logo.svg?react";
import ArrowToLeftSVG from "@/assets/NavigationPanel/arrowToLeft.svg?react";
import { Navigation } from "./Navigation.jsx";
import { isNavigationPanelOpen } from "@/store.js";

const NavigationPanel = () => {
	const { isOpen, setIsOpen } = isNavigationPanelOpen();

	return (
		<>
			<Box
				sx={{
					zIndex: "101",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					position: "fixed",
					left: "0px",
					bottom: "0px",
					top: "0px",
					height: "100%",
					width: isOpen ? "240px" : "64px",
					background: "#1F2024",
					padding: isOpen? "30px 20px" : "30px 5px",
					transition: "all 500ms",
				}}
			>
				<LogoSVG
					style={{
						transition: "all 500ms",
						transform: isOpen ? "scale(1)" : "scale(0.0)",
					}}
				/>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						width: "100%",
						gap: "10px",
						my: "20px",
					}}
				>
					<Navigation roleObject={{}} />
				</Box>

				<IconButton
					onClick={setIsOpen}
					sx={{
						position: "absolute",
						right: "10px",
						top: "10px",
						borderRadius:"10px",
						background: "#F2F2F2",

						"&:hover": {
							background: "#E2E2E2",
						},
					}}
				>
					<ArrowToLeftSVG
						style={{
							transition: "all 500ms",
							transform: isOpen ? "" : "rotate(180deg)",
						}}
					/>
				</IconButton>
			</Box>
		</>
	);
};

export { NavigationPanel };
