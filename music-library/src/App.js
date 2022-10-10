import React, {useState} from 'react';
import SongList from './Components/SongList'; 
import Search from './Components/Search';


function App() {

  const [searchFor, setSearchFor] = useState("");
  const [sortBy, setSortBy] = useState("");

  function searchingSongs(searchFor){
    setSearchFor(searchFor);
  }

  function reSortSongs(sortBy){
    setSortBy(sortBy); 
  }

  return (
    <div>
      <nav>
        <h1>Music Library</h1>
      </nav>
      <Search searchingSongs={searchingSongs} reSortSongs={reSortSongs}/>  
      <SongList searchFor={searchFor} sortBy={sortBy}/> 
      <AddSong/>
    </div>
  );
}

export default App;
