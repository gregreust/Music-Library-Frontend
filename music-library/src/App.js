import React, {useState} from 'react';
import SongList from './Components/SongList'; 
import Search from './Components/Search';


function App() {

  const [sortBy, setSortBy] = useState("");

  function reSortSongs(sortBy){
    setSortBy(sortBy); 
  }

  return (
    <div>
      <nav>
        <h1>Music Library</h1>
      </nav>
      <Search reSortSongs={reSortSongs}/>  
      <SongList sortBy={sortBy}/> 
      {/* <AddSong/> */}
    </div>
  );
}

export default App;
