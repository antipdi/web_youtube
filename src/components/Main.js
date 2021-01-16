import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardMedia from '@material-ui/core/CardMedia';
import { Avatar, CardActionArea } from "@material-ui/core";
import { Link } from "react-router-dom";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        boxShadow: "none",
        background: "#FFFFFF",
    },
    content: {
        marginTop: 63,
        paddingTop: 16,
        margin: 8,
        width: "100%",
        height: "100%",
        flexGrow: 1,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
        boxShadow: "none",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    card: {
        textAlign: "center",
        borderRadius: 0,
        boxShadow: "none",
        background: "#FFFFFF",
        width: '105%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',

    },
    heroButtons: {
        marginTop: theme.spacing(4),
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
    avatar: {
        marginTop: 5,
    },
    video_title: {
        maxHeight: 100,
        margin: 2,
        overflow: "hidden",
        textOverflow: "ellipsis",
        color: "#000000",
        textAlign: "center",
        fontSize: 16,
        textDecoration: "none",
    },
    logo: {
    }

}));

export default function Main(props) {

    const classes = useStyles();
    let videos = []
    let logos = []

    if (props.content.videos === null) {
        return (
            <div>
                <h1>
                    loading
                </h1>
            </div>
        )
    } else {
        if (props.logos === null) {
            return (
                <h1>loading</h1>
            )
        }
        if (props.logos !== null) {
            logos = props.logos
        }
        if (props.content !== null) {
            videos = props.content.videos.items
        }
        return (
            <>
                <Grid container spacing={3} className={classes.cardGrid}>
                    {videos.map((card, index) => (
                        <Grid item key={index} xs={9} sm={6} md={3}>
                            <CardActionArea>
                                <Link to={"/video/" + card.id} style={{ textDecoration: 'none' }}>
                                    <Card className={classes.card}>
                                        <CardMedia className={classes.media}
                                            image={card.snippet.thumbnails.high.url}
                                            title="video" />
                                    </Card>
                                    <CardHeader
                                        className={classes.video_title}
                                        avatar={
                                            <Avatar aria-label="recipe" src={findIndex(logos, card.snippet.channelId)}>
                                            </Avatar>
                                        }
                                        title={formatText(card.snippet.title)}
                                        subheader={getShortNumberString(card.statistics.viewCount)}
                                    />
                                </Link>
                            </CardActionArea>
                        </Grid>
                    ))}
                </Grid>
            </>
        );
    }
}

const UNITS = [' тыс. просмотров', ' млн. просмотов', 'B', 'T'];


export function findIndex(array, id) {
    if (array.logos.length === 0) {
        return null
    }
    let i;
    for (i in array.logos) {
        if (array.logos[i].id === id) {
            return array.logos[i].url
        }
    }
}


export function formatText(str) {
    return str.slice(0, 35) + "..."
}


export function getShortNumberString(number) {
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
    return number.toString();
}