import {
	Box,
	Typography,
	IconButton,
	Input,
	Select,
	MenuItem,
	Chip,
	Button,
} from "@mui/material";

import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import CloseModalSVG from "@/assets/OrdersPage/OrderModal/closeModal.svg?react";
import PersentSVG from "@/assets/DiscountPage/percent.svg?react";
import DatePickerSVG from "@/assets/DiscountPage/datePickerIcon.svg?react";
import TimePickerSVG from "@/assets/DiscountPage/timePickerIcon.svg?react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { formatPrice } from "@/utils";

import "swiper/css";

const DiscountAddModal = ({ isModalOpen, setIsModalOpen }) => {
	const [discountType, setDiscountType] = useState(1);
	const [selectedCategoriesID, setSelectedCategoriesID] = useState([]);
	const [selectedProductsID, setSelectedProductsID] = useState([]);
	const [discountValue, setDiscountValue] = useState()

	const AddToSelectedCategories = (id) => {
		setSelectedCategoriesID([...selectedCategoriesID, id]);
	};
	const AddToSelectedProducts = (id) => {
		setSelectedProductsID([...selectedProductsID, id]);
	};
	const removeFromSelectedProducts = (id) => {
		setSelectedProductsID(selectedProductsID.filter((item) => item !== id));
	};
	const removeFromSelectedCategories = (id) => {
		setSelectedCategoriesID(
			selectedCategoriesID.filter((item) => item !== id)
		);
	};

	const some_categories = [
		{
			id: "0",
			title: "Другое",
		},
		{
			id: "1",
			title: "Выпечка",
		},
		{
			id: "2",
			title: "Аксесуары",
		},
		{
			id: "3",
			title: "Парфюмерия",
		},
	];

	const some_products = [
		{
			id: "0",
			title: "Очки",
		},
		{
			id: "1",
			title: "Кекс брусничный",
		},
		{
			id: "2",
			title: "Наушники AMG E63",
		},
		{
			id: "3",
			title: "Channel #5",
		},
	];

	return (
		<>
			<Box
				id={"add-discount-modal-backdrop"}
				onClick={() => {
					event.target.id == "add-discount-modal-backdrop"
						? setIsModalOpen(false)
						: null;
				}}
				sx={{
					width: "100vw",
					height: "100vh",
					position: "fixed",
					top: isModalOpen ? "0%" : "200%",
					right: "0%",
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
						right: "30%",
						transition: "all 700ms",
						top: isModalOpen ? "20%" : "200%",
						height: "60%",
						width: "40%",
						background: "#F4F7F9",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						boxShadow: "-100px 0px 1000px #00000050",
						borderRadius: "20px",
						p: "20px",
					}}
				>
					<Box
						display={"flex"}
						justifyContent={"space-between"}
						alignItems={"center"}
					>
						<Typography fontWeight={700} variant="h4">
							Добавить скидку
						</Typography>
						<IconButton
							onClick={() => {
								setIsModalOpen(false);
							}}
						>
							<CloseModalSVG />
						</IconButton>
					</Box>

					<Box
						mt={"50px"}
						display={"flex"}
						alignItems={"center"}
						justifyContent={"space-between"}
						width={"100%"}
					>
						<Box
							display={"flex"}
							flexDirection={"column"}
							height={"100%"}
							width={"48%"}
							gap={"20px"}
							alignItems={"space-between"}
						>
							<Box
								display={"flex"}
								flexDirection={"column"}
								gap={"0px"}
							>
								<Typography
									variant="subtitle1"
									fontSize={"1.125rem"}
								>
									Наименование*
								</Typography>
								<Box
									bgcolor={"white"}
									borderRadius={"10px"}
									border={"1px solid #D9D9D9"}
									p={"10px"}
									display={"flex"}
									width={"100%"}
									alignItems={"center"}
								>
									<Input
										variant="standard"
										disableUnderline
										fullWidth
										sx={{ fontSize: "1.125rem" }}
									></Input>
								</Box>
							</Box>
							<Box>
								<Typography
									variant="subtitle1"
									fontSize={"1.125rem"}
								>
									Тип Скидки*
								</Typography>

								<Box
									bgcolor={"white"}
									borderRadius={"10px"}
									border={"1px solid #D9D9D9"}
									p={"10px"}
									display={"flex"}
									width={"100%"}
									alignItems={"center"}
								>
									<Select
										fullWidth
										variant="standard"
										disableUnderline
										value={discountType}
										inputProps={{
											sx: {
												color: "black",
												fontSize: "1.125rem",
											},
										}}
										onChange={(event) => {
											setDiscountType(event.target.value);
										}}
									>
										<MenuItem value={1}>Процент</MenuItem>
										<MenuItem value={2}>Сумма</MenuItem>
									</Select>
								</Box>
							</Box>
							<Box display={"flex"} flexDirection={"column"}>
								<Typography
									variant="subtitle1"
									fontSize={"1.125rem"}
								>
									{discountType == 1 ? "Процент*" : "Сумма*"}
								</Typography>

								<Box
									bgcolor={"white"}
									borderRadius={"10px"}
									border={"1px solid #D9D9D9"}
									p={"10px"}
									display={"flex"}
									width={"100%"}
									alignItems={"center"}
								>
									<Input
										endAdornment={
											discountType == 1 ? (
												<PersentSVG />
											) : (
												<Typography
													variant="subtitle1"
													color="#677697"
													fontWeight={700}
												>
													UZS
												</Typography>
											)
										}
										variant="standard"
										disableUnderline
										fullWidth
										onInput={() => setDiscountValue(event.target.value.replace(/\s+/g, ''))}
										value={discountType == 1 ? discountValue : formatPrice(discountValue)}
										sx={{ fontSize: "1.125rem" }}
									></Input>
								</Box>
							</Box>
						</Box>

						<Box
							display={"flex"}
							flexDirection={"column"}
							height={"100%"}
							width={"48%"}
							gap={"20px"}
							alignItems={"space-between"}
						>
							<Box display={"flex"} flexDirection={"column"}>
								<Typography
									variant="subtitle1"
									fontSize={"1.125rem"}
								>
									Выберите категорию*
								</Typography>
								<Box
									display={"flex"}
									alignItems={"center"}
									bgcolor={"white"}
									padding={"10px"}
									borderRadius={"10px"}
									overflow={"hidden"}
									border={"1px solid #D9D9D9"}
								>
									<Swiper
										slidesPerView={"auto"}
										spaceBetween={"10"}
									>
										{some_categories.map((item, index) => {
											return (
												<SwiperSlide
													style={{ width: "auto" }}
													key={index}
												>
													<Chip
														onClick={() => {
															if (
																selectedCategoriesID.includes(
																	item.id
																)
															) {
																removeFromSelectedCategories(
																	item.id
																);
															} else {
																AddToSelectedCategories(
																	item.id
																);
															}
														}}
														variant={
															selectedCategoriesID.includes(
																item.id
															)
																? ""
																: "outlined"
														}
														sx={{
															bgcolor:
																selectedCategoriesID.includes(
																	item.id
																)
																	? "#677697"
																	: "none",
															color: selectedCategoriesID.includes(
																item.id
															)
																? "white"
																: "black",
															borderRadius:
																"10px",
														}}
														label={item.title}
													></Chip>
												</SwiperSlide>
											);
										})}
									</Swiper>
								</Box>
							</Box>
							<Box display={"flex"} flexDirection={"column"}>
								<Typography
									variant="subtitle1"
									fontSize={"1.125rem"}
								>
									Выберите продукты*
								</Typography>
								<Box
									display={"flex"}
									alignItems={"center"}
									bgcolor={"white"}
									padding={"10px"}
									borderRadius={"10px"}
									overflow={"hidden"}
									border={"1px solid #D9D9D9"}
								>
									<Swiper
										slidesPerView={"auto"}
										spaceBetween={"10"}
									>
										{some_products.map((item, index) => {
											return (
												<SwiperSlide
													style={{ width: "auto" }}
													key={index}
												>
													<Chip
														onClick={() => {
															if (
																selectedProductsID.includes(
																	item.id
																)
															) {
																removeFromSelectedProducts(
																	item.id
																);
															} else {
																AddToSelectedProducts(
																	item.id
																);
															}
														}}
														variant={
															selectedProductsID.includes(
																item.id
															)
																? ""
																: "outlined"
														}
														sx={{
															bgcolor:
																selectedProductsID.includes(
																	item.id
																)
																	? "#677697"
																	: "none",
															color: selectedProductsID.includes(
																item.id
															)
																? "white"
																: "black",
															borderRadius:
																"10px",
														}}
														label={item.title}
													></Chip>
												</SwiperSlide>
											);
										})}
									</Swiper>
								</Box>
							</Box>
							<Box
								display={"flex"}
								flexDirection={"column"}
								gap={"2px"}
							>
								<Typography
									variant="subtitle1"
									fontSize={"1.125rem"}
								>
									Дата и время окончания
								</Typography>
								<Box
									display={"flex"}
									gap={"10px"}
									width={"100%"}
									alignItems={"center"}
									justifyContent={"space-between"}
								>
									<DatePicker
										sx={{
											bgcolor: "white",
											borderRadius: "10px",
										}}
										slots={{
											openPickerIcon: DatePickerSVG,
										}}
										slotProps={{
											inputAdornment: {
												position: "start",
											},
										}}
										format={"DD.MM.YYYY"}
										disablePast
									></DatePicker>
									<TimePicker
										ampm={false}
										sx={{
											bgcolor: "white",
											borderRadius: "10px",
										}}
										slots={{
											openPickerIcon: TimePickerSVG,
										}}
										slotProps={{
											inputAdornment: {
												position: "start",
											},
										}}
										format="hh:mm"
									></TimePicker>
								</Box>
							</Box>
						</Box>
					</Box>

					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"space-between"}
					>
						<Button
							sx={{ width: "49%", p: "10px", bgcolor: "#F04040" }}
						>
							<Typography
								color="white"
								fontWeight={700}
								variant="subtitel1"
							>
								Отмена
							</Typography>
						</Button>
						<Button
							sx={{ width: "49%", p: "10px", bgcolor: "#677697" }}
						>
							<Typography
								color="white"
								fontWeight={700}
								variant="subtitel1"
							>
								Сохранить
							</Typography>
						</Button>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export { DiscountAddModal };
