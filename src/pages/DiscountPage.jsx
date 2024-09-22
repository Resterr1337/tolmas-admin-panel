import { DiscountAddModal } from "@/components/DiscountPage.jsx/DiscountAddModal";
import { DiscountTableElement } from "@/components/DiscountPage.jsx/DiscountTableElement";
import { DiscountTableHeader } from "@/components/DiscountPage.jsx/DiscountTableHeader";
import { ToolPad } from "@/components/DiscountPage.jsx/Toolpad";
import { Typography } from "@mui/material";
import { useState } from "react";

const DiscountPage = () => {
	const [isDiscountAddModalOpen, setIsDiscountAddModalOpen] = useState(false);

	const some_discounts = [
		{
			id:"1",
			title: "В честь нового года",
			products: ["0", "1", "2", "4", '5', '21'],
			categories: [],
			type: "Процент",
			fromDate: "dd.mm.yyyy, hh:mm",
			toDate: "dd.mm.yyyy, hh:mm",
		},
		{
			id:"2",
			title: "В честь нового года",
			products: ["0", "1", "2", "4", '5'],
			categories: [],
			type: "Сумма",
			fromDate: "dd.mm.yyyy, hh:mm",
			toDate: "dd.mm.yyyy, hh:mm",
		},
	];

	return (
		<>
			<ToolPad setIsDiscountAddModalOpen={setIsDiscountAddModalOpen}/>
			<DiscountTableHeader />
			{some_discounts && some_discounts.map((item, index) => {return <DiscountTableElement key={index} discountObject={item}/>})}
			<DiscountAddModal isModalOpen={isDiscountAddModalOpen} setIsModalOpen={setIsDiscountAddModalOpen}/>
		</>
	);
};

export { DiscountPage };
