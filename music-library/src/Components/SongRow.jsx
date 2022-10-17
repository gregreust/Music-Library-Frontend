import React, {useState} from 'react';
import axios from 'axios';
import { EditModal } from './EditModal';

const SongRow = ({song, getAllSongs}) => {

    const handleLike = async () => {
        let newSong = {...song, likes:song.likes+1};
        //this works, but I don't like that it removes the sortBy and searchFor when liking a song. How to fix????
        await axios.put(`http://127.0.0.1:8000/music/${song.id}/`, newSong).then(()=>{getAllSongs()});
    }

    const [showModal, setShowModal] = useState(false);
    

    const openEditModal = () => {
        setShowModal(true);
      };

    return ( 
        <div className="song-row">
            <div>{song.title}</div>
            <div>{song.artist}</div>
            <div>{song.album}</div>
            <div>{song.release_date}</div>
            <div>{song.genre}</div>
            <div>Likes: {song.likes}</div>
            <button onClick={handleLike}>Like</button>
            <button onClick={openEditModal}>Edit</button>
            {showModal ? <EditModal setShowModal={setShowModal} song={song}/> : null}
        </div>
     );
}
 
export default SongRow;