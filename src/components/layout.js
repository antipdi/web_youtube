import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Nav from "./Nav";
import Sidebar from "./Sidebar"
import VideoSidebar from "./VideoSidebar";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
    }
}));

export default function Layout(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open)
    }

    if (props.children.type.name === "Main") {
        return (
            <div className={classes.root}>
                <Nav handleClick={handleClick} />
                <Sidebar open={!open} />
                {props.children}
            </div>
        );
    }
    return (
        <div className={classes.root}>
            <Nav handleClick={handleClick} />
            <VideoSidebar handleClick={handleClick} open={!open} />
            {props.children}
        </div>
    );
}
