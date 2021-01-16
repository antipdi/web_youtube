import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Main from '../components/Main';
import axios from "axios";

const Start = () => {

  const [appState, setAppState] = useState(
    {
      loading: false,
      videos: null,
    }
  )
  const [logos, setLogos] = useState({
    logos: []
  })

  useEffect(() => {
    setAppState({ loading: true })
    const apiUrl = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=KZ&key=AIzaSyD8T_VvpaKtek0kP65Qb3jlAVkg6qLPr2E&maxResults=24';
    axios.get(apiUrl).then((resp) => {
      const allVideos = resp.data;
      setAppState({
        loading: false,
        videos: allVideos
      });
      const logo = []
      if (allVideos !== undefined) {
        allVideos.items.map((item) => (
          axios.get('https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=' + item.snippet.channelId + '&key=AIzaSyD8T_VvpaKtek0kP65Qb3jlAVkg6qLPr2E').then((resp) => {
            logo.push({ id: item.snippet.channelId, url: resp.data.items[0].snippet.thumbnails.high.url })
            setLogos({
              logos: logo
            })
          })))
      }
    });
  }, [setAppState]);

  if (appState.loading) {
    return (
      <></>
    )
  }
 
  return (
    <Layout>
      <Main content={appState} logos={logos} />
    </Layout>
  );
}
export default Start;