import React, {useState, useEffect} from 'react';

const SongRow = (song) => {
    return ( 
        <div class="row">
            <div>{song.title}</div>
            <div>{song.artist}</div>
            <div>{song.album}</div>
            <div>{song.release_date}</div>
            <div>{song.genre}</div>
            <div>{song.likes}</div>
            <button>Like</button>
            <button>Edit</button>
        </div>
     );
}
 
export default SongRow;