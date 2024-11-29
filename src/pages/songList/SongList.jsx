import songs from "../../data/songsData";
import './SongList.css'

function SongList() {

    const morceaux = songs.map((song) => (
        <tr key={song.id}>
            <th scope="row"></th>
            <td>{song.title}</td>
            <td>{song.desciption}</td>
            <td>{song.difficulty}</td>

        </tr>
    ));

    return (
        <div className='container songList--container'>
            <h1 className="songList--title">Liste des différents morceaux : </h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Titre</th>
                        <th scope="col">Description</th>
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
