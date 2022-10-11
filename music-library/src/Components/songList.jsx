import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SongRow from './SongRow'; 

let GET_ALL_SONGS_URL = 'http://127.0.0.1:8000/music/';


//ADD SEARCHFOR TO PROPS
const SongList = ({sortBy}) => {

    const [songs, setSongs] = useState([""]);

    useEffect(() => {
    
        getAllSongs();
    
    },[]);

    async function getAllSongs(){
        const response = await axios.get(GET_ALL_SONGS_URL);
        setSongs(response.data);
    }

    function resetSongs(sortBy){

        // if(searchFor){
        //     let theObj = { foo: searchFor };
        //     let hasVal = Object.values(theObj).includes(searchFor);
        // }

        if(sortBy === "artist"){
            let newSongList = songs.sort(((a, b) => (a.artist > b.artist) ? 1 : -1));
            console.log(newSongList);
            setSongs(newSongList);
           
        } else if (sortBy === "album"){
            let newSongList = songs.sort(((a, b) => (a.album > b.album) ? 1 : -1));
            console.log(newSongList);
            setSongs(newSongList);
        
        } else if (sortBy === "genre"){
            let newSongList = songs.sort(((a, b) => (a.genre > b.genre) ? 1 : -1));
            console.log(newSongList);
            setSongs(newSongList);
        
        } else if (sortBy === "release-date"){
            let newSongList = songs.sort(((a, b) => (a.release_date > b.release_date) ? 1 : -1));
            console.log(newSongList);
            setSongs(newSongList);
        } else if (sortBy === "title"){
            let newSongList = songs.sort(((a, b) => (a.title > b.title) ? 1 : -1));
            console.log(newSongList);
            setSongs(newSongList);
        } else {
        }
        return songs;
    }
    return ( 
        <ul>
            {resetSongs(sortBy).map(song => <li> <SongRow song = {song} getAllSongs = {getAllSongs}/> </li>)}     
        </ul>
     );
}


export default SongList;


