import React from 'react';

const BoutonPbr = (props) => {

    return(
        <>
            <button onClick={props.fonctionX1}>x1</button>
            <button onClick={props.fonctionX05}>x0.5</button>
            <button onClick={props.fonctionX025}>x0.25</button>
        </>
    );
}

export default BoutonPbr;