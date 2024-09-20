import {
	Box,
	Typography,
	Accordion,
	AccordionDetails,
	AccordionSummary,
} from "@mui/material";
import ArrowToDownSVG from "@/assets/DashboardPage/arrowToDown.svg?react";

const OrdersChart = () => {
	return (
		<Box
			sx={{
				background: "white",
				borderRadius: "10px",
				display: "flex",
				flexGrow: "1",
				flexBasis: "40%",
				height: "400px",
				flexDirection: "column",
				justifyContent: "space-between",
				padding: "10px",
			}}
		>
			<Box
				position={"relative"}
				display={"flex"}
				justifyContent={"space-between"}
                height={"70px"}
                borderBottom={"1px solid #E1E1E1"}
			>
				<Typography zIndex={1} variant="subtitle1">Статистика заказов</Typography>
				<Accordion
					disableGutters={true}
					elevation={0}
					sx={{
						position: "absolute",
						right: "0px",
						top: "0px",
						"& .Mui-expanded": {
							borderRadius: "10px 10px 0px 0px",
							borderBottom: "none",
						},
						"& .MuiAccordionDetails-root": {
							borderRadius: "0px 0px 10px 10px",
							borderTop: "none",
						},
					}}
				>
					<AccordionSummary
						expandIcon={<ArrowToDownSVG />}
						aria-controls="panel1-control"
						id="panel1-header"
						sx={{
							transition: "all 281ms",
							display: "flex",
							gap: "10px",
							padding: "0px 10px",
							border: "1px solid #1F2024",
							borderRadius: "10px",
						}}
					>
						<Typography variant="subtitle1">Ежедневно</Typography>
					</AccordionSummary>
					<AccordionDetails
						sx={{
							transition: "all 281ms",
							padding: "10px",
							background: "white",
							border: "1px solid #1F2024",
						}}
					>
						<Typography variant="subtitle1">Еженедельно</Typography>
						<Typography variant="subtitle1">Ежемесячно</Typography>
					</AccordionDetails>
				</Accordion>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "start",
				}}
			></Box>
		</Box>
	);
};

export { OrdersChart };
