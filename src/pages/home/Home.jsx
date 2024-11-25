// 'pages/home/Home.jsx'
// Page d'acceuil


import React from 'react';
import { Container, Row, Col, Button, } from 'react-bootstrap';
import './Home.css';
import FeatureCard from './components/FeatureCard';
import Separator from '../../components/Separator';
import YoutubeEmbed from './components/YoutubeEmbed';


function Home() {
    return (

        /*  on  utilise react-bootstrap pour faciliter la mise en page*/
        <Container className="acceuil mt-5"> 
            <Row className="text-center">
                <Col>
                    <h1 className="display-4 acceuil--title">Bienvenue sur Eguitare</h1>
                    <p className="lead">
                        Apprenez la guitare facilement grâce à des vidéos interactives et des morceaux  adaptés à tous les niveaux.
                    </p>
                    {/*<Button href="/signup" variant="primary" size="lg" className="mt-3" disabled>
                        Commencez maintenant
                    </Button>*/}
                </Col>
            </Row>
            <Separator/>
            <Row className="text-center">
                <Col md={4} >
                    <h2 className='section-title'>Vidéo de présentation</h2>
                    <p>Vidéo de présentation du projet eguitare</p>
                </Col>
                <Col md={8} ><YoutubeEmbed videoId="y15YEs5q-R4?si=NzTiwAw-8Cz6x5Ir" /></Col>
            </Row>
            <Separator/>
            <Row className="mt-5 acceuil--cards"  >
                <Col md={4}>
                    <FeatureCard
                        title="Vidéos interactives"
                        text="Apprenez la guitare à votre rythme avec des vidéos interactives qui vous guident étape par étape."
                    />
                </Col>
                <Col md={4}>
                    <FeatureCard
                        title="Vos morceaux préférés"
                        text="Apprenez vos morceaux préférés pour rester motivé tout au long de votre apprentissage."
                    />
                </Col>
                <Col md={4}>
                    <FeatureCard
                        title="Suivi de progression"
                        text="Suivez vos progrès et atteignez vos objectifs grâce à un suivi personnalisé et des statistiques."
                    />
                </Col>
            </Row>
            <Separator/>
            <Row className="mt-5 text-center">
                <Col md={6} className='mx-auto'>
                    <h2 className="mb-4 section-title">Pourquoi choisir Eguitare ?</h2>
                    <p>
                        Que vous soyez débutant ou guitariste confirmé, Eguitare vous offre une méthode unique pour progresser rapidement
                        et efficacement. Avec nos vidéos interactives, jouer de la guitare devient
                        accessible et motivant.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}


export default Home;
