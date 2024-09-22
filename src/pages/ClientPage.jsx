import { useLocation } from "react-router-dom";

const ClientPage = () => {
    const location = useLocation()
    const clientObject = location.state

	return <div></div>;
};

export { ClientPage };
