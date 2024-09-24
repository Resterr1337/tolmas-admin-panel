import { Box, Checkbox, Typography } from "@mui/material";
import DeleteSVG from "@/assets/BannerPage/delete.svg?react";
import EditSVG from "@/assets/BannerPage/edit.svg?react";
import { useState } from "react";

const FilialsTableElement = ({ filialObject }) => {
	const [isChecked, setIsChecked] = useState(filialObject.status);

	return (
		<Box
			display={"flex"}
			flexGrow={1}
			alignItems={"center"}
			bgcolor={"white"}
			border={"1px solid #8F9098"}
		>
			<Typography
				p={"10px"}
				borderRight={"1px solid #8F9098"}
				variant={"subtitle1"}
				fontWeight={500}
				color="black"
				display={"flex"}
				flexBasis={"400px"}
			>
				{filialObject.title}
			</Typography>
			<Typography
				p={"10px"}
				borderRight={"1px solid #8F9098"}
				variant={"subtitle1"}
				fontWeight={500}
				color="black"
				flexGrow={1}
				display={"flex"}
				flexBasis={"200px"}
			>
				{filialObject.location}
			</Typography>
			<Typography
				p={"10px"}
				borderRight={"1px solid #8F9098"}
				variant={"subtitle1"}
				fontWeight={500}
				color="black"
				display={"flex"}
				alignItems={"center"}
				flexBasis={"300px"}
				gap={"5px"}
			>
				Активирован
				<Checkbox sx={{width:"20px", height:"20px"}} onChange={() => setIsChecked(!isChecked)} checked={isChecked} />
			</Typography>
			<Box
				p={"10px"}
				color="black"
				display={"flex"}
				flexBasis={"250px"}
                gap={"10px"}
			>
				<Typography
					sx={{ color: "red" }}
					fontWeight={700}
					variant="subtitle1"
					display={"flex"}
					alignItems={"center"}
				>
					<DeleteSVG />
					Удалить
				</Typography>
				<Typography
					display={"flex"}
					alignItems={"center"}
					fontWeight={700}
					variant="subtitle1"
				>
					<EditSVG />
					Изменить
				</Typography>
			</Box>
		</Box>
	);
};

export { FilialsTableElement };
