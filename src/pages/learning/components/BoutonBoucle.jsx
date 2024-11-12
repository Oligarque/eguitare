// pages/learning/components/BoutonBoucle.jsx
// Un component pour gérer le boutonBoucle


import React from 'react'
import { forwardRef } from 'react';

// Création du bouton permettant de boucler entre deux temps
const BoutonBoucle = forwardRef(function BoutonBoucle(props, ref){

    return(
        <>
        <button
        ref={ref}
        onClick={props.onClick}
        >{props.buttonText}</button>
        </>
    );

});

export default BoutonBoucle;