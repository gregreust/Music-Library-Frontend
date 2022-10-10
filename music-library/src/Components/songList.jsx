import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SongRow from './SongRow'; 

let GET_ALL_SONGS_URL = 'http://127.0.0.1:8000/music/';

const SongList = ({searchFor}, {sortBy}) => {

    const [songs, setSongs] = useState([""]);

    useEffect(() => {
        if(sortBy === "artist"){
            let newSongList = songs.sort((a, b) => a.artist.localeCompare(b.artist));
            setSongs(newSongList);
            console.log(newSongList);
        } else if (sortBy === "album"){
            let newSongList = songs.sort((a, b) => a.album.localeCompare(b.album));
            setSongs(newSongList);
            console.log(newSongList);
        } else if (sortBy === "genre"){
            let newSongList = songs.sort((a,b) => (a.genre > b.genre) ? 1 : ((b.genre > a.genre) ? -1 : 0));
            setSongs(newSongList);
            console.log(newSongList);
        } else if (sortBy === "release-date"){
            let newSongList = songs.sort((a,b) => a.release_date - b.release_date);
            setSongs(newSongList);
        } else if (sortBy === "title"){
            let newSongList = songs.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
            setSongs(newSongList);
        } else {
            getAllSongs();
        }
        if(searchFor){
            let theObj = { foo: searchFor };
            let hasVal = Object.values(theObj).includes(searchFor);
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

