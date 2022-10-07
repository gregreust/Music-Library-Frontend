import React, {useState} from 'react';
// import axios from 'axios';

const Search = ({reSortSongs}) => {
    
//    const [searchFor, setSearchFor] = useState('');
   const [sortBy, setSortBy] = useState('');

    // function handleSearch() {
    
    // }

    function handleSubmit(event){
        event.preventDefault();
        //pass sortBy to SongList to re-order displayed songs
        reSortSongs(sortBy);
    }

    return ( 
        //Need a search bar that will look for properties containing the input string 
        //Need a filter by title, artist, release date, album, etc
        <div className="search-form">
            <form onSubmit={handleSubmit}>
                <label>Search
                    {/*value links to useState above, onChange enables a new value to be set*/}
                    <input type="text" autoComplete="on" 
                    // value={searchFor} onChange={(event) => setSearchFor(event.target.value)}
                    />   
                </label>
                <label>Sort By
                    <select name="sort-param" value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                        <option value="artist">Artist</option>
                        <option value="album">Album</option>
                        <option value="genre">Genre</option>
                        <option value="release-date">Date</option>
                        <option value="title">Title</option>
                    </select>
                </label>
                <input type="submit"/>
            </form>
        </div>

     );
}
 
export default Search;