import CloseModalSVG from "@/assets/OrdersPage/OrderModal/closeModal.svg?react";
import { Box, Typography, IconButton, Button , TextField} from "@mui/material";

const ClientMessegeModal = ({ isModalOpen, setIsModalOpen }) => {
	return (
		<Box
			id={"client-messege-modal-backdrop"}
			onClick={() => {
				event.target.id == "client-messege-modal-backdrop"
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
						Отправьте сообщение
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
                    width={"100%"}
                    display={"flex"}
                    flexDirection={"column"}
                    
                >
                    <Typography variant="subtitle1">Сообщение*</Typography>
                    <TextField  sx={{bgcolor:"white", borderRadius:"10px" , border:"1px solid #D9D9D9"}} multiline={true} minRows={13} maxRows={15} placeholder="Напишите сообщение"></TextField>
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
								Отправить
							</Typography>
						</Button>
					</Box>
			</Box>
		</Box>
	);
};

export { ClientMessegeModal };
