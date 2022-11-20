import { Box, Paper, Button } from "@mui/material";

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
        </Box>
    );
}

