import React from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import MediaQuery from 'react-responsive'
import {Avatar, Box, Button, CardActionArea, IconButton} from "@material-ui/core";
import Linkify from 'react-linkify';
import {Link} from "react-router-dom";
import CardHeader from "@material-ui/core/CardHeader";
import parse from 'html-react-parser';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import clsx from "clsx";


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 78,
        flexGrow: 1,
        marginLeft: 16,
        flexDirection: "column",
        display: "inline",
    },
    content: {
        width: "100%",
        boxShadow: "none",
    },
    cardGrid: {
        width: "100%",
        flexGrow: 1,
        marginTop: theme.spacing(8),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(2),
    },
    media: {
        height: 180,
    },
    videos: {
        paddingBottom: theme.spacing(1),
    },
    card: {
        boxShadow: "none",
        backgroundColor: "#FFFFFF",
        borderRadius: 0,
    },
    description: {
        maxHeight: "9rem",
    },
    paper: {
        margin: 5,
    },
    like: {
        display: "inline",
        marginLeft: 60,
        marginTop: -4,
    },
    hide: {
        overflow: "hidden"
    }

}));

export default function VideoMain(props) {
    const classes = useStyles();
    const [size, setSize] = React.useState(9)

    const handleMediaQueryChange = (matches) => {
        if (!matches) {
            setSize(12)
        } else {
            setSize(9)
        }
    }

    let video = []
    let videos = []
    let comments = []
    let id = 0;


    if (props.content.videos === null || props.comments === 1) {
        return (
            <div>
                <h1>
                    loading
                </h1>
            </div>
        )
    } else {

        video = props.video.video.items[0]
        videos = props.content.videos.items
        if (props.comments !== undefined) {
            comments = props.comments.comments.items
        }
        if (comments.length === 0) {
            return (
                <>
                    <Grid container spacing={3} className={classes.cardGrid}>
                        <Grid item xs={size} className={classes.content}>
                            <Card className={classes.content}>
                                <CardMedia
                                    component="iframe"
                                    alt="Contemplative Reptile"
                                    width="280"
                                    height="500"
                                    src={"https://www.youtube.com/embed/" + props.id}
                                    title="some video"
                                />
                                <CardContent>
                                    <Box container className={clsx(classes.description, {
                                        [classes.hide]: open,
                                    })}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {video.snippet.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {video.snippet.description.split('\n').map((paragraph, index) =>
                                                <p key={index}><Linkify>{paragraph}</Linkify></p>)}
                                        </Typography>
                                    </Box>
                                    <Button style={{marginTop: 8}}>
                                        Ещё
                                    </Button>
                                </CardContent>
                            </Card>

                            <Box>
                                <Typography style={{justifyContent: "center", margin: 10}}>
                                    Comments is disabled by author
                                </Typography>
                            </Box>
                        </Grid>

                        <MediaQuery minWidth={720} onChange={handleMediaQueryChange}>
                            <Grid item xs={3}>
                                {videos.map((card, index) => (
                                    <Grid item key={index} className={classes.videos}>
                                        <CardActionArea>
                                            <Link to={"/video/" + card.id} style={{textDecoration: 'none'}}>
                                                <Card className={classes.card}>
                                                    <CardMedia
                                                        className={classes.media}
                                                        image={card.snippet.thumbnails.high.url}
                                                        title="video"/>
                                                    {card.snippet.title}
                                                </Card>
                                            </Link>
                                        </CardActionArea>
                                    </Grid>
                                ))}
                            </Grid>
                        </MediaQuery>
                    </Grid>
                </>
            );
        }
        return (
            <>
                <Grid container spacing={3} className={classes.cardGrid}>
                    <Grid item xs={size} className={classes.content}>
                        <Card className={classes.content}>
                            <CardMedia
                                component="iframe"
                                alt="Contemplative Reptile"
                                width="280"
                                height="500"
                                src={"https://www.youtube.com/embed/" + props.id}
                                title="some video"
                            />
                            <CardContent>
                                <Box container className={clsx(classes.description, {
                                    [classes.hide]: open,
                                })}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {video.snippet.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {video.snippet.description.split('\n').map((paragraph, index) =>
                                            <p key={index}><Linkify>{paragraph}</Linkify></p>)}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>

                        <Box>
                            <Grid container spacing={3}>
                                {comments.map((item, index) => (
                                    <Grid item key={index} xs={12}>
                                        <Card className={classes.paper}>
                                            <CardHeader
                                                className={classes.video_title}
                                                avatar={
                                                    <Avatar aria-label="recipe"
                                                            src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}>
                                                    </Avatar>
                                                }
                                                title={item.snippet.topLevelComment.snippet.authorDisplayName + parseDate(item.snippet.topLevelComment.snippet.publishedAt)}
                                                subheader={parse(item.snippet.topLevelComment.snippet.textDisplay)}
                                            />
                                            <Box className={classes.like}>
                                                <IconButton>
                                                    <ThumbUpIcon/>
                                                </IconButton>
                                                <Typography display={"inline"}>
                                                    {getShortNumberStringLikes(item.snippet.topLevelComment.snippet.likeCount)}
                                                </Typography>
                                                <IconButton>
                                                    <ThumbDownIcon/>
                                                </IconButton>
                                            </Box>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>

                    <MediaQuery minWidth={720} onChange={handleMediaQueryChange}>
                        <Grid item xs={3}>
                            {videos.map((card, index) => (
                                <Grid item key={index} className={classes.videos}>
                                    <CardActionArea>
                                        <Link to={"/video/" + card.id} style={{textDecoration: 'none'}}>
                                            <Card className={classes.card}>
                                                <CardMedia
                                                    className={classes.media}
                                                    image={card.snippet.thumbnails.high.url}
                                                    title="video"/>
                                                {card.snippet.title}
                                            </Card>
                                        </Link>
                                    </CardActionArea>
                                </Grid>
                            ))}
                        </Grid>
                    </MediaQuery>
                </Grid>
            </>
        );
    }
}

const UNITS = [' тыс.', ' млн.', 'B', 'T'];

// https://stackoverflow.com/a/28608086/2328833
export function getShortNumberStringLikes(number) {
    const shouldShowDecimalPlace = UNITS.some((element, index) => {
        const lowerBound = Math.pow(1000, index + 1);
        const upperBound = lowerBound + lowerBound * 10;
        return number > lowerBound && number < upperBound
    });
    const digits = shouldShowDecimalPlace ? 1 : 0;
    for (let i = UNITS.length - 1; i >= 0; i--) {
        const decimal = Math.pow(1000, i + 1);

        if (number >= decimal) {
            return (number / decimal).toFixed(digits) + UNITS[i];
        }
    }
    if (number === 0) {
        return null;
    }
    return number.toString();
}

export function parseDate(str) {
    let dt = str.replace("T", " ").replace(/\..+/g, "");
    dt = new Date(dt);
    return " " + dt.toLocaleDateString()
}

export function parseText(str) {
    return str.slice(0, 150) + "..."
}