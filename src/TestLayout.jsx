
import React from 'react';
import './TestLayout.css'
import Header from './components/Header';
import Footer from './components/Footer';

function TestLayout() {
    return (

        <div className='learning--container container-fluid'>
            <div className='row learning--videosZone justify-content-center' >

                <div className='col col-md-10' >
                    <div className='container-fluid'>
                        <div className='row'>
                            <h1>Titre de la chanson</h1>
                        </div>
                        <div className='row'>
                            <div className='learning--bigVideo'>
                                <h1>Grosse Vidéooooooooooooooooooooo</h1>
                                <div className='learning--overlay'>
                                    <p>overlay</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='learning--buttons'>
                                <h2>Des boutons</h2>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='col col-md-2'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='learning--smallVideo'>
                                <h3>Vidéo angle1</h3>
                            </div>
                            <div className='learning--smallVideo'>
                                <h3>Vidéo angle2</h3>
                            </div>
                            <div className='learning--smallVideo'>
                                <h3>Vidéo angle3</h3>
                            </div>
                            <div className='learning--smallVideo'>
                                <h3>Vidéo angle4</h3>
                            </div>
                            <div className='learning--smallVideo'>
                                <h3>Vidéo angle5</h3>
                            </div>
                            <div className='learning--smallVideo'>
                                <h3>Vidéo angle6</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='row'>
                <h2>Description</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt quam fugit quibusdam accusantium culpa illum soluta sequi, et excepturi officia velit asperiores ipsa doloribus veniam, itaque fuga laboriosam harum.</p>
            </div>

        </div>

    )
}

export default TestLayout