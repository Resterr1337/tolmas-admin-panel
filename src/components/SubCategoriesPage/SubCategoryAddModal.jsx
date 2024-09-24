import { Box, Typography, IconButton, Input, Button } from "@mui/material";
import CloseModalSVG from "@/assets/OrdersPage/OrderModal/closeModal.svg?react";
import RussianFlagSVG from "@/assets/CategoriesPage/russianFlag.svg?react";
import UzbekFlagSVG from "@/assets/DeliveryPage/uzbekFlag.svg?react";
import { useState } from "react";

const SubCategoryAddModal = ({ isModalOpen, setIsModalOpen }) => {
	return (
		<Box
			id={"bannerAdd-modal-backdrop"}
			onClick={() => {
				event.target.id == "bannerAdd-modal-backdrop"
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
					width: "640px",
					background: "#F4F7F9",
					display: "flex",
					flexDirection: "column",
					boxShadow: "-100px 0px 1000px #00000050",
					padding: "20px 10px",
					gap: "20px",
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
						Добавить подкатегорию
					</Typography>
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
				</Box>

				<Typography
					display={"flex"}
					justifyContent={"space-between"}
					alignItems={"center"}
					variant="h5"
					fontWeight={700}
				>
					Русский
					<RussianFlagSVG />
				</Typography>

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
				</Box>

				<Typography
					display={"flex"}
					justifyContent={"space-between"}
					alignItems={"center"}
					variant="h5"
					fontWeight={700}
				>
					Uzbek
					<UzbekFlagSVG />
				</Typography>

				<Box flexGrow={1} display={"flex"} flexDirection={"column"}>
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
				</Box>

				<Box
					position={"absolute"}
					width={"100%"}
					bottom={"10px"}
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
	);
};

export { SubCategoryAddModal };
