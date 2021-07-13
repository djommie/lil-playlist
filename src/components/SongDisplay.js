import React from 'react'
import Song from './Song'

function SongDisplay(props) {
    const songList = props.songs.map((song, index) => {
        return (
            <Song
                key={index}
                title={song.title}
                artist={song.artist}
                genre={song.genre}
                rating={song.rating}
                deleteSong={props.deleteSong}
            />
        )
    })
    return (
        <div>
            <table style={{ width: "100%" }}>
                <tr className="song-header">
                    <th className="song-row__item">Song</th>
                    <th className="song-row__item">Artist</th>
                    <th className="song-row__item">Genre</th>
                    <th className="song-row__item">Rating</th>
                </tr>
                {songList}
            </table>
        </div>
    )
}

export default SongDisplay