// '/components/Footer.jsx'
// Footer de l'app

import React, { useState } from 'react';
import './Footer.css'

function Footer() {
    return(
        <footer className='footer'>
            <h3 className='credits'>En collaboration avec l'Université de la Réunion</h3>
            <h4 className='contributeurs'>Un projet de Nathan RIVIERE et Kilian BEURARD</h4>
        </footer>
    )
}

export default Footer