import React, { useState, useContext } from "react";
import MoviesContext from "../../Store/moviesContext";

// import Search from "../Search";
import Movies from "./Movies";

const AddMovie = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const moviesCtx = useContext(MoviesContext)
  const filterExistingMovies = (data) => {
    // Filtro para que se muestren todos los items cuyo id no se encuentre en la watchlist
    const filteredData = data.filter(movie => !moviesCtx.movies.watchlist.some(item => item.id === movie.id));
    setResults(filteredData)
  }
 
  const searchHandler = async (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${query}`);

    const data = await res.json();
    !data.errors ? filterExistingMovies(data.results) : setResults([]);
  };

  

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={searchHandler}
        />
      </form>
      <Movies movies={results} />
    </div>
  );
};

export default AddMovie;
