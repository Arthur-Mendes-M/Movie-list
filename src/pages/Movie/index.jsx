import { useContext } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { MovieListContext } from "../../contexts/MovieListContext"
import { ActionsContainer, DescriptionData, DetailsContainer, ImageCover, MovieDetailsContainer, PosterContainer, RemoveButton, TitleContainer } from "./styles"

export const MoviePage = () => {
    const nav = useNavigate()
    const movieId = useParams().id
    const [moviesState, moviesDispatch] = useContext(MovieListContext)

    const movie = moviesState.filter(movie => movie.id == movieId)[0]

    return (
        <MovieDetailsContainer>
            <section>
                <Link to="/" className="button"><button type="button">Voltar</button></Link>
            </section>

            <TitleContainer>
                <h1 className="title">{movie.title}</h1>
                <p className="subtitle">{movie.date}</p>
            </TitleContainer>

            <PosterContainer className="poster">
                <ImageCover src={movie.cover} alt={movie.title} />   

                <DetailsContainer>
                    <DescriptionData>
                        <h2>{movie.title}</h2>
                        <p>{movie.description ? movie.description : "Nenhuma descrição"}</p>
                    </DescriptionData>
                    
                    <ActionsContainer>
                        <button type="button" onClick={() => alert("Funcionalidade em desenvolvimento")}>
                            Atualizar
                        </button>

                        <RemoveButton onClick={() => {
                            nav('/')
                            moviesDispatch({type: 'removeMovie', id: movie.id})
                        }}>
                            Remover
                        </RemoveButton>
                    </ActionsContainer>
                </DetailsContainer>
            </PosterContainer>
        </MovieDetailsContainer>
    )
}