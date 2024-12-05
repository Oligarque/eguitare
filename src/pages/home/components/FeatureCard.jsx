import React from 'react';
import './FeatureCard.css'

function FeatureCard(props) {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title card--title">{props.title}</h5>
                <p className="card-text card--text">{props.text}</p>
            </div>
        </div>
    );
}

export default FeatureCard