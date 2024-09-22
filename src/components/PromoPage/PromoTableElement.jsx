import DeleteSVG from "@/assets/DiscountPage/delete.svg?react";
import EditSVG from "@/assets/DiscountPage/edit.svg?react";

import { Typography, Box, IconButton } from "@mui/material";

const PromoTableElement = ({ promoObject }) => {
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
						{promoObject.id}
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
						{promoObject.title}
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
						{promoObject.products.length}
					</Typography>
				</Box>
				<Box
					display={"flex"}
					flexBasis={"140px"}
					border={"0.5px solid #8F9098"}
					height={"100%"}
					pl={"5px"}
					alignItems={"center"}
				>
					<Typography variant="subtitle1" fontWeight={700}>
						{promoObject.type}
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
						{promoObject.fromDate}
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
						{promoObject.toDate}
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

export { PromoTableElement };
