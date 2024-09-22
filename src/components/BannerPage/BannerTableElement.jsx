import { Box, Typography } from "@mui/material";
import DeleteSVG from "@/assets/BannerPage/delete.svg?react";
import EditSVG from "@/assets/BannerPage/edit.svg?react";

const BannerTableElement = ({ promoObject }) => {
	return (
		<>
			<Box display={"flex"} alignItems={"center"}>
				<Box
					border={"0.5px solid #A4A4A4"}
					height={"272px"}
					p={"10px"}
					alignItems={"center"}
					justifyContent={"center"}
					display={"flex"}
					flexBasis={"40px"}
				>
					<Typography fontWeight={700} variant="subtitle1">
						{promoObject.id}
					</Typography>
				</Box>
				<Box
					border={"0.5px solid #A4A4A4"}
					display={"flex"}
					flexShrink={1}
					flexBasis={"600px"}
					p={"10px"}
				>
					<Box
						sx={{
							width: "100%",
							height: "250px",
							backgroundImage: `url("${promoObject.imageSRC}")`,
							backgroundPosition: "50% 50%",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
						}}
					/>
				</Box>
				<Box
					border={"0.5px solid #A4A4A4"}
					height={"272px"}
					p={"10px"}
					alignItems={"center"}
					justifyContent={"center"}
					display={"flex"}
					flexGrow={1}
					flexBasis={"250px"}
				>
					<Typography fontWeight={700} variant="subtitle1">
						{promoObject.title}
					</Typography>
				</Box>
				<Box
					border={"0.5px solid #A4A4A4"}
					height={"272px"}
					p={"10px"}
					alignItems={"center"}
					justifyContent={"center"}
					display={"flex"}
					flexDirection={"column"}
					gap={"10px"}
					flexBasis={"150px"}
				>
					<Typography
						сolor={"red"}
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

export { BannerTableElement };
