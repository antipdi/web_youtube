import React, { useState } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
    appBar: {
        
        background: "#B22222",
        color: "#2f2c2c",
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    search: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: "40%",
        marginLeft: '20%',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    btn: {
        borderRadius: 0,
        height: 32,
    }
}));

export default function Navbar(props) {

    const classes = useStyles();
    const [input, setInput] = useState({
        input: ""
    }
    )

    function handleChange(event) {
        setInput(event.target.value)
        console.log(input)
    }

    function handleSubmit(event) {
        if (input.input === "") {
            event.preventDefault()
        }
    }

    return (
        <>
            <CssBaseline />
            <AppBar
                className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.handleClick}
                        edge="start"
                        className={classes.menuButton}>
                        <MenuIcon />
                    </IconButton>
                    <Link to="/" style={{
                        textDecoration: "none",
                        fontWeight: "bold",
                        color: "#FFFFFF",
                        display: "inline",
                        marginRight: 10,
                    }}>
                        <YouTubeIcon />
                        <Typography display={"inline"} variant="h6" noWrap color="inherit">
                            ЮтюбЪ
                        </Typography>
                    </Link>
                    <Paper component="form" className={classes.search} to>
                        <InputBase
                            className={classes.input}
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="submit" className={classes.iconButton} aria-label="search">
                            <Button type="submit" aria-label="search" className={classes.btn} onClick={handleSubmit}>
                                <SearchIcon />
                            </Button>
                        </IconButton>
                    </Paper>
                    <Link to={"/results/" + input}>
                    </Link>
                </Toolbar>
            </AppBar>
        </>
    );
}