import React, { forwardRef } from 'react'
import ReactPlayer from 'react-player';

const VideoExplication = forwardRef(function VideoExplication(props, ref){
    return(
        <>
            <ReactPlayer
            ref={ref}
            width={props.size} height={props.size}
            url={props.source} type="video/mp4"
            controls={true}
            />
        </>
    );   
});

export default VideoExplication;