import { Box, Button, Typography } from "@mui/material";

import LogoSVG from "@/assets/NavigationPanel/Logo.svg?react";

import { Navigation } from "./Navigation.jsx";

const NavigationPanel = () => {

	return (
		<>
			<Box
				sx={{
					zIndex:"101",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					position: "fixed",
					left: "0px",
					bottom: "0px",
					top: "0px",
					height: "100%",
					width: "240px",
					background: "#1F2024",
					padding: "30px 20px",
				}}
			>
				<LogoSVG />
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
					<Navigation roleObject={{}}/>
				</Box>
			</Box>
		</>
	);
};

export { NavigationPanel };
