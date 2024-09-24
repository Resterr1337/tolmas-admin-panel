import { Box, Typography, Checkbox } from "@mui/material";
import DeleteSVG from "@/assets/BannerPage/delete.svg?react";
import EditSVG from "@/assets/BannerPage/edit.svg?react";
import { useState } from "react";
import { formatPrice } from "@/utils";

const ProductsTableElement = ({ productObject }) => {
	return (
		<Box
			display={"flex"}
			flexGrow={1}
			alignItems={"center"}
			bgcolor={"white"}
			border={"1px solid #A4A4A4"}
		>
			<Typography
				p={"10px"}
				variant="subtitle1"
				fontWeight={500}
				flexBasis={"30px"}
			>
				{productObject.id}
			</Typography>
			<Box
				display={"flex"}
				alignItems={"center"}
				flexBasis= {"300px"}
				justifyContent={"center"}
				borderRight={"1px solid #A4A4A4"}
				borderLeft={"1px solid #A4A4A4"}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						margin: "10px",
						width:"100%",
						height: "200px",
						backgroundImage: `url("${productObject.imageList[2]}")`,
						backgroundPosition: "50% 50%",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
				/>
			</Box>
			<Box
				display={"flex"}
				alignItems={"center"}
				height={"220px"}
				flexBasis={"250px"}
				flexGrow={1}
				p={"10px"}
				borderRight={"1px solid #A4A4A4"}
			>
				<Typography variant="subtitle1" fontWeight={500}>{productObject.title["rus"]}</Typography>
			</Box>
			<Box
				display={"flex"}
				alignItems={"center"}
				height={"220px"}
				flexBasis={"170px"}
				p={"10px"}
				borderRight={"1px solid #A4A4A4"}
			>
				<Typography variant="subtitle1" fontWeight={500}>{formatPrice(productObject.price)} UZS</Typography>
			</Box>
			<Box
				display={"flex"}
				alignItems={"center"}
				height={"220px"}
				flexBasis={"120px"}
				p={"10px"}
				borderRight={"1px solid #A4A4A4"}
			>
				<Checkbox></Checkbox>
			</Box>
			<Box
				display={"flex"}
				alignItems={"center"}
				height={"220px"}
				flexBasis={"150px"}
				p={"10px"}
				borderRight={"1px solid #A4A4A4"}
			>
				<Checkbox></Checkbox>
			</Box>
			<Box
				display={"flex"}
				alignItems={"center"}
				height={"220px"}
				flexBasis={"200px"}
				p={"10px"}
				borderRight={"1px solid #A4A4A4"}
			>
				<Checkbox></Checkbox>
			</Box>
			<Box
				p={"10px"}
				gap={"10px"}
				display={"flex"}
				flexBasis={"150px"}
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

export { ProductsTableElement };
