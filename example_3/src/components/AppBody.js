import { Box, Paper, Button } from "@mui/material";
import WorldMap from "./WorldMap";

export default function AppBody() {
    return (
        <Box>
            <Paper>
                <Box>
                    <Button>Map</Button>
                    <Button>Table</Button>
                </Box>
            </Paper>
            <WorldMap />
        </Box>
    );
}

