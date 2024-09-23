import { Box, Typography } from "@mui/material";
import { formatPrice } from "@/utils";

const ClientOrderHistory = ({ clientObject }) => {
	return (
		<Box p={"10px"}>
			<Typography fontWeight={700} variant="h4">
				История заказов
			</Typography>
			<Box
				my={"10px"}
				display={"flex"}
				alignItems={"center"}
				gap={"10px"}
			>
				<Box
					p={"10px"}
					borderRadius={"10px"}
					bgcolor={"#F4F7F9"}
					display={"flex"}
					flexGrow={1}
					height={"135px"}
					alignItems={"end"}
                    position={"relative"}
				>
                    <img style={{position:"absolute", top:"2px", right:"2px"}} src="/assets/ClientPage/History.png"/>
					<Box display={"flex"} flexDirection={"column"} gap={"5px"}>
						<Typography variant={"h4"} fontWeight={700}>
							{clientObject.orders.length}
						</Typography>
						<Typography variant={"subtitle1"} fontWeight={700}>
							Количество заказов
						</Typography>
					</Box>
				</Box>
				<Box
					p={"10px"}
					borderRadius={"10px"}
					bgcolor={"#F4F7F9"}
					display={"flex"}
					flexGrow={1}
					height={"135px"}
					alignItems={"end"}
                    position={"relative"}
				>
                    <img style={{position:"absolute", top:"2px", right:"2px"}} src="/assets/ClientPage/accepted.png" />
					<Box display={"flex"} flexDirection={"column"} gap={"5px"}>
						<Typography variant={"h4"} fontWeight={700}>
							{clientObject.orders.length}
						</Typography>
						<Typography variant={"subtitle1"} fontWeight={700}>
							Успешных заказов
						</Typography>
					</Box>
				</Box>
				<Box
					borderRadius={"10px"}
					p={"10px"}
					bgcolor={"#F4F7F9"}
					display={"flex"}
					flexGrow={1}
					height={"135px"}
					alignItems={"end"}
                    position={"relative"}
				>
                    <img style={{position:"absolute", top:"2px", right:"2px"}} src="/assets/ClientPage/money.png" />
					<Box display={"flex"} flexDirection={"column"} gap={"5px"}>
						<Typography variant={"h4"} fontWeight={700}>
							{formatPrice(
								clientObject.orders.reduce(
									(acc, item) => acc + item.totalCost,
									0
								)
							)}
						</Typography>
						<Typography variant={"subtitle1"} fontWeight={700}>
							Оплаченная сумма
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export { ClientOrderHistory };
