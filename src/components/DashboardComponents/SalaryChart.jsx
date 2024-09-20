import {
	Box,
	Typography,
	Accordion,
	AccordionDetails,
	AccordionSummary,
} from "@mui/material";
import ArrowToDownSVG from "@/assets/DashboardPage/arrowToDown.svg?react";
import { BarChart } from "@mui/x-charts";
import { formatPrice } from "@/utils";

const SalaryChart = () => {
	return (
		<Box
			sx={{
				background: "white",
				borderRadius: "10px",
				height: "400px",
				display: "flex",
				flexGrow: "1",
				flexBasis: "50%",
				flexDirection: "column",
				justifyContent: "space-between",
				padding: "10px",
			}}
		>
			<Box
				position={"relative"}
				display={"flex"}
				justifyContent={"space-between"}
				alignItems={"center"}
			>
				<Typography variant="subtitle1">
					Статистика по доходу
				</Typography>
				<Accordion
					disableGutters={true}
					elevation={0}
					sx={{
						zIndex:"1",
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
					flexGrow:"1",

					"& MuiChartsAxis-tick , MuiChartsAxis-line , .MuiChartsGrid-line":
						{
							stroke: "#F4F7F9",
						},
					"& .MuiChartsAxis-tickLabel": {
						color: "#8F9098",
					},

					"& .MuiBarElement-root":{
						width:"40px !important"
					},
				}}
			>
				<BarChart
					width={800}
					height={380}
					grid={{horizontal:true, vertical:true}}
					series={[
						{
							data: [
								10032000, 8001230, 10012300, 7226020, 4213270,
								12543234, 7133212,
							],
							id: "TelegramID",
							color: "#677697",
							valueFormatter: (value) => {
								return `${formatPrice(value)}  UZS`;
							},
						},
					]}
					xAxis={[
						{
							sx: {
								"& .MuiChartsAxis-tick": {
									stroke: "#F4F7F9",
								},
								"& .MuiChartsAxis-line": {
									stroke: "#F4F7F9",
								},
							},
							data: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
							scaleType: "band",
						},
					]}
				></BarChart>
			</Box>
		</Box>
	);
};

export { SalaryChart };
