import { Box, Checkbox, Typography } from "@mui/material";
import DeleteSVG from "@/assets/DiscountPage/delete.svg?react";
import EditSVG from "@/assets/DiscountPage/edit.svg?react";
import { useState } from "react";

const RolesTableElement = ({ roleObject }) => {
	const [isChecked, setIsChecked] = useState(roleObject.isActive);

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
					fontWeight={500}
					borderRight={"1px solid #8F9098"}
					color="black"
				>
					{roleObject.title}
				</Typography>
				<Typography
					p={"10px"}
					display={"flex"}
					flexBasis={"300px"}
					variant="subtitle1"
					fontWeight={500}
					borderRight={"1px solid #8F9098"}
					color="black"
				>
					{roleObject.dateOfCreate}
				</Typography>
				<Typography
					p={"10px"}
					display={"flex"}
					flexBasis={"300px"}
					variant="subtitle1"
					fontWeight={500}
					borderRight={"1px solid #8F9098"}
					flexGrow={1}
					color="black"
				>
					{roleObject.dateOfUpdate}
				</Typography>
				<Typography
					p={"10px"}
					display={"flex"}
					flexBasis={"200px"}
					variant="subtitle1"
					fontWeight={500}
					borderRight={"1px solid #8F9098"}
					color="black"
					alignItems={"center"}
					gap={"10px"}
				>
					Активен
					<Checkbox
						sx={{ width: "20px", height: "20px" }}
						onChange={() => setIsChecked(!isChecked)}
						checked={isChecked}
					/>
				</Typography>
				<Typography
					p={"10px"}
					display={"flex"}
					flexBasis={"200px"}
					variant="subtitle1"
					fontWeight={500}
					borderRight={"1px solid #8F9098"}
					gap={"15px"}
					color="black"
				>
					<DeleteSVG />
					<EditSVG />
				</Typography>
			</Box>
		</>
	);
};

export { RolesTableElement };
