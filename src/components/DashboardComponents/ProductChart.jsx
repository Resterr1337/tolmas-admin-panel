import {
	Box,
	Typography,
	Accordion,
	AccordionDetails,
	AccordionSummary,
} from "@mui/material";
import ArrowToDownSVG from "@/assets/DashboardPage/arrowToDown.svg?react";

const ProductChart = () => {
	const some_products = [
		{
			imageSRC:
				"https://image.made-in-china.com/202f0j00cLhoUkfYhmqb/Luxury-Women-Oversize-Sunglasses-Rimless-Eyewear-Shades-Glasses-High-Quality-DC-Big-Frame-Fashion-Retro-Sunglasses.webp",
			title: "Очки",
			quantitySales: 1289,
		},
		{
			imageSRC:
				"https://pbs.twimg.com/profile_images/1316820543849594881/cqtT-eng_400x400.jpg",
			title: "Свиттер",
			quantitySales: 789,
		},
		{
			imageSRC:
				"https://www.chanel.com/images/w_0.70,h_0.70,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1920/n-5-parfum-grand-extrait-7-6fl-oz--packshot-default-120450-9536474415134.jpg",
			title: "Channel #5",
			quantitySales: 600,
		},
		{
			imageSRC:
				"https://www.chanel.com/images/w_0.70,h_0.70,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1920/n-5-parfum-grand-extrait-7-6fl-oz--packshot-default-120450-9536474415134.jpg",
			title: "Channel #5",
			quantitySales: 600,
		},
		{
			imageSRC:
				"https://www.chanel.com/images/w_0.70,h_0.70,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1920/n-5-parfum-grand-extrait-7-6fl-oz--packshot-default-120450-9536474415134.jpg",
			title: "Channel #5",
			quantitySales: 600,
		},
		{
			imageSRC:
				"https://www.chanel.com/images/w_0.70,h_0.70,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1920/n-5-parfum-grand-extrait-7-6fl-oz--packshot-default-120450-9536474415134.jpg",
			title: "Channel #5",
			quantitySales: 600,
		},
		{
			imageSRC:
				"https://www.chanel.com/images/w_0.70,h_0.70,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1920/n-5-parfum-grand-extrait-7-6fl-oz--packshot-default-120450-9536474415134.jpg",
			title: "Channel #5",
			quantitySales: 600,
		},
		{
			imageSRC:
				"https://www.chanel.com/images/w_0.70,h_0.70,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1920/n-5-parfum-grand-extrait-7-6fl-oz--packshot-default-120450-9536474415134.jpg",
			title: "Channel #5",
			quantitySales: 600,
		},
		{
			imageSRC:
				"https://www.chanel.com/images/w_0.70,h_0.70,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1920/n-5-parfum-grand-extrait-7-6fl-oz--packshot-default-120450-9536474415134.jpg",
			title: "Channel #5",
			quantitySales: 600,
		},
		{
			imageSRC:
				"https://www.chanel.com/images/w_0.70,h_0.70,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1920/n-5-parfum-grand-extrait-7-6fl-oz--packshot-default-120450-9536474415134.jpg",
			title: "Channel #5",
			quantitySales: 600,
		},
	];

	return (
		<>
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
						Топ 10 товаров
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
							<Typography variant="subtitle1">
								Ежедневно
							</Typography>
						</AccordionSummary>
						<AccordionDetails
							sx={{
								transition: "all 281ms",
								padding: "10px",
								background: "white",
								border: "1px solid #1F2024",
							}}
						>
							<Typography variant="subtitle1">
								Еженедельно
							</Typography>
							<Typography variant="subtitle1">
								Ежемесячно
							</Typography>
						</AccordionDetails>
					</Accordion>
				</Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "start",
						flexDirection: "column",
						gap: "10px",
						height: "80%",
						overflowX: "auto",
						"&::-webkit-scrollbar":{
                            display: "none",
                        },
                        msOverflowStyle: "none", 
                        scrollbarWidth: "none",
					}}
				>
					{some_products.map((item, index) => {
						return (
							<Box
								key={index}
								height={"50px"}
								flexGrow={1}
								display={"flex"}
								alignItems={"center"}
								justifyContent={"start"}
								gap={"10px"}
							>
								<Box display={"flex"} justifyContent={'center'} alignItems={"center"} height={"100%"} width={"20px"}>
									<Typography mx={"5px"} variant="subtitle1">
										{index + 1}
									</Typography>
								</Box>
								<Box
									display={"flex"}
									flexGrow={1}
									alignItems={"center"}
									gap={"10px"}
								>
									<Box
										width={"50px"}
										height={"50px"}
										sx={{
											backgroundImage: `url("${item.imageSRC}")`,
											backgroundRepeat: "no-repeat",
											backgroundPosition: " 50% 50%",
											backgroundSize: " cover",
											borderRadius: "10px",
										}}
									></Box>
									<Box>
										<Typography variant="subtitle1">
											{item.title}
										</Typography>
										<Typography variant="subtitle2">
											{item.quantitySales} продаж
										</Typography>
									</Box>
								</Box>
							</Box>
						);
					})}
				</Box>
			</Box>
		</>
	);
};

export { ProductChart };
