import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";

export default function Joke() {
    const [joke, setJoke] = React.useState(null);
    const [showPunchline, setShowPunchLine] = React.useState(false);

    useEffect(() => {
        if (!joke) readJoke();
    }, [joke]);

    function readJoke() {
        const url = "https://official-joke-api.appspot.com/random_joke";
        setShowPunchLine(false);
        fetch(url)
            .then((response) => response.json())
            .then((data) => setJoke(data));
    }

    function clickGiveup() {
        setShowPunchLine(true);
    }

    return (
        <Box>
        {joke && <Box mt={2} mb={2}>
            <Box>Question</Box>
            <Box ml={3}>{joke.setup}</Box>
            <Button onClick={clickGiveup}>Give up?</Button>
            {showPunchline && <Box ml={3}>{joke.punchline}</Box>}
            {showPunchline && <Button onClick={readJoke}>New Joke?</Button>}
        </Box>}
        </Box>
    );
}
