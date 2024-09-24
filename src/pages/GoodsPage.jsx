import { Box, Typography, Button } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const GoodsPage = () => {
	const {pathname} = useLocation()
	const [activeLink, setActiveLink] = useState(pathname.split("/")[2]);
	const NavigateFunc = useNavigate();

	return (
		<>
			<Box
				width={"100%"}
				display={"flex"}
				alignItems={"center"}
				justifyContent={"start"}
				padding={"10px"}
				bgcolor={"white"}
				borderRadius={"10px"}
				gap={"10px"}
				my={"10px"}
			>
				<Button
					onClick={() => {
						NavigateFunc("categories");
						setActiveLink("categories");
					}}
					sx={{
						padding: "10px",
						background:
							activeLink == "categories" ? "#677697" : "#F4F7F9",
						borderRadius: "10px",
						textTransform: "none",
					}}
				>
					<Typography
						variant="subtitle1"
						color={ activeLink== "categories" ?"white": "black"}
						fontWeight={700}
					>
						Категории
					</Typography>
				</Button>
				<Button
					onClick={() => {
						NavigateFunc("subcategories");
						setActiveLink("subcategories");
					}}
					sx={{
						textTransform: "none",
						padding: "10px",
						background: activeLink == "subcategories" ? "#677697" : "#F4F7F9",
						borderRadius: "10px",
					}}
				>
					<Typography
						variant="subtitle1"
						color={activeLink == "subcategories" ? "white" : "black"}
						fontWeight={700}
					>
						Подкатегории
					</Typography>
				</Button>
				<Button
					onClick={() => {
						NavigateFunc("products");
						setActiveLink("products");
					}}
					sx={{
						textTransform: "none",
						padding: "10px",
						background: activeLink == "products" ? "#677697" : "#F4F7F9",
						borderRadius: "10px",
					}}
				>
					<Typography
						variant="subtitle1"
						color={activeLink == "products" ? "white" : "black"}
						fontWeight={700}
					>
						Товары
					</Typography>
				</Button>
			</Box>

			<Outlet />
		</>
	);
};

export { GoodsPage };
