import React from 'react';

const MoviesContext = React.createContext({
    watchlist: [],
    watched: [],
    addToWatchlist: () => {},
    addToWatched: () => {},
    removeFromWatchlist: () => {},
    removeFromWatched: () => {}
})

export default MoviesContext