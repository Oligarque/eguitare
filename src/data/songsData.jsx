// 'data/songsData.jsx'
// dataBase des sons
// TODO ajouter la difficulté, la description
//Lier les liens dans la dataBase ou bien garder le meme format pour chaque fichier

const songs = [
    {
        id: 1,
        title: 'Lagrima',
        path: 'media/lagrima/',  //chemin à partir de src
        
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
                path: '/media/lagrima/P_mDroite_Lagrima.mp4',
                debutVideo: 27
            }
        ]
    },
    {
        id: 2,
        title: 'Song2',
        path: '/media/song2'
    },
    // Ajoute plus de chansons ici
];

export default songs;
