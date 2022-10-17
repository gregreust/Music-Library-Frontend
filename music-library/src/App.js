import React from 'react';
import SongList from './Components/SongList'; 
import AddSong from './Components/AddSong';


function App() {

  return (
    <div>
      <nav>
        <h1>Music Library</h1>
      </nav> 
      <div class="addsong">
        <h3>Add New Song</h3>
        <AddSong/>
      </div>
      <div class="song-list">
        <h3>Songs</h3>
        <SongList/> 
      </div>
      
    </div>
  );
}

export default App;
