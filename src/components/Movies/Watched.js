import React, { useContext } from "react";
import MoviesContext from "../../Store/moviesContext";
import Movies from "./Movies";

import styles from './Watched.module.css'

const Watched = () => {
  const moviesCtx = useContext(MoviesContext);

  console.log(moviesCtx);

  return (
    <div className={styles.watched}>
      <h2 className={styles.title}>Watched</h2>
      <Movies movies={moviesCtx.movies.watched} />
    </div>
    
  );
};

export default Watched;