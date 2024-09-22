import DeleteSVG from "@/assets/DiscountPage/delete.svg?react";
import EditSVG from "@/assets/DiscountPage/edit.svg?react";

import { Typography, Box, IconButton } from "@mui/material";

const DiscountTableElement = ({ discountObject }) => {
	return (
		<>
			<Box
				width={"100%"}
				display={"flex"}
				alignItems={"center"}
				height={"50px"}
			>
				<Box
					display={"flex"}
					justifyContent={"center"}
					border={"0.5px solid #8F9098"}
					height={"100%"}
					flexBasis={"30px"}
					alignItems={"center"}
				>
					<Typography variant="subtitle1" fontWeight={700}>
						{discountObject.id}
					</Typography>
				</Box>
				<Box
					display={"flex"}
					flexGrow={1}
					flexBasis={"350px"}
					border={"0.5px solid #8F9098"}
					height={"100%"}
					pl={"5px"}
					alignItems={"center"}
				>
					<Typography variant="subtitle1" fontWeight={700}>
						{discountObject.title}
					</Typography>
				</Box>
				<Box
					display={"flex"}
					flexBasis={"120px"}
					border={"0.5px solid #8F9098"}
					height={"100%"}
					pl={"5px"}
					alignItems={"center"}
				>
					<Typography variant="subtitle1" fontWeight={700}>
						{discountObject.products.length}
					</Typography>
				</Box>
				<Box
					display={"flex"}
					flexBasis={"120px"}
					border={"0.5px solid #8F9098"}
					height={"100%"}
					pl={"5px"}
					alignItems={"center"}
				>
					<Typography variant="subtitle1" fontWeight={700}>
						{discountObject.type}
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
						{discountObject.fromDate}
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
						{discountObject.toDate}
					</Typography>
				</Box>
				<Box
					display={"flex"}
					flexBasis={"100px"}
					border={"0.5px solid #8F9098"}
					height={"100%"}
					pl={"5px"}
					alignItems={"center"}
				>
					<IconButton>
						<DeleteSVG />
					</IconButton>
					<IconButton>
						<EditSVG />
					</IconButton>
				</Box>
			</Box>
		</>
	);
};

export { DiscountTableElement };
