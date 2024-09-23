import { ClientTableElement } from "@/components/ClientsPage/ClientTableElement";
import { ClientsTableHeader } from "@/components/ClientsPage/ClientTableHeader";
import { Box, Typography } from "@mui/material";

const ClientsPage = () => {
	const some_clients = [
		{
			id: "43123",
			name: "Имя",
			surname: "Фамилия",
			number: "+998 33 999 99 99",
			userName: "nameSurname777",
			dateOfRegistration:"dd.mm.yyyy, hh:mm",
			platform: "Telegram",
			orders: [
				{
					id: "7381",
					orderDate: "dd.mm.yyyy",
					totalCost: 50000,
					paymentWay: "Наличными",
					deliveryWay: "Доставка",
					status: "Заказ выполнен",
				},
				{
					id: "78543",
					orderDate: "dd.mm.yyyy",
					totalCost: 120000,
					paymentWay: "Через приложение UZUM Bank",
					deliveryWay: "Самовывоз",
					status: "Заказ выполнен",
				},
				{
					id: "347381",
					orderDate: "dd.mm.yyyy",
					totalCost: 1200000,
					paymentWay: "Картой",
					deliveryWay: "Доставка",
					status: "Заказ выполнен",
				},
			],
			location:"Uzbekistan , Samarkand",
			lastVisit:"2 дня назад"
		},
		{
			id: "4343213",
			name: "Имя",
			surname: "Фамилия",
			userName: "nameSurname777",
			number: "+998 33 777 77 77",
			dateOfRegistration:"dd.mm.yyyy, hh:mm",
			platform: "Telegram",
			orders: [
				{
					id: "74281",
					orderDate: "dd.mm.yyyy",
					totalCost: 7800000,
					paymentWay: "Картой",
					deliveryWay: "Доставка",
					status: "Заказ выполнен",
				},
				{
					id: "712343",
					orderDate: "dd.mm.yyyy",
					totalCost: 130000,
					paymentWay: "Через приложение UZUM Bank",
					deliveryWay: "Самовывоз",
					status: "Заказ выполнен",
				},
				{
					id: "343381",
					orderDate: "dd.mm.yyyy",
					totalCost: 1500000,
					paymentWay: "Картой",
					deliveryWay: "Доставка",
					status: "Заказ выполнен",
				},
			],
			location:"Uzbekistan , Samarkand",
			lastVisit:"2 дня назад"
		},
	];

	return (
		<>
			<Box
				width={"100%"}
				display={"flex"}
				alignItems={"center"}
				p={"10px"}
				bgcolor={"white"}
				mt={"20px"}
			>
				<Typography fontWeight={700} variant="h5">
					Список клиентов
				</Typography>
			</Box>
			<ClientsTableHeader />
			{some_clients && some_clients.map((item, index) => {return <ClientTableElement key={index} clientObject={item}/>})}
		</>
	);
};

export { ClientsPage };
