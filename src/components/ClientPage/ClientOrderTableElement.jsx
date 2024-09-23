import { Box, Typography } from "@mui/material"
import { formatPrice } from "@/utils"
const ClientOrderTableElement = ({order}) => {
  return (
    <Box
    display={"flex"}
    flexGrow={1}
    alignItems={"center"}
    bgcolor={"white"}
    p={"10px"}
>
    <Typography variant={"subtitle1"} fontWeight={500} color="black" display={"flex"} flexBasis={"100px"}>{order.id}</Typography>
    <Typography variant={"subtitle1"} fontWeight={500} color="black" display={"flex"} flexBasis={"220px"}>{order.orderDate}</Typography>
    <Typography variant={"subtitle1"} fontWeight={500} color="black" display={"flex"} flexBasis={"200px"}>{formatPrice(order.totalCost)} UZS</Typography>
    <Typography variant={"subtitle1"} fontWeight={500} color="black" display={"flex"} flexBasis={"300px"}>{order.paymentWay}</Typography>
    <Typography variant={"subtitle1"} fontWeight={500} color="black" display={"flex"} flexBasis={"200px"}>{order.deliveryWay}</Typography>
    <Typography variant={"subtitle1"} fontWeight={500} color="black" display={"flex"} flexGrow={"1"} flexBasis={"100px"}>{order.status}</Typography>
</Box>
  )
}

export { ClientOrderTableElement }