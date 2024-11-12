import React from 'react';
import {Card} from "react-bootstrap"
import './FeatureCard.css'

function FeatureCard(props) {
    return (
        <Card className="mb-4">
            <Card.Body>
                <Card.Title className='card--title'>{props.title}</Card.Title>
                <Card.Text className='card--text'>{props.text}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default FeatureCard