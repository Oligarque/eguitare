// 'pages/learning/Learning.jsx'
// Page de l'application pour voir un morceau


import { React, useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import songs from '../../data/songsData';




import Video from './components/Video.jsx';
import Audio from './components/Audio.jsx';
import SliderProgressBar from './components/SliderProgressBar.jsx';
import SliderVolume from './components/SliderVolume.jsx';
import BoutonControles from './components/BoutonControles.jsx';
import BoutonBoucle from './components/BoutonBoucle.jsx';
import VideoExplication from './components/VideoExplication.jsx';
import BoutonPlay from './components/BoutonControle/BoutonPlay.jsx';

import './Learning.css'


function Learning() {
  const { songId } = useParams();
  const song = songs.find(song => song.id === parseInt(songId));
  if (!song) {
    return <p>Leçon non trouvée.</p>;
  }
  const [playing, setPlaying] = useState(false)
  const [playingVideoAide, setPlayingVideoAide] = useState(false);
  const [pbrate, setPlaybackRate] = useState(1);
  const [time, setTime] = useState(0);
  const [volume, setVolume] = useState(0.15);
  const [bornesBoucle, setBornesBoucle] = useState([0, 10]);
  const [isLooping, setIsLooping] = useState(false);
  const [bornesAide, setBornesAide] = useState([20, 38]);
  const [showBoutonAide, setShowBoutonAide] = useState(false);
  const [showVideoAide, setShowVideoAide] = useState(false);
  const [sourceBig, setSourceBig] = useState(song.P_dessus);
  const audioRef = useRef();
  const sliderVolumeRef = useRef();
  const progressBarRef = useRef();
  const videoAideRef = useRef();

  // On peut rajouter autant de ref que de vidéos souhaitées
  const videoBigRef = useRef();
  const video1Ref = useRef();
  const video2Ref = useRef();
  const video3Ref = useRef();
  const video4Ref = useRef();
  const video5Ref = useRef();
  const video6Ref = useRef();
  let videoRefArray = [videoBigRef, video1Ref, video2Ref, video3Ref, video4Ref, video5Ref, video6Ref];

  // Gestion des événements des boutons de controle
  const handlePlay = () => {
    if (!playing) {
      setPlaying(true);
    }
  }

  const handlePause = () => {
    setPlaying(false);
  }

  const handleReset = () => {
    handleSeek(0);
    setPlaybackRate(1);
  }

  // Gestion de l'événement de la barre de progression
  const handleSeek = (progress) => {
    setTime(progress);
    for (let i = 0; i < videoRefArray.length; i++) videoRefArray[i].current.seekTo(progress, "seconds");
    audioRef.current.seekTo(progress, "seconds");
  }

  // Gestion de la boucle de la vidéo
  useEffect(() => {
    videoBigRef.current.seekTo(time, "seconds");

    if (isLooping && bornesBoucle[0] < bornesBoucle[1] && (time > bornesBoucle[1] || time < bornesBoucle[0])) {
      handleSeek(bornesBoucle[0]);
    }

    if (bornesAide[0] <= time && time <= bornesAide[1]) setShowBoutonAide(true);
    else setShowBoutonAide(false);

  }, [isLooping, bornesBoucle, time, bornesAide, handleSeek]);

  const toggleButton = () => {
    setShowVideoAide(!showVideoAide);
    if (!showVideoAide) handlePause();
    else setPlayingVideoAide(false);
  };

  const setVideoBig = (song) => {
    setSourceBig(song);
    videoAideRef.current.playing = false;
  }




  const affichage = (
    <div className='learning--container container App'>
      <div className='row learning--videosZone justify-content-center' >

        <div className='col col-12 col-md-8' >
          <div className='container'>
            <div className='row'>
              <h1 className='songTitle'>{song.title}</h1>
            </div>
            <div className='row'>
              <div className='learning--bigVideo' >
                <Video
                  ref={videoBigRef}
                  pbrate={pbrate}
                  playing={playing}
                  source={sourceBig}
                  value={time}
                />
                <div className='learning--overlay' 
                style={{display : showVideoAide ? "" : "none"}} >
                <VideoExplication
                    ref={videoAideRef}
                    playing={playingVideoAide}
                    source={song.videoAide[0].path}
                    size={"100%"}
                  />
                </div>
              </div>
            </div>
            <div className='row'>
              <SliderProgressBar
                ref={progressBarRef}
                video={video1Ref.current}
                timeText={Math.floor(time)}
                value={time}
                onChange={event => { handleSeek(event.target.valueAsNumber) }}
              />
              <br/>
              <button style={{display : showBoutonAide ? '' : "none"}} onClick={event => {toggleButton()}}>Vidéo d'aide pour ce passage</button>
            </div>
            <div className='row'>
              <div className='learning--buttons'>
                <BoutonControles
                  fonctionPlay={() => { handlePlay() }}
                  fonctionPause={() => { handlePause() }}
                  fonctionReset={() => { handleReset() }}
                  fonctionX1={() => { setPlaybackRate(1) }}
                  fonctionX05={() => { setPlaybackRate(0.5) }}
                  fonctionX025={() => { setPlaybackRate(0.25) }}
                />
                
                <SliderVolume
                  ref={sliderVolumeRef}
                  volume={volume}
                  onClick={event => setVolume(event.target.valueAsNumber)}
                />
                <br/>
                <BoutonBoucle
                  onClickDebutBoucle={event => setIsLooping(event.target.checked)}
                  onChangeDebutBoucle={event => {
                    if (event.target.value !== "") {
                      setBornesBoucle([parseInt(event.target.value), bornesBoucle[1]]);
                    } else {
                      setBornesBoucle([0, bornesBoucle[1]]);
                    }
                  }
                  }
                  onChangeFinBoucle={event => {
                    if (event.target.value !== "") {
                      setBornesBoucle([bornesBoucle[0], parseInt(event.target.value)]);
                    } else {
                      setBornesBoucle([bornesBoucle[0], 0])
                    }
                  }
                  }
                />
              </div>
            </div>
          </div>

        </div>
        <div className='col col-12 col-md-4' >
          <div className='container smallVideo--container'>
            <div className='row'>
              <div className='col col-2 col-md-12 learning--smallVideo' onClick={event => {setVideoBig(song.P_dessus)}}>
                <Video
                  ref={video1Ref}
                  pbrate={pbrate}
                  playing={playing}
                  source={song.P_dessus}
                  progressInterval={250}
                  onProgress={event => setTime(event.playedSeconds)}
                />
              </div>
              <div className='col col-2 col-md-12 learning--smallVideo' onClick={event => {setVideoBig(song.P_Long_manche)}}>
                <Video
                  ref={video2Ref}
                  pbrate={pbrate}
                  playing={playing}
                  source={song.P_Long_manche}
                />
              </div>
              <div className='col col-2 col-md-12 learning--smallVideo' onClick={event => {setVideoBig(song.P_mGauche_Penche)}}>
                <Video
                  ref={video3Ref}
                  pbrate={pbrate}
                  playing={playing}
                  source={song.P_mGauche_Penche}
                />
              </div>
              <div className='col col-2 col-md-12 learning--smallVideo' onClick={event => {setVideoBig(song.P_mGauche_Face)}}>
                <Video
                  ref={video4Ref}
                  pbrate={pbrate}
                  playing={playing}
                  source={song.P_mGauche_Face}
                />
              </div>
              <div className='col col-2 col-md-12 learning--smallVideo' onClick={event => {setVideoBig(song.P_Face)}}>
                <Video
                  ref={video5Ref}
                  pbrate={pbrate}
                  playing={playing}
                  source={song.P_Face}
                />
              </div>
              <div className='col col-2 col-md-12 learning--smallVideo' onClick={event => {setVideoBig(song.P_mDroite)}}>
                <Video
                  ref={video6Ref}
                  pbrate={pbrate}
                  playing={playing}
                  source={song.P_mDroite}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='row'>
        <h2>Description</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt quam fugit quibusdam accusantium culpa illum soluta sequi, et excepturi officia velit asperiores ipsa doloribus veniam, itaque fuga laboriosam harum.</p>
      </div>
      <Audio
        ref={audioRef}
        pbrate={pbrate}
        playing={playing}
        source={song.audio}
        volume={volume}
      />

    </div>);
  return affichage

}

export default Learning;
