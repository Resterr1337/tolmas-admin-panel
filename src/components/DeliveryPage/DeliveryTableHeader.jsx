import { Box, Typography } from "@mui/material";

const DeliveryTableHeader = () => {
	return (
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
				flexBasis={"30px"}
			>
				№
			</Typography>
			<Typography
				variant={"subtitle1"}
				fontWeight={700}
				color="white"
				display={"flex"}
				flexBasis={"220px"}
			>
				Марка машины
			</Typography>
			<Typography
				variant={"subtitle1"}
				fontWeight={700}
				color="white"
				display={"flex"}
				flexBasis={"200px"}
			>
				Номер машины
			</Typography>
			<Typography
				variant={"subtitle1"}
				fontWeight={700}
                flexGrow={1}
				color="white"
				display={"flex"}
				flexBasis={"300px"}
			>
				Номер телефона
			</Typography>
			<Typography
				variant={"subtitle1"}
				fontWeight={700}
				color="white"
				display={"flex"}
				flexBasis={"200px"}
			>
				Кол-во заказов
			</Typography>
			<Typography
				variant={"subtitle1"}
				fontWeight={700}
				color="white"
				display={"flex"}
				flexBasis={"200px"}
			>
				Действия
			</Typography>
		</Box>
	);
};

export { DeliveryTableHeader };
