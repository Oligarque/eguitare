// 'pages/learning/components/audio.jsx'
// Un composant pour gérer l'audio du morceau de guitare

import React from 'react'
import ReactPlayer from 'react-player';
import { forwardRef } from 'react';

// TODO : Création du média audio
const Audio = forwardRef(function Audio(props, ref){

    return(
      <>
        <ReactPlayer
        ref={ref}
        playbackRate={props.pbrate}
        playing={props.playing}
        url={props.source}
        volume={props.volume}
        />
      </>
    );
});

export default Audio;