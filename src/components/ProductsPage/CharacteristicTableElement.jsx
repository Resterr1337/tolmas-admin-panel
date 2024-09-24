import { Box, IconButton , Typography } from "@mui/material";
import DeleteSVG  from "@/assets/BannerPage/delete.svg?react";
import EditSVG from "@/assets/BannerPage/edit.svg?react";

const CharacteristicTableElement = ({characteristicObject}) => {
	return (
		<Box
			display={"flex"}
			bgcolor={"white"}
			alignItems={"center"}
			border={"1px solid #ADADAD"}
		>
			<Typography
				display={"flex"}
				flexBasis={"30px"}
				borderRight={"1px solid #ADADAD"}
				p={"10px"}
				variant="subtitle1"
				fontWeight={500}
				color="black"
			>
				1
			</Typography>
			<Typography
				display={"flex"}
				flexGrow={1}
				flexBasis={"50%"}
				borderRight={"1px solid #ADADAD"}
				p={"10px"}
				variant="subtitle1"
				fontWeight={500}
				color="black"
			>
				Грузоподьёмность, кг
			</Typography>
			<Typography
				display={"flex"}
				flexBasis={"25%"}
				borderRight={"1px solid #ADADAD"}
				p={"10px"}
				variant="subtitle1"
				fontWeight={500}
				color="black"
			>
				205
			</Typography>
			<Typography
				display={"flex"}
                justifyContent={"space-between"}
				flexBasis={"20%"}
				variant="subtitle1"
				fontWeight={700}
				color="black"
			>
				<IconButton>
					<DeleteSVG />
				</IconButton>
				<IconButton >
					<EditSVG />
				</IconButton>
			</Typography>
		</Box>
	);
};

export { CharacteristicTableElement };
