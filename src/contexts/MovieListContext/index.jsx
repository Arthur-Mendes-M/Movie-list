import { createContext, useReducer } from "react";
export const MovieListContext = createContext([])

const reducer = (state, action) => {
    let finalState = state;

    switch (action.type) {
        case 'addMovie':
            finalState = [
                ...state,
                action.movie
            ]

            break;
        case 'removeMovie':
            finalState = state.filter(movie => movie.id !== action.id)

            break;
        case 'updateMovie':
            var targetIndex = finalState.indexOf(state.filter(movie => movie.id == action.id)[0])
            var newListedMovies = [...finalState]
            newListedMovies.splice(targetIndex, 1, {...action.movie})

            finalState = newListedMovies

            break;
        default:
            throw Error("Action unknown");
    }

    localStorage.setItem("movieList", JSON.stringify(finalState))
    return finalState
}

export const MovieListProvider = ({children}) => {
    const [movies, moviesDispatch] = useReducer(reducer, JSON.parse(localStorage.getItem("movieList")) ?? [])

    return (
        <MovieListContext.Provider value={[movies, moviesDispatch]}>
            {children}
        </MovieListContext.Provider>
    )
}