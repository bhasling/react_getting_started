import {
    Box,
    Paper,
    Button,
    Table,
    TableContainer,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import cities from "../config/cities.json";
import { useGlobalState, setGlobalState } from "./GlobalState";

export default function MarkerTable() {
    const markerList = cities ? cities.markers : [];
    const [currentCityId] = useGlobalState("currentCityId");

    function clickRow(row) {
        setGlobalState("currentCityId", row.id);
    }
    return (
        <TableContainer component={Paper}>
            <Table size="small">
                <TableHead>
                    <TableRow sx={{ backgroundColor: "#dddddd" }}>
                        <TableCell>Name</TableCell>
                        <TableCell>Latitute</TableCell>
                        <TableCell>Longitude</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {markerList.map((row) => (
                        <TableRow
                            onClick={() => clickRow(row)}
                            selected={row.id == currentCityId}
                        >
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.lat}</TableCell>
                            <TableCell>{row.lon}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
