import React, { forwardRef } from 'react'
import ReactPlayer from 'react-player';

const VideoExplication = forwardRef(function VideoExplication(props, ref){
    return(
        <>
            <ReactPlayer
            ref={ref}
            playing={props.playing}
            width="70%" height="70%"
            url={props.source} type="video/mp4"
            />
        </>
    );   
});

export default VideoExplication;