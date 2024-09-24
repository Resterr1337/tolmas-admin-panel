import { Box, Typography , Checkbox } from "@mui/material";
import DeleteSVG from "@/assets/BannerPage/delete.svg?react";
import EditSVG from "@/assets/BannerPage/edit.svg?react";
import { useState } from "react";

const CategoriesTableElement = ({categoryObject}) => {
    const [isChecked , setIsChecked ]= useState(categoryObject.isActive)

	return (
		<Box
			display={"flex"}
			flexGrow={1}
			alignItems={"center"}
			bgcolor={"white"}
            border={"1px solid #A4A4A4"}
		>
			<Typography
				borderRight={"1px solid #A4A4A4"}
                p={"10px"}
                variant={"subtitle1"}
				fontWeight={500}
				color="black"
				display={"flex"}
				flexBasis={"30px"}
			>
				{categoryObject.id}
			</Typography>
			<Typography
				borderRight={"1px solid #A4A4A4"}
                p={"10px"}
                variant={"subtitle1"}
				fontWeight={500}
				color="black"
				display={"flex"}
                flexGrow={1}
				flexBasis={"220px"}
			>
				{categoryObject.title}
			</Typography>
			<Typography
				borderRight={"1px solid #A4A4A4"}
                p={"10px"}
                variant={"subtitle1"}
				fontWeight={500}
				color="black"
				display={"flex"}
				flexBasis={"300px"}
                gap={"5px"}
			>
                <Checkbox sx={{width:"20px", height:"20px"}} onChange={() => setIsChecked(!isChecked)} checked={isChecked} />
			</Typography>
            <Box
					borderRight={"1px solid #8F9098"}
					p={"10px"}
					gap={"10px"}
					display={"flex"}
					flexBasis={"100px"}
					justifyContent={"end"}
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

export { CategoriesTableElement };
