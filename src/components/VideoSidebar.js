import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Footer from "./Footer";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import YouTubeIcon from "@material-ui/icons/YouTube";
import {Link} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: "relative",
        display: "inline-block",
        width: drawerWidth,
        background: "#fafafa",
        color: "#2f2c2c",
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    root: {
        display: 'flex',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));

export default function VideoSidebar(props) {
    const classes = useStyles();

    const bar1 = [{id: 1, title: 'Главная', icon: <HomeIcon/>},
        {id: 2, title: 'В тренде', icon: <WhatshotIcon/>},
        {id: 3, title: 'Подписки', icon: <SubscriptionsIcon/>},]

    const bar2 = [{id: 1, title: 'Библиотека', icon: <VideoLibraryIcon/>},
        {id: 2, title: 'История', icon: <HistoryIcon/>},
        {id: 3, title: 'Ваши видео', icon: <VideoLabelIcon/>},
        {id: 4, title: 'Смотреть позже', icon: <WatchLaterIcon/>},
        {id: 5, title: 'Понравившиеся', icon: <ThumbUpIcon/>}]

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                anchor="left"
                open={props.open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <AppBar
                    className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={props.handleClick}
                            edge="start"
                            className={classes.menuButton}>
                            <MenuIcon/>
                        </IconButton>
                        <Link to="/" style={{
                            textDecoration: "none",
                            fontWeight: "bold",
                            color: "#000000",
                            display: "inline",
                            marginRight: 10,
                        }}>
                            <YouTubeIcon/>
                            <Typography display={"inline"} variant="h6" noWrap>
                                ЮтюбЪ
                            </Typography>
                        </Link>
                    </Toolbar>
                </AppBar>

                <Divider />
                <List>
                    {bar1.map((item) => (
                        <ListItem button key={item.id}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.title}/>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <List>
                    {bar2.map((item) => (
                        <ListItem button key={item.id}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.title}/>
                        </ListItem>
                    ))}
                </List>
                <Footer open={props.open}/>
            </Drawer>
        </div>
    );
}
