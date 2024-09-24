import { Box, Typography } from "@mui/material"

const CharacteristicTableHeader = () => {
  return (
    <>
        <Box
            display={"flex"}
            bgcolor={"#F4F7F9"}
            alignItems={"center"}
        >
            <Typography p={"10px"} display={"flex"} flexBasis={"30px"} variant="subtitle1" fontWeight={700} color="black">№</Typography>
            <Typography p={"10px"} display={"flex"} flexGrow={1} flexBasis={"50%"} variant="subtitle1" fontWeight={700} color="black">Наименование</Typography>
            <Typography p={"10px"} display={"flex"} flexBasis={"25%"} variant="subtitle1" fontWeight={700} color="black">Значение</Typography>
            <Typography p={"10px"} display={"flex"} flexBasis={"20%"} variant="subtitle1" fontWeight={700} color="black">Действия</Typography>
        </Box>
    </>
  )
}

export { CharacteristicTableHeader }