/*
 * AppHeader displays an application heading with the title and some help and login buttons.
 */
import { Box, Paper } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import PersonIcon from "@mui/icons-material/Person";

function AppHeader() {
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Box>Hello World Application</Box>
                <Box>
                    <HelpIcon sx={{ marginRight: 2 }} />
                    <PersonIcon />
                </Box>
            </Box>
            <Paper
                elevation={0}
                sx={{ margin: 0, padding: 0, height: ".5rem" }}
                style={{
                    background: "rgba(88, 127, 227, 1.0)",
                    background:
                        "linear-gradient(to right, rgba(88, 127, 227, 1.0), rgba(17, 235, 213, 1.0))",
                }}
            ></Paper>
        </Box>
    );
}
export default AppHeader;
