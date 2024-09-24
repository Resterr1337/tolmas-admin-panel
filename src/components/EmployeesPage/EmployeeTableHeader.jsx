import { Box, Typography } from "@mui/material";

const EmployeeTableHeader = () => {
	return (
		<>
			<Box display={"flex"} bgcolor={"#677697"} alignItems={"center"}>
				<Typography
					p={"10px"}
					display={"flex"}
					flexBasis={"150px"}
					variant="subtitle1"
					fontWeight={700}
					flexGrow={1}
					color="white"
				>
					Логин
				</Typography>
				<Typography
					p={"10px"}
					display={"flex"}
					flexBasis={"300px"}
					variant="subtitle1"
					fontWeight={700}
					color="white"
				>
					Номер телефона
				</Typography>
				<Typography
					p={"10px"}
					display={"flex"}
					flexBasis={"150px"}
					variant="subtitle1"
					fontWeight={700}
					color="white"
				>
					Роль
				</Typography>
				<Typography
					p={"10px"}
					display={"flex"}
					flexBasis={"250px"}
					variant="subtitle1"
					fontWeight={700}
					color="white"
				>
					Добавлен
				</Typography>
				<Typography
					p={"10px"}
					display={"flex"}
					flexBasis={"150px"}
					variant="subtitle1"
					fontWeight={700}
					color="white"
				>
					Статус
				</Typography>
				<Typography
					p={"10px"}
					display={"flex"}
					flexBasis={"150px"}
					variant="subtitle1"
					fontWeight={700}
					color="white"
				>
					Действия
				</Typography>
			</Box>
		</>
	);
};

export { EmployeeTableHeader };
