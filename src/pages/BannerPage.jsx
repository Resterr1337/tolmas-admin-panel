import { BannerAddModal } from "@/components/BannerPage/BannerAddModal";
import { BannerTable } from "@/components/BannerPage/BannerTable";
import { BannerTableElement } from "@/components/BannerPage/BannerTableElement";
import { ToolPad } from "@/components/BannerPage/ToolPad";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

const BannerPage = () => {
	const [isBannerAddModalOpen, setIsBannerAddModalOpen] = useState(false);

	const some_promo = [
		{
			imageSRC:
				"https://mixnews.lv/wp-content/uploads/2023/09/23/2023-09-23-mixnews-zagadka-osen-2018-2.jpg",
			title: "asdhjkasdhk.jpeg",
			id: "1",
		},
		{
			imageSRC:
				"https://oxbridgeschool.uz/wp-content/uploads/2023/09/OXB-44.jpg",
			title: "asdhjkaasdsdhk.jpeg",
			id: "2",
		},
	];

	return (
		<>
			<ToolPad setIsBannerAddModalOpen={setIsBannerAddModalOpen} />
			<BannerTable />
			{some_promo.map((item, index) => {
				return <BannerTableElement key={index} promoObject={item} />;
			})}
			<BannerAddModal
				isBannerAddModalOpen={isBannerAddModalOpen}
				setIsBannerAddModalOpen={setIsBannerAddModalOpen}
			/>
		</>
	);
};

export { BannerPage };
