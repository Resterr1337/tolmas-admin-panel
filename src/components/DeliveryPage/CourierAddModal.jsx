import { Box, Typography, IconButton, TextField, Button } from "@mui/material";
import CloseModalSVG from "@/assets/OrdersPage/OrderModal/closeModal.svg?react";
import UzbekFlagSVG from "@/assets/DeliveryPage/uzbekFlag.svg?react";

const CourierAddModal = ({ isModalOpen, setIsModalOpen }) => {
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
						height: "500px",
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
							Добавить авто
						</Typography>
						<IconButton
							onClick={() => {
								setIsModalOpen(false);
							}}
						>
							<CloseModalSVG />
						</IconButton>
					</Box>

					<Box display={"flex"} flexDirection={"column"} gap={"10px"}>
						<Box display={"flex"} flexDirection={"column"}>
							<Typography variant={"subtitle1"}>
								Номер машины*
							</Typography>
							<TextField
								sx={{
									bgcolor: "white",
									"& > input": {
										border: "1px solid #D9D9D9",
									},
								}}
							></TextField>
						</Box>
						<Box display={"flex"} flexDirection={"column"}>
							<Typography variant={"subtitle1"}>
								Марка машины*
							</Typography>
							<TextField
								sx={{
									bgcolor: "white",
									"& > input": {
										border: "1px solid #D9D9D9",
									},
								}}
							></TextField>
						</Box>
						<Box display={"flex"} flexDirection={"column"}>
							<Typography variant={"subtitle1"}>
								Номер телефона*
							</Typography>
							<Box display={"flex"} width={"100%"} gap={"20px"}>
								<Box
									width={"20%"}
									borderRadius={"10px"}
									border={"1px solid #D9D9D9"}
									bgcolor={"white"}
									display={"flex"}
									padding={"10px"}
									gap={"5px"}
									alignItems={"center"}
									justifyContent={"center"}
								>
									<UzbekFlagSVG />
									<Typography variant="subtitle1">
										+998
									</Typography>
								</Box>
								<TextField
									fullWidth
									sx={{
										bgcolor: "white",
										"& > input": {
											border: "1px solid #D9D9D9",
										},
									}}
								></TextField>
							</Box>
						</Box>
					</Box>

					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"space-between"}
					>
						<Button
                            onClick={() => setIsModalOpen(false)}
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
								Добавить
							</Typography>
						</Button>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export { CourierAddModal };
