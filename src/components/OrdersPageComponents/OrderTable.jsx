import { Box, TextField, Typography } from "@mui/material";
import { Order } from "./Order";

const OrderTable = ({ ordersArray }) => {
	return (
		<>
			<Box
				width={"100%"}
				display={"flex"}
				alignItems={"center"}
				flexWrap={"wrap"}
			>
				{/* Кнопки сортировки */}
				<Box display={"flex"} flexGrow={"1"}>
					{/* Сортировка по статусам */}
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"center"}
						flexGrow={1}
					>
						<Typography fontWeight={700} variant="subtitle1">
							Все
						</Typography>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"center"}
						flexGrow={1}
					>
						<Typography fontWeight={700} variant="subtitle1">
							Новый
						</Typography>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"center"}
						flexGrow={1}
					>
						<Typography fontWeight={700} variant="subtitle1">
							В процессе
						</Typography>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"center"}
						flexGrow={1}
					>
						<Typography fontWeight={700} variant="subtitle1">
							Готов
						</Typography>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"center"}
						flexGrow={1}
					>
						<Typography fontWeight={700} variant="subtitle1">
							В пути
						</Typography>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"center"}
						flexGrow={1}
					>
						<Typography fontWeight={700} variant="subtitle1">
							Успешно
						</Typography>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"center"}
						flexGrow={1}
					>
						<Typography fontWeight={700} variant="subtitle1">
							Отменен
						</Typography>
					</Box>
				</Box>
				{/* Поиск */}
				<Box
					display={"flex"}
					flexGrow={1}
					alignItems={"center"}
					justifyContent={"center"}
					bgcolor={"#677697"}
					padding={"10px"}
				>
					<TextField
						fullWidth
						placeholder="Поис по ID заказов, клиентам"
						variant="standard"
						InputProps={{
							disableUnderline: true,
						}}
						sx={{
							bgcolor: "white",
							borderRadius: "10px",
							fontSize: "1rem",
							fontWeight: "700",
							fontFamily: "Onest sans-serif",
							padding: "10px",
						}}
					></TextField>
				</Box>

				{/* Поля для таблица */}
				<Box
					width={"100%"}
					display={"flex"}
					alignItems={"center"}
					bgcolor={"#677697"}
				>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"start"}
						flexShrink={1}
						flexBasis={"70px"}
						sx={{padding: "10px" }}
					>
						<Typography
							variant="subtitle1"
							fontWeigh={700}
							color={"white"}
						>
							ID
						</Typography>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"start"}
						flexShrink={1}
						flexBasis={"160px"}
						sx={{padding: "10px" }}
					>
						<Typography
							variant="subtitle1"
							fontWeigh={700}
							color={"white"}
						>
							Имя клиента
						</Typography>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"start"}
						flexShrink={1}
						flexBasis={"200px"}
						sx={{padding: "10px" }}
					>
						<Typography
							variant="subtitle1"
							fontWeigh={700}
							color={"white"}
						>
							Дата и время
						</Typography>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"start"}
						flexShrink={1}
						flexBasis={"160px"}
						sx={{padding: "10px" }}
					>
						<Typography
							variant="subtitle1"
							fontWeigh={700}
							color={"white"}
						>
							Стоимость
						</Typography>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"start"}
						flexShrink={1}
						flexBasis={"160px"}
						sx={{padding: "10px" }}
					>
						<Typography
							variant="subtitle1"
							fontWeigh={700}
							color={"white"}
						>
							Способ оплаты
						</Typography>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"start"}
						flexShrink={1}
						flexBasis={"160px"}
						sx={{padding: "10px" }}
					>
						<Typography
							variant="subtitle1"
							fontWeigh={700}
							color={"white"}
						>
							Тип доставки
						</Typography>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"start"}
						flexShrink={1}
						flexBasis={"160px"}
						sx={{padding: "10px" }}
					>
						<Typography
							variant="subtitle1"
							fontWeigh={700}
							color={"white"}
						>
							Статус
						</Typography>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"start"}
						flexShrink={1}
						flexBasis={"120px"}
						sx={{padding: "10px" }}
					>
						<Typography
							variant="subtitle1"
							fontWeigh={700}
							color={"white"}
						>
							Платформа
						</Typography>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"start"}
						flexGrow={1}
						sx={{ padding: "10px" }}
					>
						<Typography
							variant="subtitle1"
							fontWeigh={700}
							color={"white"}
						>
							Действие
						</Typography>
					</Box>
				</Box>

				{/* Контейнер для самих заказов */}
				<Box
					display={"flex"}
					width={"100%"}
					flexDirection={"column"}
					gap={"5px"}
				>
					{ordersArray ? (
						ordersArray.map((item, index) => {
							return <Order key={index} orderItem={item} />;
						})
					) : (
						<Typography fontWeight={700} variant="subtitle1">
							Заказов нету
						</Typography>
					)}
				</Box>
			</Box>
		</>
	);
};

export { OrderTable };
