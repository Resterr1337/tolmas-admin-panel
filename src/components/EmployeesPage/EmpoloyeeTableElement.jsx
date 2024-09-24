import { Box, Checkbox, Typography } from "@mui/material";
import DeleteSVG from "@/assets/DiscountPage/delete.svg?react";
import EditSVG from "@/assets/DiscountPage/edit.svg?react";
import { useState } from "react";

const EmployeeTableElement = ({employeeObject}) => {
    const [isChecked, setIsChecked] = useState(employeeObject.isActive)

	return (
		<>
			<Box
				display={"flex"}
				border={"1px solid #8F9098"}
				bgcolor={"white"}
				alignItems={"center"}
			>
				<Typography
					p={"10px"}
					display={"flex"}
					flexBasis={"150px"}
					variant="subtitle1"
					borderRight={"1px solid #8F9098"}
                    fontWeight={500}
					flexGrow={1}
					color="black"
				>
					{employeeObject.login}
				</Typography>
				<Typography
					p={"10px"}
					display={"flex"}
					flexBasis={"300px"}
					variant="subtitle1"
					borderRight={"1px solid #8F9098"}
                    fontWeight={500}
					color="black"
				>
					{employeeObject.number}
				</Typography>
				<Typography
					p={"10px"}
					display={"flex"}
					flexBasis={"150px"}
					variant="subtitle1"
					borderRight={"1px solid #8F9098"}
                    fontWeight={500}
					color="black"
				>
					{employeeObject.role}
				</Typography>
				<Typography
					p={"10px"}
					display={"flex"}
					flexBasis={"250px"}
					variant="subtitle1"
					borderRight={"1px solid #8F9098"}
                    fontWeight={500}
					color="black"
				>
					{employeeObject.dateOfRegistration}
				</Typography>
				<Typography
					p={"10px"}
					display={"flex"}
					flexBasis={"150px"}
					variant="subtitle1"
					borderRight={"1px solid #8F9098"}
                    fontWeight={500}
                    alignItems={"center"}
					color="black"
                    gap={"5px"}
				>
					Активен
                    <Checkbox onChange={() => setIsChecked(!isChecked)} checked={isChecked} sx={{width:"20px", height:"20px"}}/>
				</Typography>
				<Typography
					p={"10px"}
					display={"flex"}
					flexBasis={"150px"}
					variant="subtitle1"
					borderRight={"1px solid #8F9098"}
                    fontWeight={500}
					color="black"
				>
					<DeleteSVG/>
					<EditSVG/>
				</Typography>
			</Box>
		</>
	);
};

export { EmployeeTableElement };
