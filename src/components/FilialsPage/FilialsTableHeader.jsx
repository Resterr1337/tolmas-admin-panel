import { Box, Typography } from "@mui/material";

const FilialsTableHeader = () => {
	return (
		<Box
			display={"flex"}
			flexGrow={1}
			alignItems={"center"}
			bgcolor={"#677697"}
		>
			<Typography
				p={"10px"}
                variant={"subtitle1"}
				fontWeight={700}
				color="white"
				display={"flex"}
				flexBasis={"400px"}
			>
				Название филиала
			</Typography>
			<Typography
				p={"10px"}
                variant={"subtitle1"}
				fontWeight={700}
				color="white"
				flexGrow={1}
				display={"flex"}
				flexBasis={"200px"}
			>
				Локация
			</Typography>
			<Typography
				p={"10px"}
                variant={"subtitle1"}
				fontWeight={700}
				color="white"
				display={"flex"}
				flexBasis={"300px"}
			>
				Статус
			</Typography>
			<Typography
				p={"10px"}
                variant={"subtitle1"}
				fontWeight={700}
				color="white"
				display={"flex"}
                flexBasis={"250px"}
			>
				Действия
			</Typography>
		</Box>
	);
};

export { FilialsTableHeader };
