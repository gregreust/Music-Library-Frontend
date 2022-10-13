import React, {useState, useRef} from 'react';
import axios from 'axios';



export const EditModal = ({setShowModal, song}) => {

    const [title, setTitle] = useState(song.title);
    const [artist, setArtist] = useState(song.artist);
    const [album, setAlbum] = useState(song.album);
    const [date, setDate] = useState(song.release_date);
    const [genre, setGenre] = useState(song.genre);
    const likes = song.likes;

    // close the modal when clicking outside the modal.
    const modalRef = useRef();
    const closeModal = (e) => {
        if (e.target === modalRef.current) {
        setShowModal(false);
        }
    };

    const handleSubmit = async (event) => {
        
        //make put request to update song
        event.preventDefault();
        let newSongObject = {
            title: title,
            artist: artist,
            album: album,
            release_date: date,
            genre: genre,
            likes: likes,
        }; 
        console.log(newSongObject)
        await axios.put(`http://127.0.0.1:8000/music/${song.id}/`, newSongObject).then(window.location.reload());
    } 
    
    const deleteSong = async () => {
        try {
            await axios.delete(`http://127.0.0.1:8000/music/${song.id}/`).then(window.location.reload());
        } catch (error){
            console.log(error);
        }
    }

    //render the modal JSX in the portal div.
    return (
        <div className="container" ref={modalRef} onClick={closeModal}>
            <div className="modal">
                <h3>Edit</h3>
                <button onClick={() => setShowModal(false)}>X</button>
                {/* using AddSong, but with edit mode */}
                <form className="edit-form" onSubmit={(event) => handleSubmit(event)}>
                    <label>Title
                        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>   
                    </label>
                    <label>Artist
                        <input type="text" value={artist} onChange={(event) => setArtist(event.target.value)}/>   
                    </label>
                    <label>Album
                        <input type="text" value={album} onChange={(event) => setAlbum(event.target.value)}/>   
                    </label>
                    <label>Date
                        <input type="text" value={date} onChange={(event) => setDate(event.target.value)}/>   
                    </label>
                    <label>Genre
                        <input type="text" value={genre} onChange={(event) => setGenre(event.target.value)}/>   
                    </label>
                    <input type="submit"/>
                </form>
                <button onClick={() => deleteSong()}>Delete Song from Library</button>
            </div>
        </div>
    );
}