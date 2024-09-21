import { isNavigationPanelOpen } from "@/store";
import { Box, Typography, Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
	const {isOpen} = isNavigationPanelOpen()

	const { pathname } = useLocation();
	
	const headersObj = {
		"/orders": "Заказы",
		"/": "Дашборд",
		"/products": "Продукты",
		"/marketing": "Маркетинг",
		"/clients": "Клиенты",
		"/filials": "Филиалы",
		"/delivery": "Доставка",
		"/settings": "Настройки",
	};
	
	const [headerTitle, setHeaderTitle] = useState(headersObj[pathname]);
	useEffect(() => {
		setHeaderTitle(headersObj[pathname]);
	}, [pathname]);

	return (
		<>
			<Box
				sx={{
					zIndex: "10",
					width: isOpen? "calc(100vw - 240px)": "calc(100vw - 60px)",
					transition:"all 500ms",
					height: "100px",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					position: "fixed",
					top: "0px",
					right: "0px",
					background: "white",
					boxShadow: "20px 0px 100px #00000010",
				}}
			>
				{/* Сделать динамичное изменение титла */}
				<Typography m={"20px 10px"} fontWeight={700} variant="h4">
					{headerTitle}
				</Typography>

				<Box
					display={"flex"}
					gap={"10px"}
					alignItems={"center"}
					m={"20px 10px"}
				>
					<Typography fontWeight={600} variant="subtitle1">
						Name Surname
					</Typography>
					<Avatar sx={{ bgcolor: "#EAF2FD", color: "black" }}>
						<Typography fontWeight={600} variant="subtitle1">
							NS
						</Typography>
					</Avatar>
				</Box>
			</Box>
		</>
	);
};

export { Header };
