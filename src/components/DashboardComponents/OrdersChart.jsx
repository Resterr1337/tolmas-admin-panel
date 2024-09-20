import {
	Box,
	Typography,
	Accordion,
	AccordionDetails,
	AccordionSummary,
} from "@mui/material";
import ArrowToDownSVG from "@/assets/DashboardPage/arrowToDown.svg?react";
import TelegramSVG from "@/assets/DashboardPage/telegramLogo.svg?react";

import { formatPrice } from "@/utils";

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
				<Typography zIndex={1} variant="subtitle1">
					Статистика заказов
				</Typography>
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
					flexDirection: "column",
					gap: "10px",
				}}
			>
				<Typography my={"10px"} fontWeight={700} variant="h5">
					{formatPrice(1200)} заказов
				</Typography>
				<Box width={"100%"} display={"flex"} gap={"12px"}>
					<TelegramSVG />
					<Box display={"flex"} flexGrow={1} flexDirection={"column"}>
                        <Box display={"flex"} flexGrow={1} alignItems={"center"} justifyContent={"space-between"}>
                            <Typography variant="subtitle2">Телеграм Бот</Typography>
                            <Typography variant="subtitle2">1200</Typography>
                        </Box>
                        <Box flexGrow={1} borderRadius={"30px"} bgcolor={"#2588FF"}></Box>
                    </Box>
				</Box>
			</Box>
		</Box>
	);
};

export { OrdersChart };
