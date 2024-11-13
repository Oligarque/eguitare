import React from 'react';

const BoutonPlay = (props) => {

    return(
        <>
            <button onClick={props.fonctionPlay}>Play</button>
            <button onClick={props.fonctionPause}>Pause</button>
            <button onClick={props.fonctionReset}>Reset</button>
        </>
    );
}

export default BoutonPlay;