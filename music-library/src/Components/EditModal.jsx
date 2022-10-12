import React, {useRef} from 'react';
import axios from 'axios';
import AddSong from './AddSong';



export const EditModal = ({setShowModal, song}) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

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
        <AddSong editMode={true} song={song}/>
        <button onClick={deleteSong}>Delete Song from Library</button>
      </div>
    </div>
  );
};