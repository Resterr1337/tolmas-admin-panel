import { Box, Typography } from "@mui/material";

const Order = ({ orderItem }) => {
	return (
		<Box width={"100%"} display={"flex"} alignItems={"center"}>
			<Box
				display={"flex"}
				alignItems={"center"}
				justifyContent={"start"}
				flexShrink={1}
				flexBasis={"70px"}
				sx={{ padding: "10px" }}
			>
				<Typography variant="subtitle1" fontWeigh={700}>
					{orderItem.id}
				</Typography>
			</Box>
			<Box
				display={"flex"}
				alignItems={"center"}
				justifyContent={"start"}
				flexShrink={1}
				flexBasis={"160px"}
				sx={{ padding: "10px" }}
			>
				<Typography variant="subtitle1" fontWeigh={700}>
					{orderItem.name} {orderItem.surname}
				</Typography>
			</Box>
			<Box
				display={"flex"}
				alignItems={"center"}
				justifyContent={"start"}
                flexShrink={1}
				flexBasis={"200px"}
				sx={{ padding: "10px" }}
			>
				<Typography variant="subtitle1" fontWeigh={700}>
					{orderItem.date}
				</Typography>
			</Box>
			<Box
				display={"flex"}
				alignItems={"center"}
				justifyContent={"start"}
                flexShrink={1}
				flexBasis={"160px"}
				sx={{ padding: "10px" }}
			>
				<Typography variant="subtitle1" fontWeigh={700}>
					{orderItem.totalCost}
				</Typography>
			</Box>
			<Box
				display={"flex"}
				alignItems={"center"}
				justifyContent={"start"}
                flexShrink={1}
				flexBasis={"160px"}
				sx={{ padding: "10px" }}
			>
				<Typography variant="subtitle1" fontWeigh={700}>
					{orderItem.paymentWay}
				</Typography>
			</Box>
			<Box
				display={"flex"}
				alignItems={"center"}
				justifyContent={"start"}
                flexShrink={1}
				flexBasis={"160px"}
				sx={{ padding: "10px" }}
			>
				<Typography variant="subtitle1" fontWeigh={700}>
					{orderItem.DeliveryWay}
				</Typography>
			</Box>
			<Box
				display={"flex"}
				alignItems={"center"}
				justifyContent={"start"}
                flexShrink={1}
				flexBasis={"160px"}
				sx={{ padding: "10px" }}
			>
				<Typography variant="subtitle1" fontWeigh={700}>
					{orderItem.status}
				</Typography>
			</Box>
			<Box
				display={"flex"}
				alignItems={"center"}
				justifyContent={"start"}
				flexShrink={1}
				flexBasis={"120px"}
				sx={{ padding: "10px" }}
			>
				<Typography variant="subtitle1" fontWeigh={700}>
					{orderItem.platform}
				</Typography>
			</Box>
			<Box
				display={"flex"}
				alignItems={"center"}
				justifyContent={"start"}
                flexGrow={1}
				sx={{ padding: "5px 10px" }}
			></Box>
		</Box>
	);
};

export { Order };
