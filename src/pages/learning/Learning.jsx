// 'pages/learning/Learning.jsx'
// Page de l'application pour voir un morceau


import { React, useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import songs from '../../data/songsData';




import Video from './components/Video.jsx';
import Audio from './components/Audio.jsx';
import SliderProgressBar from './components/SliderProgressBar.jsx';
import SliderVolume from './components/SliderVolume.jsx';
import BoutonControles from './components/BoutonControle.jsx';
import BoutonBoucle from './components/BoutonBoucle.jsx';


function Learning() {
  const { songId } = useParams();
  const song = songs.find(song => song.id === parseInt(songId));
  if (!song) {
    return <p>Leçon non trouvée.</p>;
  }
  // États pour stocker les chemins des vidéos une fois qu'elles sont chargées
  const [videoPaths, setVideoPaths] = useState({
    P_dessus: null,
    P_Face: null,
    P_mGauche_Penche: null,
    P_mGauche_Face: null,
    P_mDroite: null,
    P_Long_manche: null,
    audio: null
  });

  
  // Charger les vidéos dynamiquement
  useEffect(() => {
    async function loadVideos() {
      const prefix = '../../'
      const loadedVideos = {};
      loadedVideos.P_dessus = (await import(`${prefix}${song.P_dessus}`)).default;
      loadedVideos.P_Face = (await import(`${prefix}${song.P_Face}`)).default;
      loadedVideos.P_mGauche_Penche = (await import(`${prefix}${song.P_mGauche_Penche}`)).default;
      loadedVideos.P_mGauche_Face = (await import(`${prefix}${song.P_mGauche_Face}`)).default;
      loadedVideos.P_mDroite = (await import(`${prefix}${song.P_mDroite}`)).default;
      loadedVideos.P_Long_manche = (await import(`${prefix}${song.P_Long_manche}`)).default;
      loadedVideos.audio = (await import(`${prefix}${song.audio}`)).default;

      setVideoPaths(loadedVideos);
    }

    loadVideos();
  }, [song]);

  
  
  

  const [playing, setPlaying] = useState(false)
  const [pbrate, setPlaybackRate] = useState(1);
  const [time, setTime] = useState(0);
  const [volume, setVolume] = useState(0.15);
  const audioRef = useRef();
  const sliderVolumeRef = useRef();
  const progressBarRef = useRef();
  const boutonBoucleRef = useRef();

  // Un état de si la vidéo boucle (isLooping = true or false)
  const [isLooping, setLooping] = useState(false);
  // Un état sur ce qu'affiche et fait le bouton de boucle
  // (1 : Début de boucle, 2 : Fin de boucle, 3 : Arrêter boucle)
  const [loopButtonState, setLoopButtonState] = useState("Début de boucle");
  let loopButtonText = "Début de boucle";

  // On peut rajouter autant de ref que de vidéos souhaitées
  const video1Ref = useRef();
  const video2Ref = useRef();
  const video3Ref = useRef();
  const video4Ref = useRef();
  const video5Ref = useRef();
  const video6Ref = useRef();
  let videoRefArray = [video1Ref, video2Ref, video3Ref, video4Ref, video5Ref, video6Ref];

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
  // Cette fonction est popo je dois la refaire
  const handleLoop = () => {
    console.log(loopButtonState);

    if (loopButtonState === "Début de boucle") {
      // Quand on clique une fois ça marque la première borne de la boucle
      setLoopButtonState("Fin de boucle");
      console.log(loopButtonState);
      loopButtonText = "Fin de boucle";

    } else if (loopButtonState === "Fin de boucle") {
      // Quand on reclique ça marque la seconde borne de la boucle et ça lance la boucle
      setLoopButtonState("Arrêter la boucle");
      setLooping(true);
      console.log(loopButtonState);
      loopButtonText = "Arrêter la boucle";

    }



  }

  return (
    <div className="learning">
      <BoutonBoucle
        ref={boutonBoucleRef}
        onClick={handleLoop}
        buttonText={loopButtonState}
      />

      <Video
        ref={video1Ref}
        pbrate={pbrate}
        playing={playing}
        source={videoPaths.P_dessus}
        progressInterval={250}
        onProgress={event => setTime(event.playedSeconds)}
      />

      <Video
        ref={video2Ref}
        pbrate={pbrate}
        playing={playing}
        source={videoPaths.P_Long_manche}
      />

      <Video
        ref={video3Ref}
        pbrate={pbrate}
        playing={playing}
        source={videoPaths.P_mGauche_Penche}
      />

      <Video
        ref={video4Ref}
        pbrate={pbrate}
        playing={playing}
        source={videoPaths.P_mGauche_Face}
      />

      <Video
        ref={video5Ref}
        pbrate={pbrate}
        playing={playing}
        source={videoPaths.P_Face}
      />

      <Video
        ref={video6Ref}
        pbrate={pbrate}
        playing={playing}
        source={videoPaths.P_mDroite}
      />
      <br />

      <SliderProgressBar
        ref={progressBarRef}
        video={video1Ref.current}
        timeText={Math.floor(time)}
        value={time}
        onChange={event => { handleSeek(event.target.valueAsNumber) }}
      />

      <br />
      <BoutonControles
        fonctionPlay={() => { handlePlay() }}
        fonctionPause={() => { handlePause() }}
        fonctionReset={() => { handleReset() }}
        fonctionX1={() => { setPlaybackRate(1) }}
        fonctionX05={() => { setPlaybackRate(0.5) }}
        fonctionX025={() => { setPlaybackRate(0.25) }}
      />
      <br />

      <SliderVolume
        ref={sliderVolumeRef}
        volume={volume}
        onClick={event => setVolume(event.target.valueAsNumber)}
      />

      <Audio
        ref={audioRef}
        pbrate={pbrate}
        playing={playing}
        source={videoPaths.audio}
        volume={volume}
      />
    </div>
  )

}

export default Learning;
