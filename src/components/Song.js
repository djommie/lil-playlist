import React from 'react'

function Song(props) {
    return (
        <tr className="song-body">
            <th className="song-row__item">{props.title}</th>
            <th className="song-row__item">{props.artist}</th>
            <th className="song-row__item">{props.genre}</th>
            <th className="song-row__item">{props.rating}</th>
            <th className="song-row__item"><button onClick={() => props.deleteSong(props.title)}>Del.</button></th>
        </tr>
    )
}

export default Song



