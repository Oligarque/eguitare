import React from 'react'

// Création du bouton permettant de boucler entre deux temps
const BoutonBoucle = (props) => {
    return(
        
        <button onClick={props.handleLoop}>{props.label}</button>
        
    );

};

export default BoutonBoucle;