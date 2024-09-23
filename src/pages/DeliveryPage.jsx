import { Box, Typography, Button } from "@mui/material";
import { Toolpad } from "@/components/DeliveryPage/Toolpad";
import { DeliveryTableHeader } from "@/components/DeliveryPage/DeliveryTableHeader";
import { DeliveryTableElement } from "@/components/DeliveryPage/DeliveryTableElement";
import { CourierAddModal } from "@/components/DeliveryPage/CourierAddModal";
import { useState } from "react";
const DeliveryPage = () => {
	const [isCourierAddModalOpen, setIsCourierAddModalOpen] = useState(false)


	const some_couriers = [
		{
			id: 1,
			carMake: "Damas",
			carNumber: "213 STQ",
			number: "+998 33 222 11 12",
			orderCount: 124,
		},
		{
			id: 2,
			carMake: "Damas",
			carNumber: "241 STQ",
			number: "+998 33 222 11 12",
			orderCount: 624,
		},
		{
			id: 3,
			carMake: "Lacetti",
			carNumber: "A 544 TQ",
			number: "+998 33 222 11 12",
			orderCount: 51,
		},
	];

	return (
		<>
			<Toolpad setIsModalOpen={setIsCourierAddModalOpen}/>
			<DeliveryTableHeader />
			{some_couriers && some_couriers.map((item, index) => {
				return <DeliveryTableElement courier={item} key={index}/>
			})}
			<CourierAddModal isModalOpen={isCourierAddModalOpen} setIsModalOpen={setIsCourierAddModalOpen}/>
		</>
	);
};

export { DeliveryPage };
