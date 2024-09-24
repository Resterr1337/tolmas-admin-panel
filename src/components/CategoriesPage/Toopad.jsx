import { Box, Typography, Button } from "@mui/material";
import PlusSVG from "@/assets/BannerPage/plus.svg?react";


const Toolpad = ({setIsModalOpen}) => {
  return (
    <>
    			<Box
				mt={"10px"}
				display={"flex"}
				alignItems={"center"}
				justifyContent={"space-between"}
				width={"100%"}
				bgcolor={"white"}
				padding={"10px 10px"}
				borderRadius={"10px"}
			>
				<Typography fontWeight={700} variant="h5">
					Категории
				</Typography>
				<Button

					onClick={() => setIsModalOpen(true)}
					sx={{
						padding:"10px",
						borderRadius:"10px",
						textTransform: "none",
						bgcolor: "#EAF2FD",
						color: "black",
					}}
					startIcon={<PlusSVG />}
				>
					<Typography
						fontSize={"1.125rem"}
						variant="subtitle1"
						fontWeight={700}
					>
						Добавить категорию
					</Typography>
				</Button>
			</Box>
    </>
  )
}

export { Toolpad }