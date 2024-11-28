// pages/learning/components/BoutonControle.jsx
// Un component pour les différents boutons de l'app


import React from 'react'
import './BoutonControles.css'

// Création des boutons de controle de la lecture
// Boutons play, pause, vitesse x0.5, vitesse x1, reset
const BoutonControles = (props) => {
    return (
        <div className="btnGrid">

            <button onClick={props.fonctionPlay} className='btn'>
                <img className="playerIcon" alt='Play' src='/images/icons/play-btn.svg' ></img>
            </button>
            <button onClick={props.fonctionPause} className='btn'>
                <img className="playerIcon" alt='Pause' src='/images/icons/pause-btn.svg' ></img>
            </button>
            <button onClick={props.fonctionReset} className='btn'>
                <img className="playerIcon" alt='Reset' src='/images/icons/arrow-counterclockwise.svg' ></img>
            </button>
            <br />

            <button onClick={props.fonctionX1}>x1</button>
            <button onClick={props.fonctionX05}>x0.5</button>
            <button onClick={props.fonctionX025}>x0.25</button>

        </div>
    );
};

export default BoutonControles;