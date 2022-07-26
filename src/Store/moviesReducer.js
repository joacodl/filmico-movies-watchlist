import { ACTIONS } from "./moviesProvider";


export const MoviesReducer = (moviesState, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TO_WATCHLIST:
            // const existingMovieWatchlistIndex = movies.watchlist.findIndex(movie => movie.id === action.movie.id);
            // const existingWatchlistMovie = movies.watchlist[existingMovieWatchlistIndex]

            // if (!existingWatchlistMovie) {
            //     return ([...movies.watchlist, action.movie])
            // }
            // const updatedWatchlist = [...moviesState.watchlist, action.movie]
            return {
                watchlist: [...moviesState.watchlist, action.movie],
                watched: moviesState.watched
            }
        
        case ACTIONS.ADD_TO_WATCHED:
            // const existingMovieWatchedIndex = movies.watched.findIndex(movie => movie.id === action.movie.id);
            // const existingWatchedMovie = movies.watched[existingMovieWatchedIndex]

            // if (!existingWatchedMovie) {
            //     movies.watchlist.filter(movie => movie.id !== action.movie.id)
            //     return ([...movies.watched, action.movie])
            // }

            return {
                watchlist: moviesState.watchlist.filter(movie => movie.id !== action.movie.id),
                watched: [...moviesState.watched, action.movie]
            }

        case ACTIONS.REMOVE_FROM_WATCHLIST:
            return {
                watchlist: moviesState.watchlist.filter(movie => movie.id !== action.movie.id),
                watched: moviesState.watched
            }

        case ACTIONS.REMOVE_FROM_WATCHED:
            return {
                watchlist: moviesState.watchlist,
                watched: moviesState.watched.filter(movie => movie.id !== action.movie.id)
            }

        default:
            break;
    }
}