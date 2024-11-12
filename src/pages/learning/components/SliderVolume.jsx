// pages/learning/components/SliderVolume.jsx
// Un component pour gérer le volume


import React from 'react'
import { forwardRef } from 'react';

 // Création du slider permettant d'ajuster le volume de la vidéo
 const SliderVolume = forwardRef (function SliderVolume(props, ref){
    return(
      <>
      <input
      id="volume"
      ref={ref}
      type="range"
      defaultValue={props.volume}
      onClick={props.onClick}
      min="0" max="1" step="0.01"
      />
      <label htmlFor="volume">Volume</label>
      </>
    );
  });

  export default SliderVolume;