// 'pages/home/Home.jsx'
// Page d'acceuil


import React from 'react';
import './Home.css';
import FeatureCard from './components/FeatureCard';
import Separator from '../../components/Separator';
import YoutubeEmbed from './components/YoutubeEmbed';


function Home() {
    return (

        /*  on  utilise react-bootstrap pour faciliter la mise en page*/
        <div className="container acceuil mt-5">

            <div className="row text-center">
                <div className="col">
                    <h1 className="display-4 acceuil--titre">Bienvenue sur Eguitare</h1>
                    <p className="lead">
                        Apprenez la guitare facilement grâce à des vidéos interactives et des morceaux adaptés à tous les niveaux.
                    </p>
                    {/*<!-- 
            <a href="/signup" className="btn btn-primary btn-lg mt-3 disabled" role="button">
                Commencez maintenant
            </a>
            -->*/}
                </div>
            </div>

            <Separator />

            <div className="row text-center">
                <div className="col-md-4">
                    <h2>Vidéo de présentation</h2>
                    <p>Vidéo de présentation du projet eguitare</p>
                </div>
                <div className="col-md-8">
                    <YoutubeEmbed videoId="y15YEs5q-R4?si=NzTiwAw-8Cz6x5Ir" />
                </div>
            </div>

            <Separator />

            <div className="row mt-5">
                <div className="col-md-4">
                    <FeatureCard
                        title="Vidéos interactives"
                        text="Apprenez la guitare à votre rythme avec des vidéos interactives qui vous guident étape par étape."
                    />

                </div>
                <div className="col-md-4">
                    <FeatureCard
                        title="Vos morceaux préférés"
                        text="Apprenez vos morceaux préférés pour rester motivé tout au long de votre apprentissage."
                    />

                </div>
                <div className="col-md-4">
                    <FeatureCard
                        title="Suivi de progression"
                        text="Suivez vos progrès et atteignez vos objectifs grâce à un suivi personnalisé."
                    />

                </div>
            </div>

            <Separator />


            <div className="row mt-5 text-center">
                <div className="col-md-6 mx-auto">
                    <h2 className="mb-4">Pourquoi choisir Eguitare ?</h2>
                    <p>
                        Que vous soyez débutant ou guitariste confirmé, Eguitare vous offre une méthode unique pour progresser rapidement
                        et efficacement. Avec nos vidéos interactives, jouer de la guitare devient accessible et motivant.
                    </p>
                </div>
            </div>
        </div>
    );
}


export default Home;
