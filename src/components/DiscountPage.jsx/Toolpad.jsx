import { Box, Button, Typography } from "@mui/material";
import PlusSVG from "@/assets/BannerPage/plus.svg?react";

const ToolPad = ({ setIsDiscountAddModalOpen }) => {
	return (
		<Box
			p={"10px"}
			bgcolor={"white"}
			display={"flex"}
			alignItems={"center"}
			justifyContent={"space-between"}
		>
			<Typography fontWeight={700} color="#1F2024" variant="h5">
				Скидка
			</Typography>

			<Button
				onClick={() => setIsDiscountAddModalOpen(true)}
				sx={{
					padding: "10px",
					bgcolor: "#EAF2FD",
					borderRadius: "10px",
					textTransform: "none",
					gap: "5px",
				}}
			>
				<PlusSVG />
				<Typography
					fontWeight={700}
					variant="subtitle1"
					fontSize={"18px"}
					color="#1F2024"
				>
					Добавить
				</Typography>
			</Button>
		</Box>
	);
};

export { ToolPad };
