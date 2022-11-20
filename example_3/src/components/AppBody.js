import { Box, Paper, Button } from "@mui/material";
import WorldMap from "./WorldMap";

export default function AppBody() {
    return (
        <Box>
            <Box sx={{ margin: 1, textAlign: "center" }}>Home Page</Box>
            <Paper>
                <Box sx={{ margin: 1 }}>
                    <Button>Map</Button>
                    <Button>Table</Button>
                </Box>
            </Paper>
            <WorldMap />
        </Box>
    );
}

