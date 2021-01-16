import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Footer from './Footer';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
    },
    drawerClose: {
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },

    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    }
}));

export default function Sidebar(props) {
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
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: props.open,
                [classes.drawerClose]: !props.open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: props.open,
                    [classes.drawerClose]: !props.open,
                }),
            }}
        >
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                {bar1.map((item) => (
                    <ListItem button key={item.id}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.title}/>
                    </ListItem>
                ))}
            </List>
            <Divider hidden={!props.open}/>
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

    );
}