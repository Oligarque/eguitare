// pages/learning/components/BoutonControle.jsx
// Un component pour les différents boutons de l'app


import React from 'react'
import './BoutonControles.css'

// Création des boutons de controle de la lecture
// Boutons play, pause, vitesse x0.5, vitesse x1, reset
const BoutonControles = (props) => {
    return (
        <div className="btnGrid row">

            <button onClick={props.fonctionPlay} className='btn col col-4 col-md-3'>
                <h3>
                    <img className="playerIcon" alt='Play' src='/images/icons/play-btn.svg'/> Play
                </h3>
            </button>
            <button onClick={props.fonctionPause} className='btn col col-4 col-md-3'>
                <h3>
                    <img className="playerIcon" alt='Pause' src='/images/icons/pause-btn.svg'/> Pause
                </h3>
                
            </button>
            <button onClick={props.fonctionReset} className='btn col col-4 col-md-3'>
                <h3>
                    <img className="playerIcon" alt='Reset' src='/images/icons/arrow-counterclockwise.svg'/> Reset
                </h3>
                
            </button>

            <div className='col col-auto align-self-center'>
                <button onClick={props.fonctionX1} className='speedButton'>x1</button>
                <button onClick={props.fonctionX05} className='speedButton'>x0.5</button>
                <button onClick={props.fonctionX025} className='speedButton'>x0.25</button>
            </div>
            

        </div>
    );
};

export default BoutonControles;