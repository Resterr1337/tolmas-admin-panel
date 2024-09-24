import {
	Box,
	Typography,
	IconButton,
	TextField,
	Button,
	Checkbox,
} from "@mui/material";
import CloseModalSVG from "@/assets/OrdersPage/OrderModal/closeModal.svg?react";

const RoleAddModal = ({ isModalOpen, setIsModalOpen }) => {
	const permissionObject = [
		{
			title: "Дашборд",
			watch: true,
			edit: true,
			delete: true,
		},
		{
			title: "Заказы",
			watch: true,
			edit: true,
			delete: true,
		},
		{
			title: "Клиенты",
			watch: true,
			edit: true,
			delete: true,
		},
		{
			title: "Продукты",
			watch: true,
			edit: true,
			delete: true,
		},
		{
			title: "Скидка",
			watch: true,
			edit: true,
			delete: true,
		},
		{
			title: "Промокоды",
			watch: true,
			edit: true,
			delete: true,
		},
		{
			title: "Баннер",
			watch: true,
			edit: true,
			delete: true,
		},
		{
			title: "Филиалы",
			watch: true,
			edit: true,
			delete: true,
		},
		{
			title: "Доставка",
			watch: true,
			edit: true,
			delete: true,
		},
		{
			title: "Настройки",
			watch: true,
			edit: true,
			delete: true,
		},
	];

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
						width: "640px",
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
							Добавить роль
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
							Наименование
						</Typography>
						<TextField
							sx={{ bgcolor: "white" }}
							fullwidth
						></TextField>
					</Box>

					<Box
						display={"flex"}
						bgcolor={"white"}
						alignItems={"center"}
						justifyContent={"space-between"}
						borderRadius={"10px"}
						p={"10px"}
					>
						<Typography variant="subtitle1" fontWeight={500}>
							Функционал
						</Typography>
						<Box
							display={"flex"}
							alignItems={"center"}
							justifyContent={"space-between"}
							gap={"20px"}
						>
							<Box
								display={"flex"}
								alignItems={"center"}
								gap={"5px"}
							>
								<Checkbox
									sx={{ width: "20px", height: "20px" }}
								></Checkbox>
								<Typography
									variant={"subtitle1"}
									fontWeight={500}
								>
									Просмотр
								</Typography>
							</Box>
							<Box
								display={"flex"}
								alignItems={"center"}
								gap={"5px"}
							>
								<Checkbox
									sx={{ width: "20px", height: "20px" }}
								></Checkbox>
								<Typography
									variant={"subtitle1"}
									fontWeight={500}
								>
									Редактировать
								</Typography>
							</Box>
							<Box
								display={"flex"}
								alignItems={"center"}
								gap={"5px"}
							>
								<Checkbox
									sx={{ width: "20px", height: "20px" }}
								></Checkbox>
								<Typography
									variant={"subtitle1"}
									fontWeight={500}
								>
									Удалить
								</Typography>
							</Box>
						</Box>
					</Box>

					<Box display={"flex"} flexDirection={"column"} gap={"5px"}>
						{permissionObject.map((item, index) => {
							return (
								<Box
                                    key={index}
									display={"flex"}
									alignItems={"center"}
									justifyContent={"space-between"}
								>
									<Typography
										variant="subtitle1"
										ml={"10px"}
										fontWeight={500}
									>
										{item.title}
									</Typography>
									<Box
										display={"flex"}
										alignItems={"center"}
										justifyContent={"space-between"}
										gap={"20px"}
									>
										<Box
											width={"102.5px"}
											display={"flex"}
											alignItems={"center"}
											gap={"5px"}
										>
											<Checkbox
												sx={{
													width: "20px",
													height: "20px",
												}}
											></Checkbox>
										</Box>
										<Box
											width={"142px"}
											display={"flex"}
											alignItems={"center"}
											gap={"5px"}
										>
											<Checkbox
												sx={{
													width: "20px",
													height: "20px",
												}}
											></Checkbox>
										</Box>
										<Box
											width={"97px"}
											display={"flex"}
											alignItems={"center"}
											gap={"5px"}
										>
											<Checkbox
												sx={{
													width: "20px",
													height: "20px",
												}}
											></Checkbox>
										</Box>
									</Box>
								</Box>
							);
						})}
					</Box>

					<Box
						display={"flex"}
						alignItems={"center"}
						position={"absolute"}
						bottom={"10px"}
						left={"10px"}
						right={"10px"}
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

export { RoleAddModal };
