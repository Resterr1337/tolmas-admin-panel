import { Box, Typography } from "@mui/material";

const SubCategoriesTableHeader = () => {
	return (
		<Box
			display={"flex"}
			flexGrow={1}
			alignItems={"center"}
			bgcolor={"#677697"}
			p={"10px"}
		>
			<Typography
				variant={"subtitle1"}
				fontWeight={700}
				color="white"
				display={"flex"}
				flexBasis={"30px"}
			>
				№   
			</Typography>
			<Typography
				variant={"subtitle1"}
				fontWeight={700}
				color="white"
				display={"flex"}
                flexGrow={1}
				flexBasis={"220px"}
			>
				Наименование
			</Typography>
			<Typography
				variant={"subtitle1"}
				fontWeight={700}
				color="white"
				display={"flex"}
				flexBasis={"300px"}
			>
				Входит в приложение
			</Typography>
			<Typography
				variant={"subtitle1"}
				fontWeight={700}
				color="white"
				display={"flex"}
				flexBasis={"200px"}
			>
				Действия
			</Typography>
		</Box>
	);
};

export { SubCategoriesTableHeader };
