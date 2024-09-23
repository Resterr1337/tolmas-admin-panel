import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { ClientInfo } from "@/components/ClientPage/ClientInfo";
import { ClientOrderHistory } from "@/components/ClientPage/ClientOrderHistory";
import { ClientOrderTableHeader } from "@/components/ClientPage/ClientOrderTableHeader";
import { ClientOrderTableElement } from "@/components/ClientPage/ClientOrderTableElement";
import { useState } from "react";
import { ClientMessegeModal } from "@/components/ClientPage/ClientMessegeModal";

const ClientPage = () => {
	const location = useLocation();
	const clientObject = location.state;
    const [isMessegeModalOpen , setIsMessegeModalOpen] = useState()

	return (
		<>
			<Box mt={"10px"} display={"flex"} gap={"10px"}>
				<ClientInfo clientObject={clientObject} setIsMessegeModalOpen={setIsMessegeModalOpen} />
				<Box
					display={"flex"}
					flexGrow={1}
					height={"220px"}
					bgcolor={"white"}
					flexDirection={"column"}
				>
					<ClientOrderHistory  clientObject={clientObject} />
					<Box
						flexGrow={1}
						display={"flex"}
						flexDirection={"column"}
					>
                        <ClientOrderTableHeader/>
                        {clientObject.orders && clientObject.orders.map((item,index) => {
                            return <ClientOrderTableElement key={index} order={item} />
                        })}
                    </Box>
				</Box>
			</Box>

            <ClientMessegeModal isModalOpen={isMessegeModalOpen} setIsModalOpen={setIsMessegeModalOpen}/>
		</>
	);
};

export { ClientPage };
