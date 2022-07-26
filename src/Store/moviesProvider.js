import React, { useReducer } from "react";

import MoviesContext from "./moviesContext";
import { MoviesReducer } from "./moviesReducer";

export const ACTIONS = {
    ADD_TO_WATCHLIST: 'add_to_watchlist',
    ADD_TO_WATCHED: 'add_to_watched',
    REMOVE_FROM_WATCHLIST: 'remove_from_watchlist',
    REMOVE_FROM_WATCHED: 'remove_from_watched',
}

const initialState = {
    watchlist: [],
    watched: []
}

const MoviesProvider = (props) => {

    const [moviesState, dispatchMovies] = useReducer(MoviesReducer, initialState)

    // Handlers
    const addToWatchlistHandler = (movie) => {
        dispatchMovies({ type: ACTIONS.ADD_TO_WATCHLIST, movie: movie})
    }
    const addToWatchedHandler = (movie) => {
        dispatchMovies({ type: ACTIONS.ADD_TO_WATCHED, movie: movie})
    }
    const removeFromWatchlistHandler = (movie) => {
        dispatchMovies({ type: ACTIONS.REMOVE_FROM_WATCHLIST, movie: movie})
    }
    const removeFromWatchedHandler = (movie) => {
        dispatchMovies({ type: ACTIONS.REMOVE_FROM_WATCHED, movie: movie})
    }

    const providerValue = {
        movies: moviesState,
        addToWatchlist: addToWatchlistHandler,
        addToWatched: addToWatchedHandler,
        removeFromWatchlist: removeFromWatchlistHandler,
        removeFromWatched: removeFromWatchedHandler
    }

    return (
        <MoviesContext.Provider value={providerValue}>
            {props.children}
        </MoviesContext.Provider>
    )
}

export default MoviesProvider