import { Box, Typography, Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

const MarketingPage = () => {
	const NavigationFunc = useNavigate();

	return (
		<Box pt="20px">
			{/* <Box
				width={"100%"}
				display={"flex"}
				alignItems={"center"}
				justifyContent={"start"}
				padding={"10px"}
				bgcolor={"white"}
				borderRadius={"10px"}
				gap={"10px"}
				mt={"10px"}
			>
				<Button
					onClick={() => {
						NavigationFunc("banner");
					}}
					sx={{
						padding: "10px",
						background: "#677697",
						borderRadius: "10px",
						textTransform: "none",
					}}
				>
					<Typography
						variant="subtitle1"
						color={"white"}
						fontWeight={700}
					>
						Рекламный баннер
					</Typography>
				</Button>
				<Button
					onClick={() => {
						NavigationFunc("discount");
					}}
					sx={{
						textTransform: "none",
						padding: "10px",
						background: "#677697",
						borderRadius: "10px",
					}}
				>
					<Typography
						variant="subtitle1"
						color={"white"}
						fontWeight={700}
					>
						Скидки
					</Typography>
				</Button>
				<Button
					onClick={() => {
						NavigationFunc("promo");
					}}
					sx={{
						textTransform: "none",
						padding: "10px",
						background: "#677697",
						borderRadius: "10px",
					}}
				>
					<Typography
						variant="subtitle1"
						color={"white"}
						fontWeight={700}
					>
						Промокоды
					</Typography>
				</Button>
			</Box> */}
			<Outlet />
		</Box>
	);
};

export { MarketingPage };
