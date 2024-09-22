import { ToolPad } from "@/components/PromoPage/Toolpad";
import { PromoTableHeader } from "@/components/PromoPage/PromoTableHeader";
import { PromoTableElement } from "@/components/PromoPage/PromoTableElement";
import { PromoAddModal } from "@/components/PromoPage/PromoAddModal";
import { useState } from "react";

const PromoPage = () => {
	const [isPromoAddModalOpen , setIsPromoAddModalOpen] = useState(false)

	const some_promo = [
		{
			id:"1",
			title: "TOLMASOPENED",
			products: ["0", "1", "2", "4", '5', '21'],
			categories: [],
			type: "Процент",
			fromDate: "dd.mm.yyyy, hh:mm",
			toDate: "dd.mm.yyyy, hh:mm",
		},
		{
			id:"2",
			title: "HAPPYNEWYEAR",
			products: ["0", "1", "2", "4", '5'],
			categories: [],
			type: "Сумма",
			fromDate: "dd.mm.yyyy, hh:mm",
			toDate: "dd.mm.yyyy, hh:mm",
		},
	];

	return (
		<>
			<ToolPad setIsPromoAddModalOpen={setIsPromoAddModalOpen}/>
			<PromoTableHeader />
			{some_promo && some_promo.map((item, index) => {return <PromoTableElement key={index} promoObject={item}/>})}
			<PromoAddModal isModalOpen={isPromoAddModalOpen} setIsModalOpen={setIsPromoAddModalOpen}/>
		</>
	);
};

export { PromoPage };
