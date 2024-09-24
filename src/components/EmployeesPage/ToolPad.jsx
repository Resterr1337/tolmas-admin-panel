import { Box, Typography, Button, TextField } from "@mui/material";
import PlusSVG from "@/assets/BannerPage/plus.svg?react";

const ToolPad = ({setIsModalOpen}) => {
	return (
		<>
			<Box
				mt={"10px"}
				display={"flex"}
				alignItems={"center"}
				justifyContent={"space-between"}
				p={"10px"}
				bgcolor={"white"}
			>
				<Typography fontWeight={700} variant={"h5"}>
					Сотрудники
				</Typography>

				<Box
					borderRadius={"10px"}
					width={"50%"}
					display={"flex"}
					p={"10px"}
					bgcolor={"#F4F7F9"}
					alignItems={"center"}
				>
					<TextField
						InputProps={{
							disableUnderline: true,
						}}
						placeholder="Поиск.."
						fullWidth
						variant="standard"
					></TextField>
				</Box>

				<Button
					onClick={() => setIsModalOpen(true)}
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
						Добавить сотрудника
					</Typography>
				</Button>
			</Box>
		</>
	);
};

export { ToolPad };
