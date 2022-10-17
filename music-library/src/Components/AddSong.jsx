import React, {useState} from 'react';
import axios from 'axios';

const AddSong = () => {

    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [date, setDate] = useState("");
    const [genre, setGenre] = useState("");

    const handleSubmit = async(event) => {
        
        //make post request to add new song
        event.preventDefault();
        let newSongObject = {
            title: title,
            artist: artist,
            album: album,
            release_date: date,
            genre: genre,
            likes: 0,
          }; 

        console.log(newSongObject);
        try {
            await axios.post('http://127.0.0.1:8000/music/', newSongObject).then(window.location.reload());
                
        } catch (error) {
            console.log(error)
        }
    }


    return ( 
        <div class="add-song-form">
            <form onSubmit={event =>{handleSubmit(event)}}>
                <div class="labeled-field">
                    <label>Title
                        <input type="text" autoComplete="on" value={title} onChange={(event) => setTitle(event.target.value)}/>   
                    </label>
                </div>
                <div class="labeled-field">
                    <label>Artist
                        <input type="text" autoComplete="on" value={artist} onChange={(event) => setArtist(event.target.value)}/>   
                    </label>
                </div>
                <div class="labeled-field">
                    <label>Album
                        <input type="text" autoComplete="on" value={album} onChange={(event) => setAlbum(event.target.value)}/>   
                    </label>
                </div>
                <div class="labeled-field">
                    <label>Date
                        <input type="text" autoComplete="on" value={date} onChange={(event) => setDate(event.target.value)}/>   
                    </label>
                </div>
                <div class="labeled-field">
                    <label>Genre
                        <input type="text" autoComplete="on" value={genre} onChange={(event) => setGenre(event.target.value)}/>   
                    </label>
                </div>
                <div class="button">
                    <input type="submit"/>
                </div>
                
            </form>
        </div>
     );
}
 
export default AddSong;