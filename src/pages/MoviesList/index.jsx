import { useContext, useState } from "react"
import { MovieListContext } from "../../contexts/MovieListContext"
import { MovieForm } from "../../components/Form"
import { ContentContainer } from "../../components/Section"
import { MovieCard } from "../../components/MovieCard"
import { RowCardList } from "./styles"

export const MoviesListPage = () => {
    const [movies, moviesDispatch] = useContext(MovieListContext)
    const reversedMoviesList = movies.slice().reverse()
    const [filtered, setFiltered] = useState(false)
    const currentMoviesList = filtered ? reversedMoviesList : movies

    return (
        <main>
            <h1 className="title">Catálogo de filmes</h1>

            <ContentContainer title="Cadastro">
                <MovieForm 
                    actionOnSubmit={
                        {
                            action: 'create', 
                            callback: (movie) => moviesDispatch({type: 'addMovie', movie: movie})
                        }
                    }
                ></MovieForm>
            </ContentContainer>

            <ContentContainer title="Lista de filmes cadastrados">
                <button type="button" onClick={() => setFiltered(prev => !prev)}>
                    visualizar do mais {
                        filtered ? "antigo para o mais novo" : "novo para o mais antigo"
                    }
                </button>
                
                <RowCardList>
                    {   
                        currentMoviesList.length > 0 ?
                            currentMoviesList.map((movie, index) => 
                                <MovieCard 
                                    key={index} 
                                    id={movie.id} 
                                    title={movie.title} 
                                    cover={movie.cover} 
                                    action={() => moviesDispatch({type: 'removeMovie', id: movie.id})}
                                />
                            )
                        : <p className="defaultMessage">🤔 Ainda não existe nenhum filme catalogado. Teste cadastrar um no furmuláiro a cima.</p>
                    }
                </RowCardList>
            </ContentContainer>
        </main>
    )
}