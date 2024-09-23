import DeleteSVG from "@/assets/DiscountPage/delete.svg?react";
import EditSVG from "@/assets/DiscountPage/edit.svg?react";

import { Typography, Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ClientTableElement = ({ clientObject }) => {
    const NavigateFunc = useNavigate()

	return (
		<>
			<Box
                onClick={() => {NavigateFunc(clientObject.id, {state:clientObject})}}
				width={"100%"}
				display={"flex"}
				alignItems={"center"}
				height={"50px"}
                bgcolor={"white"}
			>
				<Box
					display={"flex"}
					justifyContent={"center"}
					border={"0.5px solid #8F9098"}
					height={"100%"}
					flexBasis={"100px"}
					alignItems={"center"}
				>
					<Typography variant="subtitle1" fontWeight={700}>
						{clientObject.id}
					</Typography>
				</Box>
				<Box
					display={"flex"}
					flexGrow={1}
					flexBasis={"200px"}
					border={"0.5px solid #8F9098"}
					height={"100%"}
					pl={"5px"}
					alignItems={"center"}
				>
					<Typography variant="subtitle1" fontWeight={700}>
						{clientObject.name} {clientObject.surname}
					</Typography>
				</Box>
				<Box
					display={"flex"}
					flexBasis={"300px"}
					border={"0.5px solid #8F9098"}
					height={"100%"}
					pl={"5px"}
					alignItems={"center"}
				>
					<Typography variant="subtitle1" fontWeight={700}>
						{clientObject.userName}
					</Typography>
				</Box>
				<Box
					display={"flex"}
					flexBasis={"300px"}
					border={"0.5px solid #8F9098"}
					height={"100%"}
					pl={"5px"}
					alignItems={"center"}
				>
					<Typography variant="subtitle1" fontWeight={700}>
						{clientObject.number}
					</Typography>
				</Box>
				<Box
					display={"flex"}
					flexBasis={"200px"}
					border={"0.5px solid #8F9098"}
					height={"100%"}
					pl={"5px"}
					alignItems={"center"}
				>
					<Typography variant="subtitle1" fontWeight={700}>
						{clientObject.orders.length}
					</Typography>
				</Box>
				<Box
					display={"flex"}
					flexBasis={"300px"}
					border={"0.5px solid #8F9098"}
					height={"100%"}
					pl={"5px"}
					alignItems={"center"}
				>
					<Typography variant="subtitle1" fontWeight={700}>
						{clientObject.dateOfRegistration}
					</Typography>
				</Box>
				<Box
					display={"flex"}
					flexBasis={"200px"}
					border={"0.5px solid #8F9098"}
					height={"100%"}
					pl={"5px"}
					alignItems={"center"}
				>
					<Typography variant="subtitle1" fontWeight={700}>
						{clientObject.platform}
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export { ClientTableElement };
