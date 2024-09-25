import { useState } from "react";
import { useMap, Marker } from "react-leaflet";
import {Icon} from 'leaflet'
import 'leaflet/dist/leaflet.css';


const FilialMarker = () => {
    const markerIcon = new Icon({
        iconUrl:"https://pngimg.com/uploads/gps/gps_PNG38.png",
        iconSize:[25, 40],
        iconAnchor:[12.5, 45]
    })
    const [latIng , setLatIng] = useState([12, 12])

    const map = useMap()
    map.on("click", (e) => {
        setLatIng([e.latlng.lat , e.latlng.lng])
    })
	return <Marker icon={markerIcon} position={latIng}/>;
};

export { FilialMarker };
