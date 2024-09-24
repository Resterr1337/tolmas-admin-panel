import { RoleAddModal } from "@/components/RolesPage/RoleAddModal";
import { RolesTableElement } from "@/components/RolesPage/RolesTableElement";
import { RolesTableHeader } from "@/components/RolesPage/RolesTableHeader";
import { ToolPad } from "@/components/RolesPage/ToolPad";
import { useState } from "react";

const RolesPage = () => {
	const [isRoleAddModalOpen, setIsRoleAddModalOpen] = useState(false)

	const some_roles = [{
		title:"Admin",
		dateOfCreate:"DD.MM.YYYY, mm:hh",
		dateOfUpdate:"DD.MM.YYYY, mm:hh",
		isActive:false
	}]
	
	return (
		<>
			<ToolPad setIsModalOpen={setIsRoleAddModalOpen}/>
			<RolesTableHeader/>
			{some_roles && some_roles.map((item, index) => {return <RolesTableElement key={index} roleObject={item}/>})}
			<RoleAddModal isModalOpen={isRoleAddModalOpen} setIsModalOpen={setIsRoleAddModalOpen}/>
		</>
	);
};

export { RolesPage };
