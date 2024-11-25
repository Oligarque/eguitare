// pages/learning/components/BoutonControle.jsx
// Un component pour les différents boutons de l'app


import React from 'react'

// Création des boutons de controle de la lecture
// Boutons play, pause, vitesse x0.5, vitesse x1, reset
const BoutonControles = (props) => {
    return(
        <div className="btnGrid">

            <button onClick={props.fonctionPlay}>Play</button>
            <button onClick={props.fonctionPause}>Pause</button>
            <button onClick={props.fonctionReset}>Reset</button>
            <br/>

            <button onClick={props.fonctionX1}>x1</button>
            <button onClick={props.fonctionX05}>x0.5</button>
            <button onClick={props.fonctionX025}>x0.25</button>

        </div>
    );
};

export default BoutonControles;