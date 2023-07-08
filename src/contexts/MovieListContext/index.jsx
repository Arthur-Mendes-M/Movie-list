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
            console.log(action.id)
            console.log(action.movie)
            
            break;
        default:
            throw Error("Action unknown");
    }

    localStorage.setItem("movieList", JSON.stringify(finalState))
    return finalState
}

export const MovieListProvider = ({children}) => {
    const [moviesState, moviesDispatch] = useReducer(reducer, JSON.parse(localStorage.getItem("movieList")) ?? [])

    return (
        <MovieListContext.Provider value={[moviesState, moviesDispatch]}>
            {children}
        </MovieListContext.Provider>
    )
}