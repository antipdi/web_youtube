import React from 'react';
import {Button, CardMedia} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: " center",
        flexGrow: 1,
        textAlign: "center"
    },
    media: {
        marginLeft: 38,
        marginRight: "10%",
        height: 174,
        width: 186,
    },
    container: {
        whiteSpace: 10,
        textAlign: "center",
        marginTop: "10%",
    },
    typo: {
        padding: 16,
        fontSize: 18,
        color: "#414040"
    }

}));

export default function NotFound() {

    const classes = useStyles()

    return (
        <Box className={classes.root}>
            {/* <Box className={classes.container} p={10}> */}
            <img src='img/404.jpg' height="60%" width="60%" />
                <Typography className={classes.typo}> Эта страница недоступна. </Typography>
                <Button>
                    <Link
                        to="/" style={{
                        textDecoration: "none",
                        fontWeight: "bold",
                        color: "#000000",
                        display: "inline",
                        marginRight: 10,
                    }}>Вернуться домой</Link>
                </Button>
            {/* </Box> */}
        </Box>
    );
}