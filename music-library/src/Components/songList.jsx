import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SongRow from './SongRow'; 

let GET_ALL_SONGS_URL = 'http://127.0.0.1:8000/music/';


//ADD SEARCHFOR TO PROPS
const SongList = () => {

    const [songs, setSongs] = useState([]);
    const [sortBy, setSortBy] = useState("");
    const [searchFor, setSearchFor] = useState("");

    useEffect(() => {
        getAllSongs();
      }, []);

    async function getAllSongs(){
        const response = await axios.get(GET_ALL_SONGS_URL);
        setSongs(response.data);
    }

    function handleSubmit(event){
        event.preventDefault();
        resetSongs(sortBy, searchFor);
    }

    function resetSongs(sortBy, searchFor){

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
        } 
    }

    return ( 
        //Need a search bar that will look for properties containing the input string 
        //Need a filter by title, artist, release date, album, etc
        <div className="song-list">
            <div className="search-form">
                <form onSubmit={handleSubmit}>
                    <label>Search
                        {/*value links to useState above, onChange enables a new value to be set*/}
                        <input type="text" autoComplete="on" 
                        value={searchFor} onChange={(event) => setSearchFor(event.target.value)}/>   
                    </label>
                    <label>Sort By
                        <select name="sort-param" value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                            <option value=""></option>
                            <option value="artist">Artist</option>
                            <option value="album">Album</option>
                            <option value="genre">Genre</option>
                            <option value="release-date">Date</option>
                            <option value="title">Title</option>
                        </select>
                    </label>
                    <input type="submit"/>
                </form>
            </div>
            <ul>
                {songs.map(song => <li> <SongRow song = {song} getAllSongs = {getAllSongs}/> </li>)}     
            </ul>
        </div>
     );
}


export default SongList;


