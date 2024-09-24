import {
	Box,
	Typography,
	IconButton,
	Input,
	Button,
	TextField,
} from "@mui/material";
import CloseModalSVG from "@/assets/OrdersPage/OrderModal/closeModal.svg?react";
import UploadFilesSVG from "@/assets/BannerPage/uploadFiles.svg?react";
import RussianFlagSVG from "@/assets/CategoriesPage/russianFlag.svg?react";
import UzbekFlagSVG from "@/assets/DeliveryPage/uzbekFlag.svg?react";
import { PicturesInput } from "./PicturesInput";
import { useState } from "react";
import { CharacteristicTableHeader } from "./CharacteristicTableHeader";
import { CharacteristicTableElement } from "./CharacteristicTableElement";
import PlusSVG from "@/assets/BannerPage/plus.svg?react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./ProductModal.css";

const ProductAddModal = ({ isModalOpen, setModalOpen }) => {
	const [pictures, setPictures] = useState([]);

	return (
		<Box
			id={"bannerAdd-modal-backdrop"}
			onClick={() => {
				event.target.id == "bannerAdd-modal-backdrop"
					? setModalOpen(false)
					: null;
			}}
			sx={{
				width: "100vw",
				height: "100vh",
				position: "fixed",
				top: isModalOpen ? "0%" : "100%",
				right: "0px",
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
					right: "20%",
					transition: "all 700ms",
					top: "5%",
					height: "90%",
					width: "60%",
					background: "white",
					display: "flex",
					flexDirection: "column",
					boxShadow: "-100px 0px 1000px #00000050",
					padding: "15px",
					gap: "10px",
					borderRadius: "10px",
				}}
			>
				<Box
					display={"flex"}
					justifyContent={"space-between"}
					alignItems={"center"}
				>
					<Typography
						display={"flex"}
						justifyContent={"space-between"}
						fontWeight={700}
						variant="h4"
					>
						Добавить товар
					</Typography>
					<IconButton
						onClick={() => {
							setModalOpen(false);
						}}
						sx={{
							width: "40px",
							height: "40px",
							right: "10px",
							top: "10px",
							position: "absolute",
						}}
					>
						<CloseModalSVG fill={"black"} />
					</IconButton>
				</Box>

				<Typography
					p={"10px"}
					display={"flex"}
					justifyContent={"space-between"}
					alignItems={"center"}
					bgcolor={"#F5F5F5"}
					borderRadius={"10px"}
					variant="h5"
					fontWeight={700}
				>
					Русский
					<RussianFlagSVG />
				</Typography>

				<Box
					display={"flex"}
					justifyContent={"space-between"}
					gap={"20px"}
					width={"100%"}
				>
					<PicturesInput files={pictures} setFiles={setPictures} />

					<Box
						height={"250px"}
						sx={{ overflowY: "auto" }}
						position={"relative"}
						display={"flex"}
						flexGrow={1}
						flexDirection={"column"}
					>
						<CharacteristicTableHeader />
						<CharacteristicTableElement />
						<Box
							mt={"10px"}
							display={"flex"}
							width={"100%"}
							justifyContent={"end"}
						>
							<Button
								size="small"
								sx={{
									width: "120px",
									padding: "5px",
									borderRadius: "10px",
									textTransform: "none",
									bgcolor: "#EAF2FD",
									color: "black",
								}}
								startIcon={<PlusSVG width="18px" />}
							>
								<Typography
									fontSize={"0.825rem"}
									variant="subtitle1"
									fontWeight={600}
								>
									Добавить
								</Typography>
							</Button>
						</Box>
					</Box>
				</Box>

				<Box width={"100%"} height={"150px"}>
					<Swiper
						slidesPerView={"auto"}
						spaceBetween={"5"}
					>
						{pictures.length ? (
							pictures.map((item, index) => {
								const objectURL = URL.createObjectURL(item);

								return (
									<SwiperSlide key={index}>
										<Box
											sx={{
												bgcolor:"#F4F7F9",
												width: "100px",
												height: "100px",
												backgroundImage: `url("${objectURL}")`,
												backgroundPosition: "50% 50%",
												backgroundRepeat: "no-repeat",
												backgroundSize: "cover",
												borderRadius: "10px",
											}}
										/>

										<IconButton
											sx={{
												position: "absolute",
												top: "0px",
												right: "0px",
											}}
											onClick={() =>
												setPictures(
													pictures.filter(
														(picture) =>
															picture.name !==
															item.name
													)
												)
											}
										>
											<CloseModalSVG fill="white" />
										</IconButton>
									</SwiperSlide>
								);
							})
						) : (
							<></>
						)}
					</Swiper>
				</Box>

				<Box
					display={"flex"}
					alignItems={"center"}
					justifyContent={"space-between"}
					gap={"20px"}
				>
					<Box flexGrow={1} display={"flex"} flexDirection={"column"}>
						<Typography variant={"subtitle1"}>
							Наименование
						</Typography>
						<Box
							border={"1px solid #D9D9D9"}
							bgcolor={"white"}
							borderRadius={"10px"}
							width={"100%"}
							p={"10px"}
							display={"flex"}
							flexDirection={"column"}
						>
							<Input
								variant="standard"
								fullWidth
								disableUnderline
							></Input>
						</Box>
					</Box>
					<Box flexGrow={1} display={"flex"} flexDirection={"column"}>
						<Typography variant={"subtitle1"}>Цена</Typography>
						<Box
							border={"1px solid #D9D9D9"}
							bgcolor={"white"}
							borderRadius={"10px"}
							width={"100%"}
							p={"10px"}
							display={"flex"}
							flexDirection={"column"}
						>
							<Input
								variant="standard"
								fullWidth
								disableUnderline
							></Input>
						</Box>
					</Box>
				</Box>
				<Box display={"flex"} flexDirection={"column"}>
					<Typography variant={"subtitle1"}>Описание</Typography>
					<TextField
						sx={{
							bgcolor: "white",
							borderRadius: "10px",
							border: "1px solid #D9D9D9",
						}}
						multiline={true}
						minRows={10}
						maxRows={15}
					></TextField>
				</Box>

				<Box
					display={"flex"}
					alignItems={"center"}
					justifyContent={"space-between"}
					gap={"20px"}
				>
					<Box flexGrow={1} display={"flex"} flexDirection={"column"}>
						<Typography variant={"subtitle1"}>Икпу</Typography>
						<Box
							border={"1px solid #D9D9D9"}
							bgcolor={"white"}
							borderRadius={"10px"}
							width={"100%"}
							p={"10px"}
							display={"flex"}
							flexDirection={"column"}
						>
							<Input
								variant="standard"
								fullWidth
								disableUnderline
							></Input>
						</Box>
					</Box>
					<Box flexGrow={1} display={"flex"} flexDirection={"column"}>
						<Typography variant={"subtitle1"}>
							Налоговый номер
						</Typography>
						<Box
							border={"1px solid #D9D9D9"}
							bgcolor={"white"}
							borderRadius={"10px"}
							width={"100%"}
							p={"10px"}
							display={"flex"}
							flexDirection={"column"}
						>
							<Input
								variant="standard"
								fullWidth
								disableUnderline
							></Input>
						</Box>
					</Box>
				</Box>

				<Typography variant={"subtitle1"}>Номер упаковки</Typography>
				<Box
					border={"1px solid #D9D9D9"}
					bgcolor={"white"}
					borderRadius={"10px"}
					width={"100%"}
					p={"10px"}
					display={"flex"}
					flexDirection={"column"}
				>
					<Input
						variant="standard"
						fullWidth
						disableUnderline
					></Input>
				</Box>

				<Typography
					p={"10px"}
					display={"flex"}
					justifyContent={"space-between"}
					alignItems={"center"}
					bgcolor={"#F5F5F5"}
					borderRadius={"10px"}
					variant="h5"
					fontWeight={700}
				>
					Uzbek
					<UzbekFlagSVG />
				</Typography>

				<Typography variant={"subtitle1"}>Nomi</Typography>
				<Box
					border={"1px solid #D9D9D9"}
					bgcolor={"white"}
					borderRadius={"10px"}
					width={"100%"}
					p={"10px"}
					display={"flex"}
					flexDirection={"column"}
				>
					<Input
						variant="standard"
						fullWidth
						disableUnderline
					></Input>
				</Box>

				<Box display={"flex"} flexDirection={"column"}>
					<Typography variant={"subtitle1"}>Tavsif</Typography>
					<TextField
						sx={{
							bgcolor: "white",
							borderRadius: "10px",
							border: "1px solid #D9D9D9",
						}}
						multiline={true}
						minRows={10}
						maxRows={15}
					></TextField>
				</Box>

				<Box flexGrow={1}>
					<Box
						sx={{ overflowY: "auto" }}
						position={"relative"}
						display={"flex"}
						flexGrow={1}
						flexDirection={"column"}
					>
						<CharacteristicTableHeader />

						<CharacteristicTableElement />
						<Box
							mt={"10px"}
							display={"flex"}
							width={"100%"}
							justifyContent={"end"}
						>
							<Button
								size="small"
								sx={{
									width: "120px",
									padding: "5px",
									borderRadius: "10px",
									textTransform: "none",
									bgcolor: "#EAF2FD",
									color: "black",
								}}
								startIcon={<PlusSVG width="18px" />}
							>
								<Typography
									fontSize={"0.825rem"}
									variant="subtitle1"
									fontWeight={600}
								>
									Добавить
								</Typography>
							</Button>
						</Box>
					</Box>
				</Box>

				<Box
					display={"flex"}
					alignItems={"center"}
					justifyContent={"space-between"}
					p={"10px"}
					borderRadius={"10px"}
					gap={"300px"}
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
	);
};

export { ProductAddModal };
