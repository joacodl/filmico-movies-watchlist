import React, { useState } from 'react'

const Search = () => {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const searchHandler = async (e) => {
        e.preventDefault();

        setQuery(e.target.value);

        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${query}`);
        
        const data = res.json();
        !data.errors ? setResults(data.results) : setResults([]);
        
    }

    console.log(results);


  return (
    <form>
        <input type="text" placeholder='Search for a movie...' value={query} onChange={searchHandler} />
    </form>
  )
}

export default Search