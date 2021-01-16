import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import VideoMain from "../components/VideoMain";
import axios from "axios";
import Layout from "../components/Layout";
import Error from "./NotFound";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexGrow: 1
    }
}));


export default function Video(props) {

    const [appState, setAppState] = useState(
        {
            loading: false,
            videos: null,
        }
    )
    const [video, setVideo] = useState(
        {
            loading: false,
            video: null,
        }
    )

    const [fail, setFail] = React.useState(false);
    const [comments, setComments] = useState()

    const videoId = props.match.params.videoId

    useEffect(() => {
        setAppState({loading: true})
        axios.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+ videoId + "&key=AIzaSyD8T_VvpaKtek0kP65Qb3jlAVkg6qLPr2E").then((resp) => {
            const allVideos = resp.data;
            setVideo({
                loading: false,
                video: allVideos
            });
        });
        const apiUrl = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=KZ&key=AIzaSyD8T_VvpaKtek0kP65Qb3jlAVkg6qLPr2E&maxResults=17';
        axios.get(apiUrl).then((resp) => {
            const allVideos = resp.data;
            setAppState({
                loading: false,
                videos: allVideos
            });
        });
        axios.get("https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=" + videoId + "&key=AIzaSyD8T_VvpaKtek0kP65Qb3jlAVkg6qLPr2E").then((resp) => {
            const comments = resp.data;
            if (comments !== 1) {
                setComments({
                    comments: comments
                });
            }
        }).catch(function (error) {
            if (error.response.status === 404) {
                setFail(true)
            }
        });
    }, [setAppState]);

    const classes = useStyles();
    if (appState.loading) {
        return (
            <h1/>
        )
    }
    if (fail) {
        return (
            <Error/>
        )
    }
    return (
        <div className={classes.root}>
            <Layout>
                <VideoMain content={appState} id={videoId} comments={comments} video={video}/>
            </Layout>
        </div>
    );
}