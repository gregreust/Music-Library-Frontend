import React from 'react';
import SongList from './Components/SongList'; 
import Search from './Components/Search';


function App() {
  return (
    <div>
      <nav>
        <h1>Music Library</h1>
      </nav>
      <Search/>  
      <SongList/> 
      {/* <AddSong/> */}
    </div>
  );
}

export default App;
