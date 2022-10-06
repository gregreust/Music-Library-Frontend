import React, {useState} from 'react';
// import axios from 'axios';

const Search = () => {
    
    // const [searchParam, setSearchParam] = useState('');

    // function handleSubmit() {
    //    console.log(searchParam)
    // }

    return ( 
        //Need a search bar that will look for properties containing the input string 
        //Need a filter by title, artist, release date, album, etc
        <div className="search-form">
            <form>
                <label>Search
                    {/*value links to useState above, onChange enables a new value to be set*/}
                    <input type="text" autoComplete="on"/>   
                </label>
                <label>Sort By
                    <select name="sort-param">
                        <option value="artist">Artist</option>
                        <option value="album">Album</option>
                        <option value="genre">Genre</option>
                        <option value="release-date">Date</option>
                        <option value="title">Title</option>
                    </select>
                </label>
            </form>
        </div>

     );
}
 
export default Search;