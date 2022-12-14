/*
 Draw a world map (using Leaflet) to display the base map of the explore domain page.
 Leaflet must be dynamically loaded so this is a .js component seperate from WorldMap.
*/

import { Box } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import cities from "../config/cities.json";
import { useGlobalState, setGlobalState } from "./GlobalState";

export default function LeafletWorldMap() {
    const [currentCityId] = useGlobalState("currentCityId");
    const centerPoint = [42, -95];
    const zoomLevel = 4;
    let mapWidth = 0, mapHeight = 0;
    if (typeof window != "undefined") {
        mapWidth = window.innerWidth - 10;
        mapHeight = window.innerHeight - 140;
    }

    return (
        <Box sx={{ width: mapWidth, height: mapHeight }}>
            <MapContainer
                center={centerPoint}
                zoom={zoomLevel}
                scrollWheelZoom={true}
                doubleClickZoom={false}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    url={"https://tile.openstreetmap.org/{z}/{x}/{y}.png"}
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Open Street Map</a>'
                />
                {cities.markers
                    .filter((row) => row.id == currentCityId)
                    .map((row, rowIndex) => (
                        <Marker key={rowIndex} position={[row.lat, row.lon]}>
                            <Popup>{row.name}</Popup>
                        </Marker>
                    ))}
            </MapContainer>
        </Box>
    );
}
