import songs from "../../data/songsData";
import './SongList.css'
import { Link } from 'react-router-dom';

function SongList() {

    const morceaux = songs.map((song) => (

        <tr key={song.id}>

            <th scope="row"></th>

            <td><Link to={`/learning/${song.id}`}>{song.title}</Link></td>
            <td>{song.artist}</td>
            <td>{song.interpret}</td>
            <td>{song.difficulty}</td>
        </tr >


    ));

    return (
        <div className='container songList--container'>
            <h1 className="songList--title">Liste des différents morceaux : </h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Titre</th>
                        <th scope="col">Artiste</th>
                        <th scope="col">Interprête</th>
                        <th scope="col">Difficulté</th>
                    </tr>
                </thead>
                <tbody>
                    {morceaux}
                </tbody>

            </table>
        </div>
    )




}

export default SongList;
