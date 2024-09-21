import { Box, Typography, Button } from "@mui/material";
import FiltersSVG from "@/assets/OrdersPage/filters.svg?react";
import PlusSVG from "@/assets/OrdersPage/plus.svg?react";

const ToolPanel = () => {
	return (
		<Box
			sx={{
				background: "white",
				alignItems: "center",
				justifyContent: "space-between",
				display: "flex",
				gap: "10px",
				height: "72px",
				width: "100%",
				mt: "10px",
				borderRadius: "10px",
				padding: "10px",
			}}
		>
			<Typography fontWeight={700} variant="h5">
				Список заказов
			</Typography>
			<Box display={"flex"} gap={"10px"}>
				<Button
					sx={{
						display: "flex",
						gap: "5px",
						backgroundColor: "#EAF2FD",
						borderRadius: "10px",
						padding: "12.5px",
						textTransform: "none",
					}}
				>
					<FiltersSVG />
					<Typography
						fontWeight={700}
						color="#1F2024"
						variant="subtitle1"
					>
						Фильтры
					</Typography>
				</Button>
				<Button
					sx={{
						display: "flex",
						gap: "5px",
						backgroundColor: "#EAF2FD",
						borderRadius: "10px",
						padding: "12.5px",
						textTransform: "none",
					}}
				>
					<PlusSVG />
					<Typography
						fontWeight={700}
						color="#1F2024"
						variant="subtitle1"
					>
						Создать заказ
					</Typography>
				</Button>
			</Box>
		</Box>
	);
};

export { ToolPanel };
