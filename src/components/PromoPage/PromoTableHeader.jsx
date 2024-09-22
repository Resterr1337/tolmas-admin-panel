import { Box, Typography } from "@mui/material";

const PromoTableHeader = () => {
	return (
		<>
			<Box
				width={"100%"}
				display={"flex"}
				alignItems={"center"}
				p="10px 5px"
				bgcolor={"#677697"}
			>
				<Box display={"flex"} flexBasis={"20px"} alignItems={"center"}>
					<Typography
						variant="subtitle1"
						fontWeight={700}
						color="white"
					>
						№
					</Typography>
				</Box>
				<Box
					pl={"5px"}
					display={"flex"}
					flexGrow={1}
					flexBasis={"350px"}
					alignItems={"center"}
				>
					<Typography
						variant="subtitle1"
						fontWeight={700}
						color="white"
					>
						Название промокода
					</Typography>
				</Box>
				<Box
					pl={"5px"}
					display={"flex"}
					flexBasis={"120px"}
					alignItems={"center"}
				>
					<Typography
						variant="subtitle1"
						fontWeight={700}
						color="white"
					>
						Продукты
					</Typography>
				</Box>
				<Box
					pl={"5px"}
					display={"flex"}
					flexBasis={"140px"}
					alignItems={"center"}
				>
					<Typography
						variant="subtitle1"
						fontWeight={700}
						color="white"
					>
						Тип промокода
					</Typography>
				</Box>
				<Box
					pl={"5px"}
					display={"flex"}
					flexBasis={"300px"}
					alignItems={"center"}
				>
					<Typography
						variant="subtitle1"
						fontWeight={700}
						color="white"
					>
						От
					</Typography>
				</Box>
				<Box
					pl={"5px"}
					display={"flex"}
					flexBasis={"300px"}
					alignItems={"center"}
				>
					<Typography
						variant="subtitle1"
						fontWeight={700}
						color="white"
					>
						До
					</Typography>
				</Box>
				<Box
					pl={"5px"}
					display={"flex"}
					flexBasis={"100px"}
					alignItems={"center"}
				>
					<Typography
						variant="subtitle1"
						fontWeight={700}
						color="white"
					>
						Действия
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export { PromoTableHeader };
