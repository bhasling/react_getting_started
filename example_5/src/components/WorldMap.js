/*
 Draw a world map (using Leaflet).
 Leaflet must be dynamically loaded from a seperate js file.
*/

import dynamic from "next/dynamic";

const WorldMap = dynamic(() => import("./LeafletWorldMap"), {
    ssr: false,
});

export default WorldMap;
