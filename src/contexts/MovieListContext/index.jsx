import { createContext } from "react";
import { useState } from "react"
import { movieInterface } from "../interfaces/movieInterface";

export const MovieListContext = createContext([])

export const MovieListProvider = ({children}) => {
    const [moviesList, setMoviesList] = useState(JSON.parse(localStorage.getItem("movieList")) ?? [])

    const addMovieToList = (movie) => {
        const currentMovie = {...movieInterface, ...movie}

        setMoviesList(prev => {
            const updatedList = [...prev, currentMovie]
            
            localStorage.setItem("movieList", JSON.stringify(updatedList))
            return updatedList
        })
    } 

    const removeMoveOfList = (moveId) => {
        setMoviesList(prev => {
            const updatedList = prev.filter(movie => movie.id != moveId)

            localStorage.setItem("movieList", JSON.stringify(updatedList))
            return updatedList
        })
    }

    return (
        <MovieListContext.Provider value={[moviesList, addMovieToList, removeMoveOfList]}>
            {children}
        </MovieListContext.Provider>
    )
}