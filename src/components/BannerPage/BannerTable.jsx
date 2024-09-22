import { Box, Typography } from "@mui/material";

const BannerTable = () => {
	return (
		<>
			{/* Header Table*/}
			<Box
				display={"flex"}
				alignItems={"center"}
				bgcolor={"#677697"}
				p={"10px"}
			>
				<Box display={"flex"} flexBasis={"32px"}>
					<Typography
						fontWeight={700}
						color="white"
						variant="subtitle1"
					>
						№
					</Typography>
				</Box>
				<Box display={"flex"} flexShrink={1} flexBasis={"600px"} p={"0px 10px"}>
					<Typography
						fontWeight={700}
						color="white"
						variant="subtitle1"
					>
						Фотография
					</Typography>
				</Box>
				<Box display={"flex"} flexGrow={1} flexBasis={"250px"} p="0px 10px">
					<Typography
						fontWeight={700}
						color="white"
						variant="subtitle1"
					>
						Наименования
					</Typography>
				</Box>
				<Box display={"flex"} flexBasis={"130px"}>
					<Typography
						fontWeight={700}
						color="white"
						variant="subtitle1"
					>
						Действия
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export { BannerTable };
