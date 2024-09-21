import { Box, Typography, Button } from "@mui/material";
import { formatPrice } from "@/utils";
import { useState } from "react";
import { OrderModal } from "./orderModal";

const Order = ({ orderItem }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<Box
				onClick={() => {
					setIsModalOpen(true);
				}}
				width={"100%"}
				display={"flex"}
				alignItems={"center"}
			>
				<Box
					display={"flex"}
					alignItems={"center"}
					justifyContent={"start"}
					flexShrink={1}
					flexBasis={"70px"}
					sx={{ padding: "10px" }}
				>
					<Typography variant="subtitle1" fontWeight={500}>
						{orderItem.id}
					</Typography>
				</Box>
				<Box
					display={"flex"}
					alignItems={"center"}
					justifyContent={"start"}
					flexShrink={1}
					flexBasis={"220px"}
					sx={{ padding: "10px" }}
				>
					<Typography variant="subtitle1" fontWeight={500}>
						{orderItem.name} {orderItem.surname}
					</Typography>
				</Box>
				<Box
					display={"flex"}
					alignItems={"center"}
					justifyContent={"start"}
					flexShrink={1}
					flexBasis={"260px"}
					sx={{ padding: "10px" }}
				>
					<Typography variant="subtitle1" fontWeight={500}>
						{orderItem.date}
					</Typography>
				</Box>
				<Box
					display={"flex"}
					alignItems={"center"}
					justifyContent={"start"}
					flexShrink={1}
					flexBasis={"160px"}
					sx={{ padding: "10px" }}
				>
					<Typography variant="subtitle1" fontWeight={500}>
						{formatPrice(orderItem.totalCost)} UZS
					</Typography>
				</Box>
				<Box
					display={"flex"}
					alignItems={"center"}
					justifyContent={"start"}
					flexShrink={1}
					flexBasis={"160px"}
					sx={{ padding: "10px" }}
				>
					<Typography variant="subtitle1" fontWeight={500}>
						{orderItem.paymentWay}
					</Typography>
				</Box>
				<Box
					display={"flex"}
					alignItems={"center"}
					justifyContent={"start"}
					flexShrink={1}
					flexBasis={"160px"}
					sx={{ padding: "10px" }}
				>
					<Typography variant="subtitle1" fontWeight={500}>
						{orderItem.DeliveryWay}
					</Typography>
				</Box>
				<Box
					display={"flex"}
					alignItems={"center"}
					justifyContent={"start"}
					flexShrink={1}
					flexBasis={"160px"}
					sx={{ padding: "10px" }}
				>
					<Typography variant="subtitle1" fontWeight={500}>
						{orderItem.status}
					</Typography>
				</Box>
				<Box
					display={"flex"}
					alignItems={"center"}
					justifyContent={"start"}
					flexShrink={1}
					flexBasis={"200px"}
					sx={{ padding: "10px" }}
				>
					<Typography variant="subtitle1" fontWeight={500}>
						{orderItem.platform}
					</Typography>
				</Box>
				<Box
					display={"flex"}
					alignItems={"center"}
					justifyContent={"start"}
					flexGrow={1}
					gap="10px"
					sx={{ padding: "5px 10px" }}
				>
					<Button
						sx={{
							height: "100%",
							textTransform: "none",
							bgcolor: "#F04040",
						}}
					>
						<Typography
							color="#1F2024"
							fontWeight={700}
							variant="subtitle1"
						>
							Отмена
						</Typography>
					</Button>
					<Button
						sx={{
							height: "100%",
							textTransform: "none",
							bgcolor: "#21D399",
						}}
					>
						<Typography
							color="#1F2024"
							fontWeight={700}
							variant="subtitle1"
						>
							Принять
						</Typography>
					</Button>
				</Box>
			</Box>

			{/* Модалка Заказа */}
            <OrderModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} orderItem={orderItem}/>
		</>
	);
};

export { Order };
