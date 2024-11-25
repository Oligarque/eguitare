// pages/learning/components/Video.jsx
// Un component pour gérer chaque vidéo


import React from 'react'
import ReactPlayer from 'react-player';
import { forwardRef } from 'react';

// Création des médias Vidéo
const Video = forwardRef(function Video(props, ref) {

    return(
        <>
            <ReactPlayer
            ref={ref}
            playbackRate={props.pbrate}
            muted
            playing={props.playing}
            width="100%" height="100%"
            url={props.source} type="video/mp4"
            progressInterval={props.progressInterval}
            onProgress={props.onProgress}
            />
        </>
    );
});

export default Video;