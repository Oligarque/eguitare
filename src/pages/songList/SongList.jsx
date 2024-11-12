import songs from "../../data/songsData";

function SongList() {
    const st = songs.map((song) => (
        <div key={song.id}>
            <h2>{song.title}</h2>
            <p>{song.description}</p>
        </div>
    ));

    return (
        <>
            {st}
        </>
    );
}

export default SongList;
