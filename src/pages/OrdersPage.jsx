import { Box, Typography } from "@mui/material";
import { ToolPanel } from "@/components/OrdersPageComponents/ToolPanel";
import { OrderTable } from "@/components/OrdersPageComponents/OrderTable";

const OrdersPage = () => {
	const some_orders = [
		{
			id: 3272,
			name: "Имя",
			surname: "Фамилие",
			date: "dd.mm.yyyy, hh:mm",
			totalCost: 48000,
			paymentWay: "Картой",
			DeliveryWay: "Доставка",
			status: "Новый",
			platform: "Telegram",
			productsArr: [
				{
					imageSrc: "",
					cost: 70000,
					title: "headphones e63 brabus",
					quantity: 2,
				},
				{
					imageSrc: "",
					cost: 200000,
					title: "headphones x6 pro 128gb",
					quantity: 5,
				},
			],
		},
		{
			id: 32174,
			name: "Имя",
			surname: "Фамилие",
			date: "dd.mm.yyyy, hh:mm",
			totalCost: 431252,
			paymentWay: "Наличными",
			DeliveryWay: "Самовывоз",
			status: "Новый",
			platform: "Telegram",
			productsArr: [
				{
					imageSrc: "",
					cost: 703200,
					title: "headphones e63 brabus",
					quantity: 2,
				},
				{
					imageSrc: "",
					cost: 20032000,
					title: "headphones x6 pro 128gb",
					quantity: 5,
				},
			],
		},
	];

	return (
		<>
			<ToolPanel />
			<OrderTable ordersArray={some_orders}/>
		</>
	);
};

export { OrdersPage };
