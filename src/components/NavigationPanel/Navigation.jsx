import {
	Button,
	Typography,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";

import DashboardSVG from "@/assets/NavigationPanel/dashboard.svg?react";
import OrdersSVG from "@/assets/NavigationPanel/orders.svg?react";
import ProductSVG from "@/assets/NavigationPanel/product.svg?react";
import ArrowToDownSVG from "@/assets/NavigationPanel/arrowToDown.svg?react";
import MarketingSVG from "@/assets/NavigationPanel/marketing.svg?react";
import ClientsSVG from "@/assets/NavigationPanel/clients.svg?react";
import FilialSVG from "@/assets/NavigationPanel/filials.svg?react";
import DeliverySVG from "@/assets/NavigationPanel/delivery.svg?react";
import SettingsSVG from "@/assets/NavigationPanel/settings.svg?react";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { isNavigationPanelOpen } from "@/store";

// # Сделать так чтобы , кнопки появлялись в зависимости от роли

const Navigation = ({ roleobject }) => {
	const { isOpen, setIsOpen } = isNavigationPanelOpen();

	const NavigateFunc = useNavigate();
	const { pathname } = useLocation();
	const [activeLink, setActiveLink] = useState(pathname);

	const handleButtonClick = (link) => {
		setActiveLink(link);
		NavigateFunc(link);
	};

	const handleAccordionClick = (link) => {
		setActiveLink(link);
		NavigateFunc(link);
	};

	return (
		<>
			<Button
				onClick={() => {
					handleButtonClick("/");
				}}
				sx={{
					background: activeLink == "/" ? "#DCDCDC" : "none",
					textTransform: "none",
					display: "flex",
					alignItems: "center",
					justifyContent: isOpen ? "start" : "center",
					gap: "5px",
					color: activeLink == "/" ? "#1f2024" : "#f2f2f2",

					".path_fill": {
						fill: activeLink == "/" ? "#1f2024" : "#f2f2f2",
					},
					".path_stroke": {
						stroke: activeLink == "/" ? "#1f2024" : "#f2f2f2",
					},
				}}
				fullWidth
			>
				<DashboardSVG />
				<Typography
					sx={{
						fontSize: isOpen ? "1rem" : "0rem",
						transition: "all 500ms",
					}}
					fontWeight={700}
					variant="subtitle1"
				>
					Дашборд
				</Typography>
			</Button>
			<Button
				onClick={() => {
					handleButtonClick("/orders");
				}}
				sx={{
					background: activeLink == "/orders" ? "#DCDCDC" : "none",
					textTransform: "none",
					display: "flex",
					alignItems: "center",
					justifyContent: isOpen ? "start" : "center",
					gap: "5px",
					color: activeLink == "/orders" ? "#1f2024" : "#f2f2f2",

					".path_fill": {
						fill: activeLink == "/orders" ? "#1f2024" : "#f2f2f2",
					},
					".path_stroke": {
						stroke: activeLink == "/orders" ? "#1f2024" : "#f2f2f2",
					},
				}}
				fullWidth
			>
				<OrdersSVG />
				<Typography
					sx={{
						fontSize: isOpen ? "1rem" : "0rem",
						transition: "all 500ms",
					}}
					fontWeight={700}
					variant="subtitle1"
				>
					Заказы
				</Typography>
			</Button>
			<Button
				onClick={() => {
					handleButtonClick("/products/products");
				}}
				sx={{
					background:
						activeLink.split("/")[1] == "products"
							? "#DCDCDC"
							: "none",
					textTransform: "none",
					display: "flex",
					alignItems: "center",
					justifyContent: isOpen ? "start" : "center",
					gap: "5px",
					color:
						activeLink.split("/")[1] == "products"
							? "#1f2024"
							: "#f2f2f2",

					".path_fill": {
						fill:
							activeLink.split("/")[1] == "products"
								? "#1f2024"
								: "#f2f2f2",
					},
					".path_stroke": {
						stroke:
							activeLink.split("/")[1] == "products"
								? "#1f2024"
								: "#f2f2f2",
					},
				}}
				fullWidth
			>
				<ProductSVG />
				<Typography
					sx={{
						fontSize: isOpen ? "1rem" : "0rem",
						transition: "all 500ms",
					}}
					fontWeight={700}
					variant="subtitle1"
				>
					Продукты
				</Typography>
			</Button>

			<Accordion
				onChange={() => {
					if (isOpen) {
						handleAccordionClick("/marketing/banner");
					} else {
						setIsOpen();
						handleAccordionClick("/marketing/banner");
					}
				}}
				disableGutters={true}
				expanded={
					activeLink.split("/")[1] == "marketing" ? true : false
				}
				elevation={0}
				sx={{
					width: "100%",
					padding: "0px",
					borderRadius: "5px",
					background:
						activeLink.split("/")[1] == "marketing"
							? "white"
							: "#1F2024",
				}}
			>
				<AccordionSummary
					expandIcon={isOpen ? <ArrowToDownSVG /> : <></>}
					aria-controls="panel1-content"
					id="panel1-header"
					sx={{
						background:
							activeLink.split("/")[1] == "marketing"
								? "#DCDCDC"
								: "#1F2024",
						textTransform: "none",
						display: "flex",
						alignItems: "center",
						justifyContent: isOpen ? "start" : "center",
						borderRadius: "5px",
						padding: "0px 0px",
						margin: "5px 5px",
						color:
							activeLink.split("/")[1] == "marketing"
								? "#1f2024"
								: "#f2f2f2",

						".MuiAccordionSummary-content": {
							justifyContent: isOpen ? "start" : "center",
						},

						".path_fill": {
							fill:
								activeLink.split("/")[1] == "marketing"
									? "#1f2024"
									: "#f2f2f2",
						},
						".path_stroke": {
							stroke:
								activeLink.split("/")[1] == "marketing"
									? "#1f2024"
									: "#f2f2f2",
						},
					}}
				>
					<MarketingSVG />
					<Typography
						sx={{
							fontSize: isOpen ? "1rem" : "0rem",
							transition: "all 500ms",
						}}
						mx={isOpen ? "5px" : "0px"}
						fontWeight={700}
						variant="subtitle1"
					>
						Маркетинг
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography
						onClick={() => handleButtonClick("/marketing/banner")}
						color={
							activeLink == "/marketing/banner"
								? "#000000"
								: "#8F9098"
						}
						sx={{
							cursor: "pointer",
							fontSize: isOpen ? "1rem" : "0rem",
							transition: "all 500ms",
						}}
						variant="subtitle1"
					>
						Рекламный баннер
					</Typography>
					<Typography
						onClick={() => handleButtonClick("/marketing/discount")}
						color={
							activeLink == "/marketing/discount"
								? "#000000"
								: "#8F9098"
						}
						sx={{
							cursor: "pointer",
							fontSize: isOpen ? "1rem" : "0rem",
							transition: "all 500ms",
						}}
						variant="subtitle1"
					>
						Скидки
					</Typography>
					<Typography
						onClick={() => handleButtonClick("/marketing/promo")}
						color={
							activeLink == "/marketing/promo"
								? "#000000"
								: "#8F9098"
						}
						sx={{
							cursor: "pointer",
							fontSize: isOpen ? "1rem" : "0rem",
							transition: "all 500ms",
						}}
						variant="subtitle1"
					>
						Промокоды
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Button
				onClick={() => {
					handleButtonClick("/clients");
				}}
				sx={{
					background:
						activeLink.split("/")[1] == "clients"
							? "#DCDCDC"
							: "none",
					textTransform: "none",
					display: "flex",
					alignItems: "center",
					justifyContent: isOpen ? "start" : "center",
					gap: "5px",
					color:
						activeLink.split("/")[1] == "clients"
							? "#1f2024"
							: "#f2f2f2",

					".path_fill": {
						fill:
							activeLink.split("/")[1] == "clients"
								? "#1f2024"
								: "#f2f2f2",
					},
					".path_stroke": {
						stroke:
							activeLink.split("/")[1] == "clients"
								? "#1f2024"
								: "#f2f2f2",
					},
				}}
				fullWidth
			>
				<ClientsSVG />
				<Typography
					sx={{
						fontSize: isOpen ? "1rem" : "0rem",
						transition: "all 500ms",
					}}
					fontWeight={700}
					variant="subtitle1"
				>
					Клиенты
				</Typography>
			</Button>
			<Button
				onClick={() => {
					handleButtonClick("/filials");
				}}
				sx={{
					background: activeLink == "/filials" ? "#DCDCDC" : "none",
					textTransform: "none",
					display: "flex",
					alignItems: "center",
					justifyContent: isOpen ? "start" : "center",
					gap: "5px",
					color: activeLink == "/filials" ? "#1f2024" : "#f2f2f2",

					".path_fill": {
						fill: activeLink == "/filials" ? "#1f2024" : "#f2f2f2",
					},
					".path_stroke": {
						stroke:
							activeLink == "/filials" ? "#1f2024" : "#f2f2f2",
					},
				}}
				fullWidth
			>
				<FilialSVG />
				<Typography
					sx={{
						fontSize: isOpen ? "1rem" : "0rem",
						transition: "all 500ms",
					}}
					fontWeight={700}
					variant="subtitle1"
				>
					Филиалы
				</Typography>
			</Button>
			<Button
				onClick={() => {
					handleButtonClick("/delivery");
				}}
				sx={{
					background: activeLink == "/delivery" ? "#DCDCDC" : "none",
					textTransform: "none",
					display: "flex",
					alignItems: "center",
					justifyContent: isOpen ? "start" : "center",
					gap: "5px",
					color: activeLink == "/delivery" ? "#1f2024" : "#f2f2f2",

					".path_fill": {
						fill: activeLink == "/delivery" ? "#1f2024" : "#f2f2f2",
					},
					".path_stroke": {
						stroke:
							activeLink == "/delivery" ? "#1f2024" : "#f2f2f2",
					},
				}}
				fullWidth
			>
				<DeliverySVG />
				<Typography
					sx={{
						fontSize: isOpen ? "1rem" : "0rem",
						transition: "all 500ms",
					}}
					fontWeight={700}
					variant="subtitle1"
				>
					Доставка
				</Typography>
			</Button>
			<Accordion
				onChange={() => {
					if (isOpen) {
						handleAccordionClick("/settings/employees");
					} else {
						setIsOpen();
						handleAccordionClick("/settings/employees");
					}
				}}
				disableGutters={true}
				expanded={
					activeLink.split("/")[1] == "settings" ? true : false
				}
				elevation={0}
				sx={{
					width: "100%",
					padding: "0px",
					borderRadius: "5px",
					background:
						activeLink.split("/")[1] == "settings"
							? "white"
							: "#1F2024",
				}}
			>
				<AccordionSummary
					expandIcon={isOpen ? <ArrowToDownSVG /> : <></>}
					aria-controls="panel1-content"
					id="panel1-header"
					sx={{
						background:
							activeLink.split("/")[1] == "settings"
								? "#DCDCDC"
								: "#1F2024",
						textTransform: "none",
						display: "flex",
						alignItems: "center",
						justifyContent: isOpen ? "start" : "center",
						borderRadius: "5px",
						padding: "0px 0px",
						margin: "5px 5px",
						color:
							activeLink.split("/")[1] == "settings"
								? "#1f2024"
								: "#f2f2f2",

						".MuiAccordionSummary-content": {
							justifyContent: isOpen ? "start" : "center",
						},

						".path_fill": {
							fill:
								activeLink.split("/")[1] == "settings"
									? "#1f2024"
									: "#f2f2f2",
						},
						".path_stroke": {
							stroke:
								activeLink.split("/")[1] == "settings"
									? "#1f2024"
									: "#f2f2f2",
						},
					}}
				>
					<SettingsSVG />
					<Typography
						sx={{
							fontSize: isOpen ? "1rem" : "0rem",
							transition: "all 500ms",
						}}
						mx={isOpen ? "5px" : "0px"}
						fontWeight={700}
						variant="subtitle1"
					>
						Настройки
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography
						onClick={() => handleButtonClick("/settings/employees")}
						color={
							activeLink == "/settings/employees"
								? "#000000"
								: "#8F9098"
						}
						sx={{
							cursor: "pointer",
							fontSize: isOpen ? "1rem" : "0rem",
							transition: "all 500ms",
						}}
						variant="subtitle1"
					>
						Сотрудники
					</Typography>
					<Typography
						onClick={() => handleButtonClick("/settings/roles")}
						color={
							activeLink == "/settings/roles"
								? "#000000"
								: "#8F9098"
						}
						sx={{
							cursor: "pointer",
							fontSize: isOpen ? "1rem" : "0rem",
							transition: "all 500ms",
						}}
						variant="subtitle1"
					>
						Роли
					</Typography>
				</AccordionDetails>
			</Accordion>
		</>
	);
};

export { Navigation };
