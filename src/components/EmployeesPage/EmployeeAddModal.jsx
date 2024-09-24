import {
	Box,
	Typography,
	IconButton,
	TextField,
	Button,
	Autocomplete,
} from "@mui/material";
import CloseModalSVG from "@/assets/OrdersPage/OrderModal/closeModal.svg?react";
import UzbekFlagSVG from "@/assets/DeliveryPage/uzbekFlag.svg?react";

const EmployeeAddModal = ({ isModalOpen, setIsModalOpen }) => {
	return (
		<>
			<Box
				id={"add-filial-modal-backdrop"}
				onClick={() => {
					event.target.id == "add-filial-modal-backdrop"
						? setIsModalOpen(false)
						: null;
				}}
				sx={{
					width: "100vw",
					height: "100vh",
					position: "fixed",
					top: "0%",
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
						background: "#F4F7F9",
						display: "flex",
						flexDirection: "column",
						justifyContent: "start",
						gap: "20px",
						boxShadow: "-100px 0px 1000px #00000050",
						p: "15px",
					}}
				>
					<Box
						display={"flex"}
						justifyContent={"space-between"}
						alignItems={"center"}
					>
						<Typography fontWeight={700} variant="h5">
							Добавить cотрудника
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
						display={"flex"}
						flexDirection={"column"}
						width={"100%"}
					>
						<Typography variant={"subtitle1"} fontWeight={500}>
							Логин*
						</Typography>
						<TextField
							sx={{ bgcolor: "white" }}
							fullwidth
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

					<Box
						display={"flex"}
						flexDirection={"column"}
						width={"100%"}
					>
						<Typography variant={"subtitle1"} fontWeight={500}>
							Введите новый пароль*
						</Typography>
						<TextField
							sx={{ bgcolor: "white" }}
							fullwidth
						></TextField>
					</Box>
					<Box
						display={"flex"}
						flexDirection={"column"}
						width={"100%"}
					>
						<Typography variant={"subtitle1"} fontWeight={500}>
							Подтвердите новый пароль*
						</Typography>
						<TextField
							sx={{ bgcolor: "white" }}
							fullwidth
						></TextField>
					</Box>
					<Box
						display={"flex"}
						flexDirection={"column"}
						width={"100%"}
					>
						<Typography variant={"subtitle1"} fontWeight={500}>
							Роль
						</Typography>
						<Autocomplete
							disablePortal
                            options={["Admin","Manager"]}
							renderInput={(params) => (
								<TextField sx={{bgcolor:"white"}} fullWidth {...params} />
							)}
						/>
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

export { EmployeeAddModal };
