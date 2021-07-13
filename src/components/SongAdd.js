import React from 'react'

function SongAdd(props) {
    return (
        <form className="song-add" onSubmit={props.addSong}>
            <input type='text' id='title-input' placeholder='Title'></input>
            <input type='text' id='artist-input' placeholder='Artist'></input>
            <select name='genre' id='genre-input'>
                <option disabled selected value>Select Genre</option>
                <option value='Country'>Country</option>
                <option value='Rock'>Rock</option>
                <option value='House'>House</option>
                <option value='Classical'>Classical</option>
                <option value='Pop'>Pop</option>
                <option value='Other'>Other</option>
            </select>
            <select name='rating' id='rating-input'>
                <option disabled selected value>Select Rating</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
            <button>Add song</button>
        </form>
    )
}

export default SongAdd