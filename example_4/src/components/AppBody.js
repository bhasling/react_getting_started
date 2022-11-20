import React from "react";
import { Box, Paper, Button } from "@mui/material";
import WorldMap from "./WorldMap";
import MarkerTable from "./MarkerTable";

export default function AppBody() {
    const [pageType, setPageType] = React.useState("map");

    function clickType(pageType) {
        setPageType(pageType);
    }
    return (
        <Box>
            <Box sx={{ margin: 1, textAlign: "center" }}>Home Page</Box>
            <Paper>
                <Box sx={{ margin: 1 }}>
                    <Button onClick={() => clickType("map")}>Map</Button>
                    <Button onClick={() => clickType("table")}>Table</Button>
                </Box>
            </Paper>
            {pageType == "map" && <WorldMap />}
            {pageType == "table" && <MarkerTable />}
        </Box>
    );
}
