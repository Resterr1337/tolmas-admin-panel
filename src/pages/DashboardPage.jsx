import { Box, Typography , Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import { Salary } from "@/components/DashboardComponents/Salary";
import { OrdersCount } from "@/components/DashboardComponents/OrdersCount";
import { SalaryChart } from "@/components/DashboardComponents/SalaryChart";
import { OrdersChart } from "@/components/DashboardComponents/OrdersChart";
import { ProductChart } from "@/components/DashboardComponents/ProductChart";
import { ClientsChart } from "@/components/DashboardComponents/ClientsChart";


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
				<ProductChart/>
				<ClientsChart/>
			</Box>
		</>
	);
};

export { DashboardPage };
