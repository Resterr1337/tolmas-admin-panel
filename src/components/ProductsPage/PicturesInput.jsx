import { Box, Typography } from "@mui/material";
import UploadFilesSVG from "@/assets/BannerPage/uploadFiles.svg?react";

const PicturesInput = ({ files, setFiles }) => {
	const handleChange = (event) => {
		event.preventDefault();
		if (event.target.files.length) {
			setFiles([...files ,...event.target.files]);
		}
	};

	const handleDrop = (event) => {
		event.preventDefault();
		setFiles([...files , ...event.dataTransfer.files]);
	};

	return (
		<form
			style={{width:"49%"}}

			onDragStart={(e) => {
				e.preventDefault();
			}}
			onDragLeave={(e) => {
				e.preventDefault();
			}}
			onDragOver={(e) => {
				e.preventDefault();
			}}
			onDrop={handleDrop}
		>
			<Box
				width={"100%"}
				height={"250px"}
				display={"flex"}
				alignItems={"center"}
				justifyContent={"center"}
				bgcolor={"#F5F5F5)"}
				border={"2px dashed black"}
				borderRadius={"10px"}
			>
				<label
					style={{
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<input
						onChange={handleChange}
						multiple={true}
						accept="image/webp, image/jpeg, image/jpg, image/png"
						type="file"
						style={{ width: "0px", height: "0px" }}
					/>
					<Box
						display={"flex"}
						flexDirection={"column"}
						alignItems={"center"}
						gap={"20px"}
					>
						<UploadFilesSVG />
						<Typography variant="subtitle1">
							Перетащите или выберите фото
						</Typography>
					</Box>
				</label>
			</Box>
		</form>
	);
};

export { PicturesInput };
