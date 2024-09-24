import { SubCategoriesTableHeader } from "@/components/SubCategoriesPage/SubCategoriesTableHeader";
import { SubCategoriesTableElement } from "@/components/SubCategoriesPage/SubCategoriesTableElement";
import { SubCategoryAddModal } from "@/components/SubCategoriesPage/SubCategoryAddModal";
import { Toolpad } from "@/components/SubCategoriesPage/Toolpad";
import { useState } from "react";

const SubCategoriesPage = () => {
	const [isAddSubcategoryModalOpen, setIsAddSubcategoryModalOpen] = useState(false);
	const some_subcategories = [
		{
			id: "1",
			title: "Аксесуары",
			uzbTitle: "Aksesuarlar",
			isActive: true,
		},
		{
			id: "2",
			title: "Аксесуары",
			uzbTitle: "Aksesuarlar",
			isActive: true,
		},
		{
			id: "3",
			title: "Аксесуары",
			uzbTitle: "Aksesuarlar",
			isActive: true,
		},
		{
			id: "4",
			title: "Аксесуары",
			uzbTitle: "Aksesuarlar",
			isActive: true,
		},
	];

	return (
		<>
			<Toolpad setIsModalOpen={setIsAddSubcategoryModalOpen} />
			<SubCategoriesTableHeader />
			{some_subcategories &&
				some_subcategories.map((item, index) => {
					return (
						<SubCategoriesTableElement
							key={index}
							subCategoryObject={item}
						/>
					);
				})}
			<SubCategoryAddModal isModalOpen={isAddSubcategoryModalOpen} setIsModalOpen={setIsAddSubcategoryModalOpen}/>
		</>
	);
};

export { SubCategoriesPage };
