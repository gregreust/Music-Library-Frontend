import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SongRow = ({song, getAllSongs}) => {

    // async function getAllSongs(){
    //     const response = await axios.get(GET_ALL_SONGS_URL);
    //     setSongs(response.data);
    // }

    const handleLike = async () => {
        let newSong = {...song, likes:song.likes+1};
        await axios.put(`http://127.0.0.1:8000/music/${song.id}/`, newSong).then(()=>{getAllSongs()});
    }

    return ( 
        <div class="row">
            <div>{song.title}</div>
            <div>{song.artist}</div>
            <div>{song.album}</div>
            <div>{song.release_date}</div>
            <div>{song.genre}</div>
            <div>{song.likes}</div>
            <button onClick={handleLike}>Like</button>
            <button>Edit</button>
        </div>
     );
}
 
export default SongRow;