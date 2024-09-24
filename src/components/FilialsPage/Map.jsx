import { useState } from "react";
import { useMap, Marker } from "react-leaflet";


const FilialMarker = () => {
    const [latIng , setLatIng] = useState([12, 12])

    const map = useMap()
    map.on("click", (e) => {
        setLatIng([e.latlng.lat , e.latlng.lng])
    })
	return <Marker position={latIng}/>;
};

export { FilialMarker };
