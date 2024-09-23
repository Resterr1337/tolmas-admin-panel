import { Avatar, Box, Typography, Button } from "@mui/material";

const ClientInfo = ({clientObject, setIsMessegeModalOpen}) => {
	return (
		<Box
			bgcolor={"white"}
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			width={"25%"}
			p={"20px 10px"}
		>
			<Box
				width={"80%"}
				p={"10px"}
				display={"flex"}
				flexDirection={"column"}
				alignItems={"center"}
				gap={"20px"}
				borderBottom={"1px solid #E1E1E1"}
			>
				<Avatar sx={{ width: "110px", height: "110px" }}></Avatar>
				<Typography fontWeight={700} variant="subtitle1">
					{clientObject.userName}
				</Typography>
			</Box>

			<Box
				display={"flex"}
				mt={"10px"}
				width={"100%"}
				flexDirection={"column"}
				gap={"10px"}
			>
				<Typography
					fontWeight={700}
					fontSize={"1.125rem"}
					variant="subtitle1"
				>
					Информация о пользователе
				</Typography>
				<Box display={"flex"} flexDirection={"column"}>
					<Typography variant="subtitle1" fontWeight={700}>
						Номер телефона
					</Typography>
					<Typography variant={"subtitle1"}>
						{clientObject.number}
					</Typography>
				</Box>
				<Box display={"flex"} flexDirection={"column"}>
					<Typography variant="subtitle1" fontWeight={700}>
						Дата добавления
					</Typography>
					<Typography variant={"subtitle1"}>
						{clientObject.dateOfRegistration}
					</Typography>
				</Box>
				<Box display={"flex"} flexDirection={"column"}>
					<Typography variant="subtitle1" fontWeight={700}>
						Последний визит
					</Typography>
					<Typography variant={"subtitle1"}>
						{clientObject.lastVisit}
					</Typography>
				</Box>
				<Box display={"flex"} flexDirection={"column"}>
					<Typography variant="subtitle1" fontWeight={700}>
						Локация
					</Typography>
					<Typography variant={"subtitle1"}>
						{clientObject.location}
					</Typography>
				</Box>
			</Box>

			<Button
				onClick={() => {setIsMessegeModalOpen(true)}}
				sx={{
					width: "100%",
					padding: "15px",
					color: "black",
					textTransform: "none",
					bgcolor: "#EAF2FD",
				}}
			>
				<Typography
					variant={"subtitle1"}
					fontWeight={700}
					fontSize={"1.125rem"}
				>
					Отправить сообщение
				</Typography>
			</Button>
		</Box>
	);
};

export { ClientInfo };
