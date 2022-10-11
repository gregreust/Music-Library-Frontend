import React, {useState} from 'react';
import axios from 'axios';

const AddSong = ({song}, {editMode}) => {

    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [date, setDate] = useState("");
    const [genre, setGenre] = useState("");

    async function handleSubmit(event){
        
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

        //make a put request if editMode passed from Edit Modal
        if (editMode){
            await axios.put(`http://127.0.0.1:8000/music/${song.id}/`, newSongObject)
        } else {
            console.log(newSongObject);
            await axios.post('http://127.0.0.1:8000/music/', newSongObject);
        }
    }

    return ( 
        <div class="add-song-form">
            <form onSubmit={handleSubmit}>
                <label>Title
                    <input type="text" autoComplete="on" value={title} onChange={(event) => setTitle(event.target.value)}/>   
                </label>
                <label>Artist
                    <input type="text" autoComplete="on" value={artist} onChange={(event) => setArtist(event.target.value)}/>   
                </label>
                <label>Album
                    <input type="text" autoComplete="on" value={album} onChange={(event) => setAlbum(event.target.value)}/>   
                </label>
                <label>Date
                    <input type="text" autoComplete="on" value={date} onChange={(event) => setDate(event.target.value)}/>   
                </label>
                <label>Genre
                    <input type="text" autoComplete="on" value={genre} onChange={(event) => setGenre(event.target.value)}/>   
                </label>
                <input type="submit"/>
            </form>
        </div>
     );
}
 
export default AddSong;