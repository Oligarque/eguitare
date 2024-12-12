// 'data/songsData.jsx'
// dataBase des sons

// Modélisation des morceaux dans une variable songs

const songs = [
    {
        id: 1,
        title: 'Lagrima',
        artist: 'Francisco Tárrega',
        interpret: 'Patrick Sida',
        difficulty: 1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, placeat asperiores? Sequi esse eum corrupti voluptatem laboriosam, ipsum quaerat animi corporis itaque voluptate perferendis quia atque vel ratione placeat? Provident?",

        videoPrincipale: "/media/lagrima/P_dessus_Lagrima.mp4",
        videoList: [
            '/media/lagrima/P_Face_Lagrima.mp4',
            '/media/lagrima/P_mGauche_Penché_Lagrima.mp4',
            '/media/lagrima/P_mGauche_Face_Lagrima.mp4',
            '/media/lagrima/P_mDroite_Lagrima.mp4',
            '/media/lagrima/P_Long_ manche_Lagrima.mp4'
        ],
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
        title: 'Titre du morceau',
        artist: 'Artiste original',
        interpret: 'Interprête du morceau, Professeur',
        difficulty: 1, // Difficulté du morceau
        description: " Description du morceau. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, placeat asperiores? Sequi esse eum corrupti voluptatem laboriosam, ipsum quaerat animi corporis itaque voluptate perferendis quia atque vel ratione placeat? Provident?",

        videoPrincipale: "Lien vers la vidéo principale ",
        videoList: [
            'Chemin d\'une autre vidéo',
            'Encore une vidéo'            
        ],
        audio: 'Chemin vers le fichier audio',
        videoAide: [ // Les vidéos d'aide
            {
                id: 1,  // Un id
                titre: 'aide accord particulier', // Un titre de vidéo d'aide
                path: '/media/lagrima/Video_Explications.mp4', // Chemin de la vidéo d'aide
                debutVideo: 27, // Timing auquel la vidéo est disponible
                finVideo: 38    // Fin de ce timing
            }
        ]
    },
    // Ajoute plus de chansons ici
];

export default songs;