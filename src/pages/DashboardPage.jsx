import { Box, Typography , Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import { Salary } from "@/components/DashboardComponents/Salary";
import { OrdersCount } from "@/components/DashboardComponents/OrdersCount";
import { SalaryChart } from "@/components/DashboardComponents/SalaryChart";
import { OrdersChart } from "@/components/DashboardComponents/OrdersChart";

const DashboardPage = () => {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					alignItems: "start",
					justifyContent: "start",
					gap: "10px",
					width: "100%",
					my: "10px",
				}}
			>
				<Salary />
				<OrdersCount/>
                <SalaryChart/>
				<OrdersChart/>
			</Box>
		</>
	);
};

export { DashboardPage };
