// 'data/songsData.jsx'
// dataBase des sons
// TODO ajouter la difficulté, la description
//Lier les liens dans la dataBase ou bien garder le meme format pour chaque fichier

const songs = [
    {
        id: 1,
        title: 'Lagrima',
        artist: 'Francisco Tárrega',
        interpret: '',
        difficulty: 1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, placeat asperiores? Sequi esse eum corrupti voluptatem laboriosam, ipsum quaerat animi corporis itaque voluptate perferendis quia atque vel ratione placeat? Provident?",
        
        P_dessus: '/media/lagrima/P_dessus_Lagrima.mp4',
        P_Face: '/media/lagrima/P_Face_Lagrima.mp4',
        P_mGauche_Penche: '/media/lagrima/P_mGauche_Penché_Lagrima.mp4',
        P_mGauche_Face: '/media/lagrima/P_mGauche_Face_Lagrima.mp4',
        P_mDroite: '/media/lagrima/P_mDroite_Lagrima.mp4',
        P_Long_manche: '/media/lagrima/P_Long_ manche_Lagrima.mp4',
        audio: '/media/lagrima/Audio_Lagrima.mp3',
        videoAide: [
            {
                id: 1,
                titre: 'aide accord particulier',
                path: '/media/lagrima/Video_Explications.mp4',
                debutVideo: 27,
                finVideo: 38
            }
        ]
    },
    {
        id: 2,
        title: 'SongTitle',
        artist: 'SongArtist',
        interpret: 'SongInterpret',
        difficulty: 1 ,
        description:"",
        
        P_dessus: 'pathToSong',
        P_Face: 'pathToSong',
        P_mGauche_Penche: 'pathToSong',
        P_mGauche_Face: 'pathToSong',
        P_mDroite: 'pathToSong',
        P_Long_manche: 'pathToSong',
        audio: 'pathToSong.mp3',
        videoAide: [
            {
                id: 1,
                titre: 'aide accord particulier',
                path: 'pathToSong',
                debutVideo: 27,
                finVideo: 38
            }
        ]
    },
    // Ajoute plus de chansons ici
];

export default songs;
