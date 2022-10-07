import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SongRow from './SongRow'; 

let GET_ALL_SONGS_URL = 'http://127.0.0.1:8000/music/';

const SongList = ({sortBy}) => {

    const [songs, setSongs] = useState(["Loading"]);

    useEffect(() => {
        if(sortBy === ""){
            getAllSongs();
        } else {
            console.log(sortBy);
            //NEED CODE TO SORT ARRAY ALBHABETICALLY AND NUMERICALLY BY SORTBY PARAM
            let newSongList = songs.sort((a, b) => a.sortBy.localeCompare(b.sortBy))
                console.log(newSongList);
            setSongs(newSongList);
        }
        
    });

    async function getAllSongs(){
        const response = await axios.get(GET_ALL_SONGS_URL);
        setSongs(response.data);
    }


    return ( 
        <ul>
            {songs.map(song => <li> <SongRow song = {song} getAllSongs = {getAllSongs}/> </li>)}       
        </ul>
     );
}
 
export default SongList;

