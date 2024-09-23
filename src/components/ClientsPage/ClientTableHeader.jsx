import { Box, Typography } from "@mui/material";

const ClientsTableHeader = () => {
	return (
		<>
			<Box
				width={"100%"}
				display={"flex"}
				alignItems={"center"}
				p="10px 5px"
				bgcolor={"#677697"}
			>
				<Box display={"flex"} flexBasis={"100px"} alignItems={"center"}>
					<Typography
						variant="subtitle1"
						fontWeight={700}
						color="white"
					>
						ID
					</Typography>
				</Box>
				<Box
					pl={"5px"}
					display={"flex"}
					flexGrow={1}
					flexBasis={"200px"}
					alignItems={"center"}
				>
					<Typography
						variant="subtitle1"
						fontWeight={700}
						color="white"
					>
						Имя клиента
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
						Имя пользователя
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
						Номер телефона
					</Typography>
				</Box>
				<Box
					pl={"5px"}
					display={"flex"}
					flexBasis={"200px"}
					alignItems={"center"}
				>
					<Typography
						variant="subtitle1"
						fontWeight={700}
						color="white"
					>
						Кол-во заказов
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
						Дата добавления
					</Typography>
				</Box>
				<Box
					pl={"5px"}
					display={"flex"}
					flexBasis={"200px"}
					alignItems={"center"}
				>
					<Typography
						variant="subtitle1"
						fontWeight={700}
						color="white"
					>
						Платформа
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export { ClientsTableHeader };
