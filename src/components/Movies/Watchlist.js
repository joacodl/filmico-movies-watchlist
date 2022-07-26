import React, { useContext } from "react";
import MoviesContext from "../../Store/moviesContext";
import Movies from "./Movies";

import styles from './Watchlist.module.css'

const Watchlist = () => {
  const moviesCtx = useContext(MoviesContext);

  console.log(moviesCtx);

  return (
    <div className={styles.watchlist}>
      <h2 className={styles.title}>Watchlist</h2>
      <Movies movies={moviesCtx.movies.watchlist} />
    </div>
    
  );
};

export default Watchlist;
