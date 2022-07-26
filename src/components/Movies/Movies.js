import React from 'react'

import MovieCard from './MovieCard'

import styles from './Movies.module.css'

const Movies = ({ movies }) => {
  return (
    <ul className={styles.movies}>
        {(movies.length > 0) && movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
    </ul>
  )
}

export default Movies