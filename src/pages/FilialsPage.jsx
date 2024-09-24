import { FIlialAddModal } from "@/components/FilialsPage/FIlialAddModal";
import { FilialsTableElement } from "@/components/FilialsPage/FilialsTableElement";
import { FilialsTableHeader } from "@/components/FilialsPage/FilialsTableHeader";
import { Toolpad } from "@/components/FilialsPage/Toolpad";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

const FilialsPage = () => {
	const [isFilialAddModalOpen, setIsFilialAddModalOpen] = useState(false);

	const some_filials = [
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: true,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: true,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: true,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: true,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: true,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: true,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: true,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: true,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: true,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: true,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: true,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: true,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: true,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: true,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: true,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: true,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: true,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: true,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: true,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: true,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: true,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: false,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: true,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: true,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: true,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
		{
			title: "Кооперативный",
			location: "Uzbekistan, Samarkand",
			status: true,
			deliveryWays: ["Доставка", "Самовывоз"],
		},
	];

	return (
		<>
			<Toolpad setIsModalOpen={setIsFilialAddModalOpen} />
			<FilialsTableHeader />
			{some_filials &&
				some_filials.map((item, index) => {
					return (
						<FilialsTableElement key={index} filialObject={item} />
					);
				})}

			<FIlialAddModal setIsModalOpen={setIsFilialAddModalOpen} isModalOpen={isFilialAddModalOpen} />
		</>
	);
};

export { FilialsPage };
