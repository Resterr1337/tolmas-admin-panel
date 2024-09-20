import {
	Box,
	Typography,
	Accordion,
	AccordionDetails,
	AccordionSummary,
} from "@mui/material";

import ArrowToDownSVG from "@/assets/DashboardPage/arrowToDown.svg?react";
import { formatPrice } from "@/utils";

const Salary = () => {
	return (
		<Box
			sx={{
				bgcolor: "white",
				height: "100px",
				display: "flex",
				justifyContent: "space-between",
				flexBasis: "40%",
				flexGrow: "1",
				borderRadius: "10px",
				padding: "10px",
			}}
		>
			<Box>
				<Typography variant="subtitle1" fontWeight={400}>
					Доход
				</Typography>
				<Typography variant="h4" fontWeight={700}>
					{formatPrice(100000000)} UZS
				</Typography>
			</Box>
			<Accordion
				disableGutters={true}
				elevation={0}
				sx={{
					zIndex:"2",
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
	);
};

export { Salary };
