import {
	Box,
	Typography,
	Stepper,
	StepLabel,
	Step,
	IconButton,
	Button,
} from "@mui/material";

import CreatedSVG from "@/assets/OrdersPage/OrderModal/created.svg?react";
import ProcessSVG from "@/assets/OrdersPage/OrderModal/process.svg?react";
import ReadySVG from "@/assets/OrdersPage/OrderModal/ready.svg?react";
import DeliverySVG from "@/assets/OrdersPage/OrderModal/delivery.svg?react";
import DeliveredSVG from "@/assets/OrdersPage/OrderModal/delivered.svg?react";
import IssuedSVG from "@/assets/OrdersPage/OrderModal/issued.svg?react";
import CloseModalSVG from "@/assets/OrdersPage/OrderModal/closeModal.svg?react";
import { formatPrice } from "@/utils";

const OrderModal = ({ setIsModalOpen, isModalOpen, orderItem }) => {
	return (
		<Box
			id={"orderItem-modal-backdrop"}
			onClick={() => {
				event.target.id == "orderItem-modal-backdrop"
					? setIsModalOpen(false)
					: null;
			}}
			sx={{
				width: "100vw",
				height: "100vh",
				position: "fixed",
				top: "0px",
				right: isModalOpen ? "0%" : "-100%",
				transition: "all 500ms",
				zIndex: "12",
				background: isModalOpen ? "#00000010" : "#00000000",
				backdropFilter: "blur(2px)",
			}}
		>
			<Box
				sx={{
					overflowX: "auto",
					"&::-webkit-scrollbar": {
						display: "none",
					},
					msOverflowStyle: "none",
					scrollbarWidth: "none",
					zIndex: "13",
					position: "fixed",
					right: isModalOpen ? "0%" : "-100%",
					transition: "all 700ms",
					top: "0px",
					height: "100%",
					width: "40%",
					background: "white",
					display: "flex",
					flexDirection: "column",
					boxShadow: "-100px 0px 1000px #00000050",
				}}
			>
				<IconButton
					onClick={() => {
						setIsModalOpen(false);
					}}
					sx={{
						width: "40px",
						height: "40px",
						right: "0px",
						position: "absolute",
					}}
				>
					<CloseModalSVG />
				</IconButton>

				{/* Активный статус с BACKEND */}
				{orderItem.DeliveryWay == "Доставка" ? (
					<Stepper
						activeStep={1}
						alternativeLabel={true}
						sx={{
							my: "50px",
							"& .MuiStepLabel-iconContainer ": {
								background: "#EAF2FD",
								borderRadius: "100%",
								display: "flex",
								padding: "15px !important",
								alignItems: "center",
								justifyContent: "center",

								border: "1px solid #677697",
								svg: {
									fill: "#677697",
								},
							},

							"& .Mui-completed .MuiStepLabel-iconContainer ": {
								background: "#1F2024",
								border: "1px solid #1F2024",

								svg: {
									fill: "white",
								},
							},

							"&  .Mui-disabled": {
								".MuiStepLabel-iconContainer": {
									background: "none",
									border: "1px solid #8F9098",
									svg: {
										fill: "#8F9098",
									},
								},
							},

							"& .MuiStepConnector-root": {
								padding: "0px 7px",
								top: "25px",
								span: {
									borderTopWidth: "2px",
								},
							},
						}}
					>
						<Step>
							<StepLabel StepIconComponent={CreatedSVG}>
								<Typography
									fontWeight={700}
									variant="subtitle1"
								>
									Создан
								</Typography>
							</StepLabel>
						</Step>
						<Step>
							<StepLabel StepIconComponent={ProcessSVG}>
								<Typography
									fontWeight={700}
									variant="subtitle1"
								>
									В процессе
								</Typography>
							</StepLabel>
						</Step>
						<Step>
							<StepLabel StepIconComponent={ReadySVG}>
								<Typography
									fontWeight={700}
									variant="subtitle1"
								>
									Готов
								</Typography>
							</StepLabel>
						</Step>
						<Step>
							<StepLabel StepIconComponent={DeliverySVG}>
								<Typography
									fontWeight={700}
									variant="subtitle1"
								>
									В пути
								</Typography>
							</StepLabel>
						</Step>
						<Step>
							<StepLabel StepIconComponent={DeliveredSVG}>
								<Typography
									fontWeight={700}
									variant="subtitle1"
								>
									Доставлен
								</Typography>
							</StepLabel>
						</Step>
					</Stepper>
				) : (
					<Stepper
						activeStep={1}
						alternativeLabel={true}
						sx={{
							my: "50px",
							"& .MuiStepLabel-iconContainer ": {
								background: "#EAF2FD",
								borderRadius: "100%",
								display: "flex",
								padding: "15px !important",
								alignItems: "center",
								justifyContent: "center",

								border: "1px solid #677697",
								svg: {
									fill: "#677697",
								},
							},

							"& .Mui-completed .MuiStepLabel-iconContainer ": {
								background: "#1F2024",
								border: "1px solid #1F2024",

								svg: {
									fill: "white",
								},
							},

							"&  .Mui-disabled": {
								".MuiStepLabel-iconContainer": {
									background: "none",
									border: "1px solid #8F9098",
									svg: {
										fill: "#8F9098",
									},
								},
							},

							"& .MuiStepConnector-root": {
								padding: "0px 7px",
								top: "25px",
								span: {
									borderTopWidth: "2px",
								},
							},
						}}
					>
						<Step>
							<StepLabel StepIconComponent={CreatedSVG}>
								<Typography
									fontWeight={700}
									variant="subtitle1"
								>
									Создан
								</Typography>
							</StepLabel>
						</Step>
						<Step>
							<StepLabel StepIconComponent={ProcessSVG}>
								<Typography
									fontWeight={700}
									variant="subtitle1"
								>
									В процессе
								</Typography>
							</StepLabel>
						</Step>
						<Step>
							<StepLabel StepIconComponent={ReadySVG}>
								<Typography
									fontWeight={700}
									variant="subtitle1"
								>
									Готов
								</Typography>
							</StepLabel>
						</Step>
						<Step>
							<StepLabel StepIconComponent={IssuedSVG}>
								<Typography
									fontWeight={700}
									variant="subtitle1"
								>
									Выдан покупателю
								</Typography>
							</StepLabel>
						</Step>
					</Stepper>
				)}

				<Box
					display={"flex"}
					m={"10px"}
					bgcolor={"#F2F2F2"}
					borderRadius={"10px"}
					flexDirection={"column"}
				>
					<Typography m={"10px"} fontWeight={700} variant="h5">
						Детали заказа
					</Typography>
					<Box
						mx={"10px"}
						mb={"20px"}
						display={"flex"}
						flexDirection={"column"}
						gap={"5px"}
					>
						{orderItem.productsArr.map((item, index) => {
							return (
								<Box
									display={"flex"}
									alignItems={"center"}
									justifyContent={"space-between"}
									key={index}
								>
									<Box display={"flex"} alignItems={"center"}>
										{/* Карточка товара */}
										<Box
											sx={{
												width: "50px",
												height: "50px",
												backgroundImage: `url("${item.imageSrc}")`,
												backgroundPosition: "50% 50%",
												backgroundSize: "cover",
												backgroundRepeat: "no-repeat",
											}}
										/>
										{/* Кол-во товара */}

										<Typography
											mx={"5px"}
											color={"#2588FF"}
											fontWeight={700}
											variant="subtitle1"
										>
											{item.quantity}x
										</Typography>

										{/* Название */}
										<Typography
											mx={"5px"}
											color={"#1F2024"}
											fontWeight={400}
											variant="subtitle1"
										>
											{item.title}
										</Typography>
									</Box>
									{/* Цена */}
									<Typography
										color={"#1F2024"}
										fontWeight={600}
										variant="subtitle1"
									>
										{formatPrice(item.cost)} UZS
									</Typography>
								</Box>
							);
						})}
					</Box>
					<Box
						width={"100%"}
						borderTop={"1px dashed #8F9098"}
						padding={"20px 10px 10px 10px"}
						display={"flex"}
						flexDirection={"column"}
					>
						<Box
							display={"flex"}
							alignItems={"center"}
							justifyContent={"space-between"}
							width={"100%"}
						>
							<Typography
								variant="subtitle1"
								fontWeight={700}
								color="#1F2024"
							>
								Промежуточный итог
							</Typography>
							<Typography
								variant="subtitle1"
								fontWeight={700}
								color="#1F2024"
							>
								70 000 UZS
							</Typography>
						</Box>
						<Box
							display={"flex"}
							alignItems={"center"}
							justifyContent={"space-between"}
							width={"100%"}
						>
							<Typography
								variant="subtitle1"
								fontWeight={700}
								color="#1F2024"
							>
								Доставка
							</Typography>
							<Typography
								variant="subtitle1"
								fontWeight={700}
								color="#1F2024"
							>
								13 000 UZS
							</Typography>
						</Box>
						<Box
							display={"flex"}
							alignItems={"center"}
							justifyContent={"space-between"}
							width={"100%"}
						>
							<Typography
								variant="subtitle1"
								fontWeight={700}
								color="#1F2024"
							>
								Филиал
							</Typography>
							<Typography
								variant="subtitle1"
								fontWeight={700}
								color="#1F2024"
							>
								Кооперативный
							</Typography>
						</Box>
					</Box>

					<Box
						padding={"10px"}
						borderRadius={"10px"}
						bgcolor={"#677697"}
						display="flex"
						alignItems={"center"}
						justifyContent={"space-between"}
					>
						<Typography
							variant="subtitle1"
							fontWeight={700}
							color="white"
						>
							Итого
						</Typography>
						<Typography
							variant="subtitle1"
							fontWeight={700}
							color="white"
						>
							1 200 302 UZS
						</Typography>
					</Box>
				</Box>

				<Box
					display={"flex"}
					flexDirection={"column"}
					padding={"10px"}
					mx={"10px"}
					mt="10px"
					bgcolor={"#F2F2F2"}
					borderRadius={"10px"}
					border={"1px solid #8F9098"}
				>
					<Typography
						borderBottom={"1px solid #8F9098"}
						pb={"5px"}
						fontWeight={700}
						color="#1F2024"
						variant="h5"
					>
						Подробнее о заказе
					</Typography>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"space-between"}
						my={"3px"}
					>
						<Typography
							varian="subtitle1"
							color="#797979"
							fontWeight={400}
						>
							ID заказа
						</Typography>
						<Typography
							variant="subtitle1"
							fontWeight={400}
							color="#1F2024"
						>
							{orderItem.id}
						</Typography>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"space-between"}
						my={"3px"}
					>
						<Typography
							varian="subtitle1"
							color="#797979"
							fontWeight={400}
						>
							Имя клиента
						</Typography>
						<Typography
							variant="subtitle1"
							fontWeight={400}
							color="#1F2024"
						>
							{orderItem.name} {orderItem.surname}
						</Typography>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"space-between"}
						my={"3px"}
					>
						<Typography
							varian="subtitle1"
							color="#797979"
							fontWeight={400}
						>
							Номер телефона
						</Typography>
						<Typography
							variant="subtitle1"
							fontWeight={400}
							color="#1F2024"
						>
							{orderItem.phoneNumber}
						</Typography>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"space-between"}
						my={"3px"}
					>
						<Typography
							varian="subtitle1"
							color="#797979"
							fontWeight={400}
						>
							Тип доставки
						</Typography>
						<Typography
							variant="subtitle1"
							fontWeight={400}
							color="#1F2024"
						>
							{orderItem.DeliveryWay}
						</Typography>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"space-between"}
						my={"3px"}
					>
						<Typography
							varian="subtitle1"
							color="#797979"
							fontWeight={400}
						>
							Коментарий
						</Typography>
						<Typography
							variant="subtitle1"
							fontWeight={400}
							color="#1F2024"
						>
							{orderItem.comment}
						</Typography>
					</Box>
					{orderItem.DeliveryWay == "Доставка" ? (
						<Box
							display={"flex"}
							alignItems={"center"}
							justifyContent={"space-between"}
							my={"3px"}
						>
							<Typography
								varian="subtitle1"
								color="#797979"
								fontWeight={400}
							>
								Адрес доставки
							</Typography>
							<Typography
								variant="subtitle1"
								fontWeight={400}
								color="#2588FF"
							>
								Показать
							</Typography>
						</Box>
					) : (
						<>
							<Box
								display={"flex"}
								alignItems={"center"}
								justifyContent={"space-between"}
								my={"3px"}
							>
								<Typography
									varian="subtitle1"
									color="#797979"
									fontWeight={400}
								>
									Адрес получения заказа
								</Typography>
								<Typography
									variant="subtitle1"
									fontWeight={400}
									color="#2588FF"
								>
									Показать
								</Typography>
							</Box>
							<Box
								display={"flex"}
								alignItems={"center"}
								justifyContent={"space-between"}
								my={"3px"}
							>
								<Typography
									varian="subtitle1"
									color="#797979"
									fontWeight={400}
								>
									Код заказа
								</Typography>
								<Typography
									variant="subtitle1"
									fontWeight={400}
									color="#2588FF"
								>
									7777
								</Typography>
							</Box>
						</>
					)}
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"space-between"}
						my={"3px"}
					>
						<Typography
							varian="subtitle1"
							color="#797979"
							fontWeight={400}
						>
							Текущий статус
						</Typography>
						<Typography
							variant="subtitle1"
							fontWeight={400}
							color="#1F2024"
						>
							{orderItem.status}
						</Typography>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"space-between"}
						my={"3px"}
					>
						<Typography
							varian="subtitle1"
							color="#797979"
							fontWeight={400}
						>
							Способ оплаты
						</Typography>
						<Typography
							variant="subtitle1"
							fontWeight={400}
							color="#1F2024"
						>
							{orderItem.paymentWay}
						</Typography>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"space-between"}
						my={"3px"}
					>
						<Typography
							varian="subtitle1"
							color="#797979"
							fontWeight={400}
						>
							Статус платежа
						</Typography>
						<Typography
							variant="subtitle1"
							fontWeight={400}
							color="#1F2024"
						>
							{orderItem.paymentStatus}
						</Typography>
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"space-between"}
						my={"3px"}
					>
						<Typography
							varian="subtitle1"
							color="#797979"
							fontWeight={400}
						>
							Ответственный
						</Typography>
						<Typography
							variant="subtitle1"
							fontWeight={400}
							color="#1F2024"
						>
							{orderItem.responsible}
						</Typography>
					</Box>
				</Box>

				<Box
					display={"flex"}
					alignItems={"center"}
					justifyContent={"end"}
					padding={"10px"}
					mt={"30px"}
					width={"100%"}
					gap={"10px"}
					bgcolor={"#EEE"}
				>
					<Button
						sx={{
							height: "100%",
							textTransform: "none",
							bgcolor: "#F04040",
							padding:"10px 20px"
						}}
					>
						<Typography
							color="#1F2024"
							fontWeight={700}
							variant="subtitle1"
						>
							Отмена
						</Typography>
					</Button>
					<Button
						sx={{
							height: "100%",
							textTransform: "none",
							bgcolor: "#21D399",
							padding:"10px 20px"
						}}
					>
						<Typography
							color="#1F2024"
							fontWeight={700}
							variant="subtitle1"
						>
							Принять
						</Typography>
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export { OrderModal };
