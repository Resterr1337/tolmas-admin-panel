import { Box, Typography, Avatar } from "@mui/material";

const Header = () => {
	return (
		<>
			<Box
				sx={{
					zIndex:"100",
					width: "calc(100vw - 240px)",
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
					Дашборд
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
