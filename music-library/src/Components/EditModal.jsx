import React, {useRef} from 'react';
import axios from 'axios';
import AddSong from './AddSong';



export const EditModal = ({setShowModal}, {song}) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  //render the modal JSX in the portal div.
  return (
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <h3>Edit</h3>
        <button onClick={() => setShowModal(false)}>X</button>
        {/* using AddSong, but with edit mode */}
        <AddSong editMode="editMode" song={song} />
        <button>Delete Song from Library</button>
      </div>
    </div>
  );
};