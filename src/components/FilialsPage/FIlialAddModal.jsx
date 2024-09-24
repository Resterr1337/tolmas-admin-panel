import { Box, Typography, IconButton, TextField, Button , Checkbox} from "@mui/material";
import CloseModalSVG from "@/assets/OrdersPage/OrderModal/closeModal.svg?react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { useLeafletContext } from "@react-leaflet/core";
import { FilialMarker } from "./Map";

const FIlialAddModal = ({ isModalOpen, setIsModalOpen }) => {
	


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
							Добавить филиал
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
							Название филиала
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
							Адрес филиала
						</Typography>
						<TextField
							sx={{ bgcolor: "white" }}
							fullwidth
							placeholder=""
						></TextField>
					</Box>

					<Box sx={{ width: "100%", height: "600px" }}>
						<MapContainer center={[39.6542, 66.9597]} zoom={13}>
							<FilialMarker coords={[12, 12]} lapel={"Филиал"} />
							<TileLayer
								attribution={
									'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
								}
								url={
									"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								}
							></TileLayer>
						</MapContainer>
					</Box>

					<Box
						display={"flex"}
						alignItems={"center"}
						width={"100%"}
						gap={"10px"}
					>
						<Box
							border={"1px solid #D9D9D9"}
							justifyContent={"space-between"}
							flexGrow={1}
							display={"flex"}
							p={"10px"}
							bgcolor={"white"}
							borderRadius={"10px"}
						>
							<Typography variant={"subtitle1"}>
								Самовывоз
							</Typography>
							<Checkbox sx={{width:"20px", height:"20px"}} />
						</Box>
						<Box
							border={"1px solid #D9D9D9"}
							justifyContent={"space-between"}
							flexGrow={1}
							display={"flex"}
							p={"10px"}
							bgcolor={"white"}
							borderRadius={"10px"}
						>
							<Typography variant={"subtitle1"}>
								Доставка
							</Typography>
							<Checkbox sx={{width:"20px", height:"20px"}} />
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

export { FIlialAddModal };
