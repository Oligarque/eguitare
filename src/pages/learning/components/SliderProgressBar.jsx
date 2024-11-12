// pages/learning/components/SliderProgressBar.jsx
// Un component pour avoir un slider pour naviguer sur la bande


import React from 'react'
import { forwardRef } from 'react';

// Création du slider permettant d'ajuster la position dans la vidéo

const SliderProgressBar = forwardRef (function SliderProgressBar(props, ref){
    if(props.video !== undefined){
      return(
        <>
          <span>{props.timeText}</span>
          <br/>
          <input
          ref={ref}
          type="range"
          value={props.value}
          onChange={props.onChange}
          min="0" max={props.video.getDuration()} step="1"
          />
        </>
      );
    }
  });

  export default SliderProgressBar;