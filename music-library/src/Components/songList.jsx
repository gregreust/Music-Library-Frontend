import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SongRow from './SongRow'; 

let GET_ALL_SONGS_URL = 'http://127.0.0.1:8000/music/';

const SongList = () => {

    const [songs, setSongs] = useState(["Loading"]);

    useEffect(() => {
        getAllSongs();
    });

    async function getAllSongs(){
        const response = await axios.get(GET_ALL_SONGS_URL);
        setSongs(response.data);
    }


    return ( 
        <ul>
            {songs.map(song => <li> <SongRow song = {song} getAllSongs = {getAllSongs}/> </li>)}       {/* put SongRow in here later */}
        </ul>
     );
}
 
export default SongList;

