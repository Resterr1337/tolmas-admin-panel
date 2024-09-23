import { Box, Typography } from "@mui/material";
import DeleteSVG from "@/assets/BannerPage/delete.svg?react";
import EditSVG from "@/assets/BannerPage/edit.svg?react";

const DeliveryTableElement = ({ courier }) => {
	return (
		<>
			<Box
				display={"flex"}
				flexGrow={1}
				alignItems={"center"}
				bgcolor={"white"}
				border={"1px solid #8F9098"}
			>
				<Typography
					borderRight={"1px solid #8F9098"}
					p={"10px"}
					height={"100%"}
					variant={"subtitle1"}
					fontWeight={500}
					color="black"
					display={"flex"}
					flexBasis={"30px"}
				>
					{courier.id}
				</Typography>
				<Typography
					borderRight={"1px solid #8F9098"}
					p={"10px"}
					variant={"subtitle1"}
					fontWeight={500}
					color="black"
					display={"flex"}
					flexBasis={"220px"}
				>
					{courier.carMake}
				</Typography>
				<Typography
					borderRight={"1px solid #8F9098"}
					p={"10px"}
					variant={"subtitle1"}
					fontWeight={500}
					color="black"
					display={"flex"}
					flexBasis={"200px"}
				>
					{courier.carNumber}
				</Typography>
				<Typography
					borderRight={"1px solid #8F9098"}
					p={"10px"}
					variant={"subtitle1"}
					fontWeight={500}
					color="black"
					flexGrow={1}
					display={"flex"}
					flexBasis={"300px"}
				>
					{courier.number}
				</Typography>
				<Typography
					borderRight={"1px solid #8F9098"}
					p={"10px"}
					variant={"subtitle1"}
					fontWeight={500}
					color="black"
					display={"flex"}
					flexBasis={"200px"}
				>
					{courier.orderCount}
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
		</>
	);
};

export { DeliveryTableElement };
