import { Typography, Box } from "@mui/material";

const ClientOrderTableHeader = () => {
	return (
		<>
			<Box
				display={"flex"}
				flexGrow={1}
				alignItems={"center"}
				bgcolor={"#677697"}
				p={"10px"}
			>
				<Typography
					variant={"subtitle1"}
					fontWeight={700}
					color="white"
					display={"flex"}
					flexBasis={"100px"}
				>
					ID заказа
				</Typography>
				<Typography
					variant={"subtitle1"}
					fontWeight={700}
					color="white"
					display={"flex"}
					flexBasis={"220px"}
				>
					Дата и время
				</Typography>
				<Typography
					variant={"subtitle1"}
					fontWeight={700}
					color="white"
					display={"flex"}
					flexBasis={"200px"}
				>
					Стоимость
				</Typography>
				<Typography
					variant={"subtitle1"}
					fontWeight={700}
					color="white"
					display={"flex"}
					flexBasis={"300px"}
				>
					Способ оплаты
				</Typography>
				<Typography
					variant={"subtitle1"}
					fontWeight={700}
					color="white"
					display={"flex"}
					flexBasis={"200px"}
				>
					Тип доставки
				</Typography>
				<Typography
					variant={"subtitle1"}
					fontWeight={700}
					color="white"
					display={"flex"}
					flexGrow={"1"}
					flexBasis={"100px"}
				>
					Статус
				</Typography>
			</Box>
		</>
	);
};

export { ClientOrderTableHeader };
