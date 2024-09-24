import { CategoriesAddModal } from "@/components/CategoriesPage/CategoriesAddModal";
import { CategoriesTableElement } from "@/components/CategoriesPage/CategoriesTableElement";
import { CategoriesTableHeader } from "@/components/CategoriesPage/CategoriesTableHeader";
import { Toolpad } from "@/components/CategoriesPage/Toopad";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

const CategoriesPage = () => {
	const [isCategoryAddModalOpen, setIsCategroryAddModal] = useState(false);

	const some_categories = [
		{
			id: "1",
			title: "Аксесуары",
			isActive: false,
			uzbTitle: "Aksesuaslar",
			subCategoris: [
				{
					title: {
						uzb: "",
						rus: "",
					},
					isActive: false,
				},
			],
		},
		{
			id: "2",
			title: "Одежда",
			isActive: true,
			uzbTitle: "Kiyim-kechak",
		},
		{
			id: "3",
			title: "Обувь",
			isActive: false,
			uzbTitle: "Poyafzal",
		},
		{
			id: "4",
			title: "Косметика",
			isActive: true,
			uzbTitle: "Parfyumeriya",
		},
	];

	return (
		<>
			<Toolpad setIsModalOpen={setIsCategroryAddModal} />
			<CategoriesTableHeader />
			{some_categories &&
				some_categories.map((item, index) => {
					return (
						<CategoriesTableElement
							key={index}
							categoryObject={item}
						/>
					);
				})}
			<CategoriesAddModal
				isCategoriesAddModalOpen={isCategoryAddModalOpen}
				setIsCategoriesAddModalOpen={setIsCategroryAddModal}
			/>
		</>
	);
};

export { CategoriesPage };
