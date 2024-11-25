import React from 'react'

// Création du bouton permettant de boucler entre deux temps
const BoutonBoucle = (props) => {
    return(
        <div>

        <label>
        Boucler
        <input
        type='checkbox'
        onClick={props.onClickDebutBoucle}
        
        />
        </label>
        <br/>
        <label>
        Début de la boucle :
          <input
          className="debutBoucle"
          type="text"
          onChange={props.onChangeDebutBoucle}
          defaultValue={0}
          />
        </label>

          <br/>
          <label>
          Fin de la boucle :
          <input
          className="finBoucle"
          type="text"
          onChange={props.onChangeFinBoucle}
          defaultValue={10}
          />
          </label>
        </div>
    );

};

export default BoutonBoucle;