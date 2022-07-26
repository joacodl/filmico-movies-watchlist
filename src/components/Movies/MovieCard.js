import React, { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import MoviesContext from "../../Store/moviesContext";

import Button from "../UI/Button";

import styles from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  const moviesCtx = useContext(MoviesContext);

  const addToWatchlistHandler = () => {
    moviesCtx.addToWatchlist(movie);
  };

  const addToWatchedHandler = () => {
    moviesCtx.addToWatched(movie);
  };

  const removeFromWatchlistHandler = () => {
    moviesCtx.removeFromWatchlist(movie);
  };

  const removeFromWatchedHandler = () => {
    moviesCtx.removeFromWatched(movie);
  };

  const location = useLocation();

  const cardButton = () => {
    // Watchlist page
    if (location.pathname === "/watchlist") {
      return (
        <div className={styles.watchlistCardButton}>
          <Button
            type="button"
            styling="addButton"
            handler={addToWatchedHandler}
          >
            Watched
          </Button>
          <Button
            type="button"
            styling="removeButton"
            handler={removeFromWatchlistHandler}
          >
            Delete
          </Button>
        </div>
      );
      // Watched page
    } else if (location.pathname === "/watched") {
      return (
        <div className={styles.cardButton}>
          <Button
            type="button"
            styling="removeButton"
            handler={removeFromWatchedHandler}
          >
            Delete
          </Button>
        </div>
      );
      // Search and add movie page
    } else if (location.pathname === "/add") {
      return (
        <div className={styles.cardButton}>
          <Button
            type="button"
            styling="addButton"
            handler={addToWatchlistHandler}
          >
            Add to watchlist
          </Button>
        </div>
      );
    }
  };

  return (
    <li className={styles.card}>
      {/* Movie Poster */}
      <div>
        {movie.poster_path !== null ? (
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
        ) : (
          /* Imagen de relleno por default */
          <div className={styles.cardImg}>
            <img
              src="https://www.creativefabrica.com/wp-content/uploads/2018/12/Movie-roll-cinema-entertainment-icon-EPS-10-by-Hoeda80.jpg"
              alt="movie film roll"
            />
          </div>
        )}
      </div>
      {/* Movie info */}
      <div className={styles.cardInfo}>
        {/* Title and year */}
        <h3>{movie.title}</h3>
        <h4>{movie.release_date ? movie.release_date.substring(0, 4) : "-"}</h4>
      </div>
      {/* Controls */}
      {cardButton()}
    </li>
  );
};

export default MovieCard;
