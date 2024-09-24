import { Box, Typography } from "@mui/material";
import { ToolPad } from "@/components/EmployeesPage/ToolPad";
import { EmployeeTableHeader } from "@/components/EmployeesPage/EmployeeTableHeader";
import { EmployeeTableElement } from "@/components/EmployeesPage/EmpoloyeeTableElement";
import { useState } from "react";
import { EmployeeAddModal } from "@/components/EmployeesPage/EmployeeAddModal";

const EmployeesPage = () => {
	const [isEmployeeAddModalOpen, setIsEmployeeAddModalOpen] = useState(false);

	const some_employee = [
		{
			login: "some_login77",
			password: "7777777",
			number: "+998 33 999 99 99",
			role: "Admin",
			dateOfRegistration: "DD.MM.YYYY, hh:mm",
			isActive: true,
		},
		{
			login: "somфыв77",
			password: "7777777",
			number: "+998 33 999 99 99",
			role: "Admin",
			dateOfRegistration: "DD.MM.YYYY, hh:mm",
			isActive: true,
		},
		{
			login: "somфывфаgin77",
			password: "7777777",
			number: "+998 33 999 99 99",
			role: "Admin",
			dateOfRegistration: "DD.MM.YYYY, hh:mm",
			isActive: true,
		},
		{
			login: "someфывn77",
			password: "7777777",
			number: "+998 33 999 99 99",
			role: "Admin",
			dateOfRegistration: "DD.MM.YYYY, hh:mm",
			isActive: true,
		},
	];

	return (
		<>
			<ToolPad setIsModalOpen={setIsEmployeeAddModalOpen} />
			<EmployeeTableHeader />
			{some_employee &&
				some_employee.map((item, index) => (
					<EmployeeTableElement key={index} employeeObject={item} />
				))}
			<EmployeeAddModal isModalOpen={isEmployeeAddModalOpen} setIsModalOpen={setIsEmployeeAddModalOpen}/>
		</>
	);
};

export { EmployeesPage };
